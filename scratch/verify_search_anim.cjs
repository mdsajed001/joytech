const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(__dirname, 'chrome_verify_anim');

const p = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9235',
  '--window-size=1536,900',
  `--user-data-dir=${userDataDir}`,
  'http://localhost:5173'
]);

setTimeout(async () => {
  try {
    const res = await fetch('http://127.0.0.1:9235/json');
    const tabs = await res.json();
    const wsUrl = tabs[0]?.webSocketDebuggerUrl;
    if (!wsUrl) return;

    const ws = new WebSocket(wsUrl);
    ws.onopen = () => {
      let id = 1;
      const send = (method, params = {}) => ws.send(JSON.stringify({ id: id++, method, params }));
      send('Page.enable');
      send('Page.navigate', { url: 'http://localhost:5173' });

      // First capture at t=0
      setTimeout(() => {
        ws.onmessage = (event) => {
          const msg = JSON.parse(event.data);
          if (msg.result && msg.result.data) {
            fs.writeFileSync('c:/Users/Sajed/Documents/joytech/search_anim_0s.png', Buffer.from(msg.result.data, 'base64'));
            console.log('Saved search_anim_0s.png');

            // Second capture after 2.5s mid-flight
            setTimeout(() => {
              ws.onmessage = (ev2) => {
                const m2 = JSON.parse(ev2.data);
                if (m2.result && m2.result.data) {
                  fs.writeFileSync('c:/Users/Sajed/Documents/joytech/search_anim_2.5s.png', Buffer.from(m2.result.data, 'base64'));
                  console.log('Saved search_anim_2.5s.png');
                  p.kill();
                  process.exit(0);
                }
              };
              send('Page.captureScreenshot', { format: 'png' });
            }, 2500);
          }
        };
        send('Page.captureScreenshot', { format: 'png' });
      }, 1500);
    };
  } catch (e) {
    console.error(e);
    p.kill();
  }
}, 2500);
