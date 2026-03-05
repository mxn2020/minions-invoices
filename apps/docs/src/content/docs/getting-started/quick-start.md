---
title: Quick Start
description: Get up and running with Minions Invoices in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-invoices/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_invoices import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
invoices info
```
