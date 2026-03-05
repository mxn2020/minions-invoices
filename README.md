![CI](https://github.com/mxn2020/minions-invoices-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-invoices

**Invoice generation, payment tracking, due dates, and billing status for agency clients**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-invoices/sdk minions-sdk

# Python
pip install minions-invoices

# CLI (global)
npm install -g @minions-invoices/cli
```

---

## CLI

```bash
# Show help
invoices --help
```

---

## Python SDK

```python
from minions_invoices import create_client

client = create_client()
```

---

## Project Structure

```
minions-invoices/
  packages/
    core/           # TypeScript core library (@minions-invoices/sdk on npm)
    python/         # Python SDK (minions-invoices on PyPI)
    cli/            # CLI tool (@minions-invoices/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [invoices.minions.help](https://invoices.minions.help)
- Blog: [invoices.minions.blog](https://invoices.minions.blog)
- App: [invoices.minions.wtf](https://invoices.minions.wtf)

---

## License

[MIT](LICENSE)
