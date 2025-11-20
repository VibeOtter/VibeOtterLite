const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const Anthropic = require('@anthropic-ai/sdk');
const crypto = require('crypto');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Initialize Claude client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

if (!process.env.ANTHROPIC_API_KEY) {
  console.warn('ANTHROPIC_API_KEY is not set. Requests will fail until you configure it.');
}

// Serve static files
app.use(express.static(__dirname));

const RATE_LIMIT_MS = 3000;

// WebSocket connection handler
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  let currentHandshakeToken = null;
  let lastRequestAt = 0;

  socket.on('init-handshake', () => {
    currentHandshakeToken = crypto.randomUUID().replace(/-/g, '');
    socket.emit('handshake-ready', { token: currentHandshakeToken });
  });

  // Handle user messages
  socket.on('user-message', async (data) => {
    const message = typeof data?.message === 'string' ? data.message.trim() : '';

    if (!currentHandshakeToken) {
      socket.emit('error', { error: 'Connection not initialized yet.' });
      return;
    }

    if (!message) {
      socket.emit('error', { error: 'Please describe what you want to build.' });
      return;
    }

    const now = Date.now();
    if (now - lastRequestAt < RATE_LIMIT_MS) {
      const waitSeconds = Math.ceil((RATE_LIMIT_MS - (now - lastRequestAt)) / 1000);
      socket.emit('error', { error: `Easy there! Please wait ${waitSeconds}s before sending another request.` });
      return;
    }
    lastRequestAt = now;

    if (!process.env.ANTHROPIC_API_KEY) {
      socket.emit('error', { error: 'Server not configured with an Anthropic API key.' });
      return;
    }

    try {
      // Simple system prompt for this lightweight example
      const systemPrompt = `You are a helpful website builder assistant. When users describe a website they want, you create clean HTML and CSS for them.

Your responses should include:
1. A brief explanation of what you're creating
2. The HTML code wrapped in <html>...</html> tags
3. The CSS code wrapped in <style>...</style> tags

Keep designs simple, modern, and mobile-responsive. Use semantic HTML and clean CSS.`;

      // Call Claude API
      const response = await anthropic.messages.create({
        model: 'claude-sonnet-4-5-20250929',
        max_tokens: 4000,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: message
          }
        ]
      });

      const assistantMessage = response.content[0].text;

      // Extract HTML from response
      const htmlMatch = assistantMessage.match(/<html[^>]*>([\s\S]*?)<\/html>/i);

      if (htmlMatch) {
        const html = htmlMatch[0];

        // Send back to client for direct preview rendering only
        socket.emit('assistant-response', {
          message: assistantMessage,
          html,
          previewHtml: html
        });
      } else {
        // Just a text response, no code generated
        socket.emit('assistant-response', {
          message: assistantMessage
        });
      }

    } catch (error) {
      console.error('Error calling Claude:', error);
      socket.emit('error', { error: error.message });
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
    currentHandshakeToken = null;
    lastRequestAt = 0;
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
