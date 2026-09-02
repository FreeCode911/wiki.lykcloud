---
title: Performance
---

# Performance

Optimize your LykCloud deployments for maximum throughput and minimum latency.

## Benchmarking

Run a baseline benchmark before optimizing:

```bash
lykcloud bench --duration 60s --concurrency 50
```

Key metrics to watch:

| Metric | Target | Critical |
|---|---|---|
| P95 Latency | < 200ms | > 500ms |
| Error Rate | < 0.1% | > 1% |
| Throughput | > 1000 rps | < 500 rps |

## Scaling

### Horizontal Scaling

Scale out automatically based on CPU utilization:

```bash
lykcloud scale set --min 2 --max 20 --cpu-threshold 70%
```

### Connection Pooling

Configure connection pools for databases:

```ts
// lykcloud.config.ts
export default {
  database: {
    pool: { min: 2, max: 20, idleTimeout: 30000 },
  },
}
```

## Caching

Enable edge caching for static assets and API responses:

```bash
lykcloud cache enable --ttl 3600 --stale-while-revalidate
```

## Cost Optimization

Right-size instances based on actual usage:

```bash
lykcloud cost analyze --period 30d
lykcloud scale down --dry-run
```
