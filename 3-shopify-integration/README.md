# Shopify Integration (Overview Only)

Vibe Otter is the only AI builder that lets you connect an existing Shopify store without juggling 10 different APIs. 

## Architecture at a glance

1. **Client identifies the store** – User enters `mystore.myshopify.com` or a custom domain.
2. **Validation layer** – We verify DNS + storefront availability and normalize the domain.
3. **Tokenless Storefront API queries** – Read-only GraphQL calls pull products, variants, pricing, and availability.
4. **Lite cart** – Client-side cart UI mirrors Shopify’s rules, then hands off to the official checkout.
5. **Safeguards** – Rate-limiting, caching, and abuse protection keep the workflow safe for merchants.

## Want a working integration?

Deploy an account on vibeotter.com for the full production workflow with hosting and automation.
