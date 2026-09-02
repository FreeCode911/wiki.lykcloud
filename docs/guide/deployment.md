---
title: Deployment
---

# Deployment

LykCloud supports multiple deployment strategies. This guide covers the most common patterns.

## Deployment Modes

| Mode | Use Case | Command |
|---|---|---|
| Static | Frontend-only sites | `lykcloud deploy --mode static` |
| Serverless | APIs and event-driven functions | `lykcloud deploy --mode serverless` |
| Container | Full containerized workloads | `lykcloud deploy --mode container` |

## Environment Configuration

Use `.env` files or the LykCloud dashboard to manage secrets:

```bash
# .env.production
LYKCLOUD_API_KEY=your_api_key
DATABASE_URL=postgres://user:pass@host:5432/db
```

Never commit secrets to version control. Use the LykCloud secrets manager instead:

```bash
lykcloud secrets set DATABASE_URL "postgres://..."
```

## Rolling Deployments

LykCloud automatically performs rolling deployments with zero downtime. To control the strategy:

```bash
lykcloud deploy --strategy rolling --max-surge 25%
```

## Rollback

If a deployment fails, roll back instantly:

```bash
lykcloud deploy --rollback
```

Or target a specific previous version:

```bash
lykcloud deploy --version v1.2.3
```

## Monitoring

After deployment, monitor your application:

```bash
lykcloud logs --follow
lykcloud metrics --period 1h
```
