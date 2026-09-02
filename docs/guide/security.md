---
title: Security
---

# Security

Security is a shared responsibility. This guide covers the controls available in LykCloud and recommended practices.

## Network Security

- All traffic is encrypted in transit (TLS 1.3 enforced)
- Use private networks for database and internal service communication
- Configure WAF rules to filter malicious requests

```bash
# Enable WAF for your project
lykcloud waf enable --rules owasp-top-10
```

## Access Control

Use role-based access control (RBAC) to limit permissions:

```bash
lykcloud iam create-role deployer --permissions deploy,read-logs
lykcloud iam assign-role deployer --user alice@example.com
```

| Role | Permissions |
|---|---|
| `admin` | Full access |
| `deployer` | Deploy and read logs |
| `viewer` | Read-only access |

## Secrets Management

Never hardcode secrets. Use the built-in secrets manager:

```bash
lykcloud secrets set API_KEY "super-secret-value"
lykcloud secrets list
lykcloud secrets rotate API_KEY
```

## Audit Logging

Enable audit logging to track all control plane actions:

```bash
lykcloud audit enable --retention 90d
```

Logs are immutable and available via the dashboard or CLI:

```bash
lykcloud audit query --action "iam.*" --last 7d
```

## Compliance Checklist

- [ ] Enable MFA on all admin accounts
- [ ] Rotate all secrets on a 90-day schedule
- [ ] Review WAF rules quarterly
- [ ] Enable audit logging with 90-day retention
- [ ] Conduct a penetration test annually
