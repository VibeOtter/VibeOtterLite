const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

function escapeHtml(input = '') {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildPlaceholderSection(prompt) {
  const safePrompt = escapeHtml(prompt).slice(0, 140);
  return `
    <section style="padding: 80px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 24px; text-align: left;">
      <p style="text-transform: uppercase; letter-spacing: 0.3em; opacity: 0.7; font-size: 0.75rem;">Vibe Otter Lite</p>
      <h1 style="font-size: 48px; margin: 16px 0;">${safePrompt || 'Your next big idea'}</h1>
      <p style="font-size: 20px; line-height: 1.6; max-width: 640px;">
        Sections are generated locally so you can iterate quickly without waiting on remote services.
      </p>
      <div style="margin-top: 32px; display: flex; gap: 16px; flex-wrap: wrap;">
        <button style="padding: 16px 30px; border-radius: 999px; border: none; background: #fff; color: #5c67f2; font-weight: 700; cursor: pointer;">Preview live</button>
        <button style="padding: 16px 30px; border-radius: 999px; border: 2px solid rgba(255,255,255,0.5); background: transparent; color: #fff; font-weight: 600; cursor: pointer;">Customize in editor</button>
      </div>
    </section>
  `;
}

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('ai-generate', (data = {}) => {
    const message = typeof data.message === 'string' ? data.message.trim() : '';

    if (!message) {
      socket.emit('error', { error: 'Please describe what you want to build.' });
      return;
    }

    const html = buildPlaceholderSection(message);
    socket.emit('ai-response', {
      message: `✨ Generated a mock section for “${escapeHtml(message)}”. Drop it into the canvas and keep iterating!`,
      html: `<div>${html}</div>`
    });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Hybrid editor stub running on port ${PORT}`);
  console.log('Full experience available at https://vibeotter.com');
});
