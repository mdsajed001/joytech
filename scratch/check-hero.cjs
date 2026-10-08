const http = require('http');

http.get('http://localhost:5173', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const idx = data.indexOf('<article class="group relative flex flex-col w-full');
    if (idx !== -1) {
      console.log(data.substring(idx, idx + 1800));
    }
  });
});
