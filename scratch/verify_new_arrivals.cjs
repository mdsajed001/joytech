const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(__dirname, 'chrome_profile');

const p = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9222',
  '--window-size=390,844',
  `--user-data-dir=${userDataDir}`,
  'http://localhost:5173/#new-arrivals'
]);

setTimeout(async () => {
  try {
    const res = await fetch('http://127.0.0.1:9222/json');
    const tabs = await res.json();
    const wsUrl = tabs[0]?.webSocketDebuggerUrl;
    if (!wsUrl) return;

    const ws = new WebSocket(wsUrl);
    ws.onopen = () => {
      let id = 1;
      const send = (method, params = {}) => ws.send(JSON.stringify({ id: id++, method, params }));
      send('Page.enable');
      send('Runtime.enable');
      send('Page.navigate', { url: 'http://localhost:5173/#new-arrivals' });

      setTimeout(() => {
        send('Runtime.evaluate', {
          expression: `
            const el = document.getElementById('new-arrivals');
            if (el) window.scrollTo(0, el.offsetTop - 100);
          `
        });
        setTimeout(() => {
          ws.onmessage = (event) => {
            const msg = JSON.parse(event.data);
            if (msg.result && msg.result.data) {
              fs.writeFileSync('c:/Users/Sajed/Documents/joytech/new_arrivals_verified.png', Buffer.from(msg.result.data, 'base64'));
              console.log('Saved new_arrivals_verified.png');
              p.kill();
              process.exit(0);
            }
          };
          send('Page.captureScreenshot', { format: 'png' });
        }, 800);
      }, 1500);
    };
  } catch(e) {
    console.error(e);
    p.kill();
  }
}, 2500);
