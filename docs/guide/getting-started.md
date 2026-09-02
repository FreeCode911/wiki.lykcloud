---
title: Getting Started
---

# Getting Started

This guide walks you through setting up your first project on LykCloud.

## Prerequisites

- A LykCloud account (sign up at [lykcloud.int.yt](https://lykcloud.int.yt))
- Node.js 18+ and npm/pnpm installed
- A terminal with SSH access

## Step 1: Install the CLI

```bash
npm install -g @lykcloud/cli
```

Verify the installation:

```bash
lykcloud --version
# Expected output: LykCloud CLI v2.x.x
```

## Step 2: Authenticate

```bash
lykcloud auth login
```

This opens a browser window where you can authenticate with your LykCloud credentials. Once complete, your session is stored locally.

## Step 3: Initialize a Project

```bash
lykcloud init my-first-project
cd my-first-project
```

This scaffolds a minimal project with a `lykcloud.config.ts` file.

## Step 4: Deploy

```bash
lykcloud deploy --env production
```

Your project is now live. Run `lykcloud logs` to stream real-time logs.

## What's Next

- Configure [deployment](/guide/deployment) settings for production workloads
- Review the [security](/guide/security) checklist before going live
