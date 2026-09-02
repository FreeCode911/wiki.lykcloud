---
title: API Integration
---

# API Integration

LykCloud exposes a REST API and a GraphQL endpoint for programmatic control.

## REST API

Base URL: `https://api.lykcloud.int.yt/v1`

### Authentication

Include your API key in the `Authorization` header:

```bash
curl https://api.lykcloud.int.yt/v1/projects \
  -H "Authorization: Bearer $LYKCLOUD_API_KEY"
```

### Key Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/projects` | List all projects |
| `POST` | `/projects` | Create a new project |
| `GET` | `/projects/:id` | Get project details |
| `DELETE` | `/projects/:id` | Delete a project |

## GraphQL

GraphQL endpoint: `https://api.lykcloud.int.yt/graphql`

```graphql
query {
  projects {
    id
    name
    status
    createdAt
  }
}
```

## Rate Limits

- REST: 1000 requests/minute per API key
- GraphQL: Calculated based on query complexity

Monitor your usage:

```bash
lykcloud api rate-limit
```

## SDK

Use the official SDK for TypeScript/JavaScript:

```bash
npm install @lykcloud/sdk
```

```ts
import { LykCloud } from '@lykcloud/sdk'

const client = new LykCloud({ apiKey: process.env.LYKCLOUD_API_KEY })
const projects = await client.projects.list()
```
