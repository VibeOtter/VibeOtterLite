# Hybrid AI + Drag-and-Drop Builder

This folder showcases the **interface** that makes Vibe Otter unique: an AI chat rail on the left and a GrapeJS visual editor on the right. Everything here runs locally and streams HTML sections you can edit immediately.

## Run It Locally

```bash
cd 2-grapejs-hybrid
npm install
npm start
# open http://localhost:3001
```

You do **not** need an Anthropic key for the lite build. Every request stays in your browser and on the Node server that ships with this repo.

## How this build behaves

1. Type a request like "Create a bold hero for a boxing gym".
2. The server echoes back a formatted section referencing your text.
3. The HTML drops into GrapeJS so you can drag, drop, and restyle it.


## Customizing the build

Feel free to edit the section generator inside `server.js` to match your brand voice. It’s a simple template literal—no API calls required.


## Learn more

- Explore the hosted platform: [https://vibeotter.com](https://vibeotter.com)
- Dive into the Shopify overview in `/3-shopify-integration`
- Review `THIRD_PARTY_NOTICES.md` for the bundled GrapeJS MIT license text
