# Basic AI Website Builder

A simple conversational AI website builder using Claude 4.5. This demonstrates the core concept: chat with an AI to generate websites in real-time.

## How It Works

1. **User describes a website** - "Create a landing page for a coffee shop"
2. **Claude generates HTML/CSS** - Full working website code
3. **Live preview updates** - See results instantly in the preview pane
4. **Iterate with conversation** - "Make the header bigger", "Add a contact form"

## Setup

```bash
# Install dependencies
npm install

# Set your Claude API key
export ANTHROPIC_API_KEY="your-api-key-here"

# Start the server
npm start
```

Open http://localhost:3000 in your browser.

## Architecture

- **Express + Socket.io** - Real-time communication between client and server
- **Claude 4.5 Sonnet** - AI model for generating website code
- **Ephemeral tokens** - Each browser tab gets a throwaway token to keep the session stateless
- **Live preview** - Iframe shows the generated website instantly

## Key Features

✅ Conversational interface
✅ Real-time generation
✅ Live preview
✅ Stateless handshake (no disk writes)

## Next Steps

1. Try the GrapeJS hybrid version in `/2-grapejs-hybrid` for visual editing
2. Check out the Shopify integration tutorial in `/3-shopify-integration`
3. Visit [vibeotter.com](https://vibeotter.com) for the hosted platform

---

Built with 🦦 by Vibe Otter
