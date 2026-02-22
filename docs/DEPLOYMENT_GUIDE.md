# FATE Quantum Visualization - Zero-Code Deployment Guide
## For System Admins (0-3 Years Experience) Using Claude/Gemini APIs

**Difficulty Level:** Beginner-Intermediate  
**Time Required:** 4-6 hours (first deployment)  
**Tools Used:** VSCode, Claude Sonnet 4, GitHub (free), Vercel/Render (free tier)  
**Cost:** $0 on free tier; $15-25/month for production (see cost breakdown below)

---

## PHASE 0: Prerequisites (30 minutes)

### What You Need:
- ✅ **VSCode** - Download from code.visualstudio.com (free)
- ✅ **GitHub Account** - github.com (free)
- ✅ **Claude API Key** - From claude.ai/api (pay-as-you-go, ~$0.50/deployment)
- ✅ **Deployment Account** - Vercel.com OR Render.com (free tier available)
- ✅ **Browser** - Chrome/Firefox/Safari

### Step 1: Install VSCode Extensions
Open VSCode and install these 3 extensions:
1. **GitHub Copilot** (by GitHub) - Free 30-day trial
2. **Thunder Client** (by Ranga Vadhineni) - For testing APIs
3. **REST Client** (by Huachao Mao) - Make API calls

**How to install:**
1. Open VSCode
2. Press `Ctrl+Shift+X` (Windows) or `Cmd+Shift+X` (Mac)
3. Search for each extension name
4. Click "Install"

### Step 2: Get Your API Keys
1. Go to **console.anthropic.com**
2. Click "Create API Key"
3. Copy the key (save it in a safe text file, NEVER share it)
4. You'll use this to ask Claude to generate code

---

## PHASE 1: Ask Claude to Create Your Project (1 hour)

### PROMPT #1: Generate Complete Project Structure

**Copy-paste this exact prompt into Claude at claude.ai:**

```
I'm a system admin with 2 years experience. I need you to create a complete, 
production-ready deployment package for the FATE Quantum Visualization system.

Generate EVERYTHING I need:
1. Complete project folder structure (as text/tree)
2. All configuration files (docker-compose.yml, .env files, etc.)
3. Deployment scripts (bash scripts for setup)
4. All necessary JSON config files (package.json, tsconfig.json, etc.)

Requirements:
- Zero external dependencies I have to install manually
- Works with Vercel or Render (free tier)
- Uses PostgreSQL (managed - no manual setup)
- Uses Redis (managed - no manual setup)
- Full inline comments explaining each line
- Security best practices included
- 12-factor app compliant

Make it so simple that I just copy-paste each file and it works.
```

**Claude will give you:** Complete file listing with content

### PROMPT #2: Generate Docker Setup Files

```
Generate a complete Docker setup that:
1. Runs backend (Node.js + Express)
2. Runs frontend (React)
3. Connects to PostgreSQL (via connection string)
4. Connects to Redis (via connection string)
5. Works on my laptop first (docker-compose.yml for local development)
6. Then deploys to Render.com with environment variables

Include:
- Dockerfile for backend (with comments)
- Dockerfile for frontend (with comments)
- docker-compose.yml for local testing
- .dockerignore files
- Health check scripts

Make it production-ready but simple enough for a junior admin.
```

### PROMPT #3: Generate Environment Templates

```
I need template files for:
1. .env.example (with ALL variables, documented)
2. .env.production (for deployed version)
3. .env.test (for testing)
4. .env.development (for local development)

For each variable, add:
- What it does (comment)
- Example value
- Security note (if sensitive)
- Where to get the value (if external)

Make it so I can just rename .env.example to .env and update one section.
```

---

## PHASE 2: Create Project Folder in VSCode (30 minutes)

### Step 1: Open VSCode Terminal
Press `Ctrl+`` (backtick key) to open built-in terminal

### Step 2: Create Project Folder

```bash
# Create the main project directory
mkdir fate-quantum-deployment
cd fate-quantum-deployment

# Create backend and frontend subdirectories
mkdir -p backend/src
mkdir -p frontend/src

# Create scripts and config directories
mkdir -p scripts
mkdir -p .github/workflows

# Confirm structure was created
ls -la
```

### Step 3: Open Folder in VSCode
1. Click "File" → "Open Folder"
2. Navigate to `fate-quantum-deployment`
3. Click "Select Folder"
4. VSCode now shows your folder structure on the left

---

## PHASE 3: Use Claude to Generate All Files (1.5 hours)

### PROMPT #4: Generate Backend Files

```
Generate a complete Node.js + Express + TypeScript backend for the FATE Quantum
Visualization system.

Include these files with full content:
- src/index.ts           (main entry point with Express server)
- src/routes/api.ts      (REST API endpoints)
- src/middleware/auth.ts (JWT authentication)
- src/middleware/cors.ts (CORS configuration)
- src/services/database.ts (Prisma + PostgreSQL service)
- src/services/websocket.ts (WebSocket server)
- src/models/user.ts    (User data model)
- prisma/schema.prisma  (database schema)
- package.json          (with all dependencies)
- tsconfig.json         (TypeScript configuration)

Each file should have:
- Full inline comments explaining every line
- Error handling for all operations
- Environment variable usage (no hardcoded values)
- TypeScript types throughout
```

### PROMPT #5: Generate Frontend Files

```
Generate a complete React + TypeScript frontend for the FATE Quantum Visualization
system.

Include these files with full content:
- src/App.tsx                   (main application component)
- src/components/QuantumCard.tsx (card visualization component)
- src/components/Dashboard.tsx  (admin dashboard)
- src/services/api.ts           (API client with fetch)
- src/services/websocket.ts     (WebSocket client)
- src/hooks/useQuantum.ts       (React hook for quantum state)
- src/types/index.ts            (TypeScript types)
- public/index.html             (HTML template)
- package.json                  (with all dependencies)
- tsconfig.json                 (TypeScript configuration)
- vite.config.ts                (Vite build configuration)

Each component should have:
- Full TypeScript types
- Error boundaries
- Loading states
- Mobile-responsive design
```

### PROMPT #6: Generate Configuration Files

```
Generate all configuration files needed for the FATE Quantum Visualization system:

1. nginx.conf              (reverse proxy for frontend + backend)
2. .eslintrc.json          (ESLint for backend and frontend)
3. jest.config.js          (unit testing configuration)
4. playwright.config.ts    (E2E testing configuration)
5. .prettierrc             (code formatting)
6. .github/workflows/ci.yml (GitHub Actions CI/CD pipeline)
7. render.yaml             (Render.com blueprint file)

Include comments explaining each setting and why it matters.
```

### PROMPT #7: Generate Deployment Scripts

```
Generate deployment bash scripts for the FATE Quantum Visualization system:

1. scripts/setup.sh       - Initial setup (install dependencies, setup database)
2. scripts/deploy.sh      - Deploy to Render/Vercel
3. scripts/backup-db.sh   - Manual database backup
4. scripts/rollback.sh    - Rollback to previous version
5. scripts/health-check.sh - Check all services are healthy
6. scripts/migrate.sh     - Run database migrations

Each script should:
- Have a header comment explaining what it does
- Check prerequisites before running
- Print colored status messages (green = ok, red = error)
- Exit on any error (set -e)
- Work on macOS and Linux
```

---

## PHASE 4: Copy Files into VSCode (45 minutes)

### Step 1: Create Each File
For EACH file Claude generated:

1. Right-click in VSCode file explorer → "New File"
2. Enter the filename (e.g., `backend/src/index.ts`)
3. Paste the content Claude provided
4. Press `Ctrl+S` to save

**Tip:** Use VSCode's multi-cursor feature:
- Open file
- `Ctrl+H` for Find & Replace
- Replace `[PLACEHOLDER]` with your values quickly across all files

### Step 2: Update .env Files

Create `.env` files for each environment:

**Create `backend/.env`:**

```bash
# ── Database ──────────────────────────────────────────────────────────────────
# PostgreSQL connection string (get from Render dashboard after creating DB)
DATABASE_URL=postgresql://postgres:password@localhost:5432/fate_quantum

# ── Redis ─────────────────────────────────────────────────────────────────────
# Redis connection string (local dev uses default port)
REDIS_URL=redis://localhost:6379

# ── Authentication ────────────────────────────────────────────────────────────
# Secret key for signing JWT tokens — CHANGE THIS before deploying!
JWT_SECRET=change-this-to-a-long-random-string-in-production
JWT_EXPIRY=24h

# ── Server ────────────────────────────────────────────────────────────────────
PORT=3001
NODE_ENV=development

# ── CORS ──────────────────────────────────────────────────────────────────────
# URL of the frontend (used to allow cross-origin requests)
FRONTEND_URL=http://localhost:3000

# ── External APIs ─────────────────────────────────────────────────────────────
# Claude API key for AI-powered features (keep secret!)
CLAUDE_API_KEY=sk-ant-xxxx
```

**Create `frontend/.env`:**

```bash
# ── Backend Connection ────────────────────────────────────────────────────────
# URL of the backend REST API (Vite exposes vars prefixed with VITE_)
VITE_API_URL=http://localhost:3001

# WebSocket URL for real-time features
VITE_WS_URL=ws://localhost:3001

# ── App Metadata ──────────────────────────────────────────────────────────────
VITE_APP_NAME=FATE Quantum Visualization
VITE_APP_VERSION=1.0.0
```

### Step 3: Test Locally

```bash
# Start all services (backend + frontend + database + redis)
docker-compose up --build

# In a second terminal, verify each service is running
docker-compose ps

# Check backend health endpoint
curl http://localhost:3001/health
# Expected: {"status":"ok","database":"connected","redis":"connected"}

# Open frontend in browser (auto-opens on most systems)
open http://localhost:3000       # macOS
xdg-open http://localhost:3000  # Linux
# Windows: just open Chrome and go to http://localhost:3000
```

---

## PHASE 5: Deploy to Cloud (1.5 hours)

### Option A: Deploy to Render.com (Recommended for Beginners)

#### Step 1: Create Render Account
1. Go to **render.com**
2. Click "Sign Up"
3. Use GitHub account (easiest)
4. Authorize access to repositories

#### Step 2: Create GitHub Repository

**In VSCode terminal:**

```bash
# Initialize a new Git repository
git init

# Stage all files for commit
git add .

# Create the first commit
git commit -m "feat: initial FATE Quantum Visualization deployment"

# Add your GitHub repo as the remote origin
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/fate-quantum.git

# Rename default branch to 'main'
git branch -M main

# Push to GitHub (prompts for credentials on first run)
git push -u origin main
```

*Replace `YOUR_USERNAME` with your actual GitHub username*

#### Step 3: Deploy Backend to Render

**Prompt to Claude:**

```
I have a Node.js + Express + TypeScript backend in a GitHub repo.

Repo: https://github.com/YOUR_USERNAME/fate-quantum
Backend folder: /backend

I want to deploy it to Render.com as a Web Service.

Please give me:
1. The exact render.yaml configuration for my backend
2. The build command for a TypeScript + Prisma backend
3. The start command after build
4. Which environment variables I need to set in the Render dashboard
5. How to connect to the Render-managed PostgreSQL database
6. How to run Prisma migrations automatically on every deploy

I'm a beginner — make each step very clear with no assumed knowledge.
```

**Claude will give:** Exact steps to follow

**Summary:**
1. Create new "Web Service" on Render
2. Connect GitHub repo
3. Set build command: `npm install && npm run build`
4. Set start command: `npm run start`
5. Add environment variables (from .env.production)
6. Create PostgreSQL database on Render
7. Update DATABASE_URL in environment
8. Deploy

#### Step 4: Deploy Frontend to Render/Vercel

**Option 1 - Deploy to Vercel (Easiest for Frontend):**
1. Go to **vercel.com**
2. Click "Import Project"
3. Select your GitHub repo
4. Click "Deploy"
5. Add environment variables in settings
6. Done! (Vercel auto-deploys on git push)

**Option 2 - Deploy to Render:**
1. Create another "Static Site" on Render
2. Connect GitHub
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables
6. Deploy

---

## PHASE 6: Verify Deployment (30 minutes)

### Step 1: Check Backend Health

```bash
# Replace with your actual Render URL
curl https://your-api.onrender.com/health

# Expected response (200 OK):
# {
#   "status": "ok",
#   "database": "connected",
#   "redis": "connected",
#   "uptime": 12345
# }

# If you get an error, check Render logs:
# Render dashboard → Web Service → Logs
```

### Step 2: Check Frontend Loads
Open browser to: `https://your-frontend.vercel.app`

Should see: FATE quantum visualization interface

### Step 3: Test Database Connection

**Prompt to Claude:**

```
My backend is deployed at https://your-api.onrender.com
I connected a PostgreSQL database from Render.

How do I verify everything is working?
1. Confirm the database connection is healthy
2. Check that Prisma migrations ran successfully
3. Test creating a user via the REST API
4. Confirm data persists after the app restarts

Please provide exact curl commands I can run from my terminal,
with the expected output for each command.
```

### Step 4: Monitor Logs
- **Backend logs:** Render dashboard → Logs tab
- **Frontend logs:** Vercel dashboard → Deployments → Logs
- **Database logs:** Render PostgreSQL dashboard → Logs

---

## PHASE 7: Maintenance & Monitoring (Ongoing)

### Daily Checks (5 minutes)

```bash
# 1. Ping the health endpoint (should return 200 OK)
curl -s -o /dev/null -w "%{http_code}" https://your-api.onrender.com/health

# 2. Confirm frontend is reachable
curl -s -o /dev/null -w "%{http_code}" https://your-frontend.vercel.app

# 3. Review today's errors in Render dashboard
#    Render → Web Service → Logs → filter by "ERROR" or "WARN"
#    Time range: Last 24 hours
```

### Weekly Tasks (30 minutes)
1. **Review logs** for errors
2. **Check disk usage** (database growing?)
3. **Update dependencies:** 
   ```bash
   npm outdated  # See what's old
   npm update    # Update safely
   ```
4. **Backup database**
   ```bash
   # Render: Auto-backups enabled by default
   # Manual backup: Use Render dashboard
   ```

### Monthly Tasks (1 hour)
1. **Security updates:**
   ```bash
   npm audit  # Find vulnerabilities
   npm audit fix  # Patch them
   git push  # Auto-redeploy
   ```

2. **Performance review:**
   - Check database query times
   - Review user sessions
   - Look at error rate

3. **Update SSL certificates** (automatic on Render/Vercel)

---

## SECRET TIPS & TRICKS (Pro Tips)

### Tip #1: Use GitHub Secrets for API Keys
Instead of hardcoding secrets:

```bash
# Add secrets in GitHub:
# Repo → Settings → Secrets and variables → Actions → New repository secret
#
# SECRET NAME          VALUE
# ───────────────────────────────────────────────────
# DATABASE_URL         postgresql://user:pass@host/db
# JWT_SECRET           your-long-random-secret
# CLAUDE_API_KEY       sk-ant-xxxx
# RENDER_DEPLOY_HOOK   https://api.render.com/deploy/...
#
# Reference in GitHub Actions workflow:
# ${{ secrets.DATABASE_URL }}
# ${{ secrets.JWT_SECRET }}
```

### Tip #2: Auto-Rollback on Failed Deployment

**Prompt:**

```
Generate a GitHub Actions workflow file (.github/workflows/deploy.yml) that:
1. Triggers on every push to the 'main' branch
2. Runs the full test suite (backend + frontend)
3. Only triggers a Render deploy hook if ALL tests pass
4. After deploying, polls GET /health for up to 3 minutes
5. If /health never returns 200, reverts via 'git revert HEAD && git push'
6. Sends a Slack webhook notification with success or failure status
7. Creates a GitHub Release tag on a successful production deploy

I'm using Render for hosting, Vercel for the frontend, and GitHub Actions.
Show me exactly where to add each GitHub Secret.
```

### Tip #3: Monitor Database Growth

```sql
-- Run in Render PostgreSQL dashboard → Query console

-- Overall database size
SELECT pg_size_pretty(pg_database_size(current_database())) AS db_size;

-- Top 10 largest tables
SELECT
  relname                                          AS table_name,
  pg_size_pretty(pg_total_relation_size(relid))   AS total_size
FROM pg_catalog.pg_statio_user_tables
ORDER BY pg_total_relation_size(relid) DESC
LIMIT 10;
```

### Tip #4: Debug WebSocket Issues
Most common issue: WebSocket connects with `ws://` instead of `wss://` on HTTPS

**Fix:**

```typescript
// frontend/src/services/websocket.ts

// ❌ WRONG — hardcodes ws:// which browsers block on HTTPS pages
const ws = new WebSocket('ws://your-api.onrender.com/ws');

// ✅ CORRECT — auto-detects the right protocol
const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
const apiHost  = import.meta.env.VITE_API_URL.replace(/^https?:\/\//, '');
const ws       = new WebSocket(`${protocol}//${apiHost}/ws`);
```

### Tip #5: Use Read Replicas for Analytics
When you grow:

```typescript
// backend/src/services/database.ts

// Primary connection — used for INSERT / UPDATE / DELETE
const primaryDb = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } },
});

// Read replica — used for SELECT queries (cheaper & faster)
const readDb = new PrismaClient({
  datasources: {
    db: { url: process.env.DATABASE_REPLICA_URL || process.env.DATABASE_URL },
  },
});

// Always verify connectivity at startup so errors surface early
primaryDb.$connect().catch((err) => {
  console.error('Primary DB connection failed:', err.message);
  process.exit(1);
});

export { primaryDb, readDb };
```

### Tip #6: Cache API Responses

```typescript
// backend/src/middleware/cache.ts
import { createClient } from 'redis';
import type { Request, Response, NextFunction } from 'express';

const redis = createClient({ url: process.env.REDIS_URL });
redis.connect().catch((err) => {
  // Log the error but don't crash — the app can run without caching
  console.error('Redis connection failed (caching disabled):', err.message);
  console.error('Check your REDIS_URL environment variable.');
});

export function cacheMiddleware(ttlSeconds = 60) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const key = `cache:${req.url}`;

    // Return cached result if available
    const cached = await redis.get(key).catch(() => null);
    if (cached) return res.json(JSON.parse(cached));

    // Intercept res.json to save the response to cache before sending
    const originalJson = res.json.bind(res);
    res.json = (data: unknown) => {
      // Swallow cache write errors — a cache miss is always safe to ignore
      redis.setEx(key, ttlSeconds, JSON.stringify(data)).catch(() => {});
      return originalJson(data);
    };

    next();
  };
}
```

### Tip #7: Use GitHub Actions for CI/CD

**Prompt:**

```
Generate a complete GitHub Actions CI/CD workflow (.github/workflows/ci.yml) for:

Stack:
- Backend: Node.js 20 + TypeScript + Express + Prisma (folder: /backend)
- Frontend: React 18 + TypeScript + Vite (folder: /frontend)

Workflow requirements:
1. Trigger on push to 'main' and on all pull requests
2. Steps (in order): install → lint → unit test → build
3. On push to 'main' only: deploy backend via Render deploy hook,
   then deploy frontend via Vercel CLI
4. All API keys come from GitHub Secrets — list every secret needed
5. After deploy: poll /health for 3 minutes; fail the workflow if it never 200s
6. Optional: post a Slack message on success or failure

Make it copy-paste ready with zero manual edits except adding secrets.
```

### Tip #8: One-Command Everything
Create `Makefile` in project root:

```makefile
.PHONY: local deploy logs test clean

# Start the full stack locally (builds images if needed)
local:
	docker-compose up --build

# Commit everything and push to trigger auto-deploy
# NOTE: Replace the commit message with a short description of your changes
#       (e.g. "fix: correct CORS origin" or "feat: add user profile page").
#       Automated timestamps are convenient but vague — descriptive messages
#       make rollbacks much easier to target.
deploy:
	git add .
	git commit -m "deploy: $(shell date '+%Y-%m-%d %H:%M')"
	git push

# Print links to live log dashboards
logs:
	@echo "Backend  logs → https://dashboard.render.com"
	@echo "Frontend logs → https://vercel.com/dashboard"

# Run backend and frontend unit test suites
test:
	cd backend  && npm test
	cd frontend && npm test

# Tear down local Docker containers and volumes
clean:
	docker-compose down -v
```

Then just run: `make local` or `make deploy`

### Tip #9: Emergency Rollback
If something breaks in production:

```bash
# View last 10 commits to find the last good one
git log --oneline -10

# Revert the most recent commit (safe — creates a new "undo" commit)
git revert HEAD --no-edit
git push
# Render will automatically redeploy the reverted code

# OR revert a specific commit by its SHA
git revert abc1234 --no-edit
git push
```

### Tip #10: Free Monitoring with UptimeRobot
1. Go to **uptimerobot.com**
2. Sign up (free)
3. Add monitoring URL: `https://your-api.onrender.com/health`
4. Get alerts if site goes down
5. See uptime percentage

---

## TROUBLESHOOTING GUIDE

### Problem: "Connection refused - can't connect to database"

```bash
# Step 1: Confirm DATABASE_URL is set
#   Render dashboard → Web Service → Environment → DATABASE_URL
#   It should start with: postgresql://

# Step 2: Get the correct External URL from the database service
#   Render dashboard → PostgreSQL → Connection → External Database URL

# Step 3: Update the environment variable in Render
#   Render → Web Service → Environment → Edit DATABASE_URL → Save

# Step 4: Restart the web service to pick up the new value
#   Render → Web Service → Manual Deploy (or "Restart")

# Step 5: Search logs for database errors
#   Render → Logs → filter: "database" or "ECONNREFUSED"
```

### Problem: "CORS error - frontend can't call backend"

```typescript
// backend/src/middleware/cors.ts
import cors from 'cors';

const allowedOrigins = [
  process.env.FRONTEND_URL,         // Production: https://your-app.vercel.app
  'http://localhost:3000',           // Local development
  'https://your-app.vercel.app',    // Vercel preview deployments
].filter(Boolean) as string[];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no Origin header (curl, mobile apps)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      // Log the blocked origin for internal debugging, but return a generic
      // message to the client to avoid leaking access-attempt details.
      console.warn(`CORS blocked origin: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    },
    credentials: true,               // Required if you use cookies or auth headers
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
```

### Problem: "WebSocket connection failed"

```typescript
// frontend/src/services/websocket.ts

class WebSocketService {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private readonly maxReconnects = 5;

  connect() {
    // wss:// is required for pages served over HTTPS
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const host     = import.meta.env.VITE_API_URL.replace(/^https?:\/\//, '');

    this.ws = new WebSocket(`${protocol}//${host}/ws`);

    this.ws.onclose = () => {
      if (this.reconnectAttempts >= this.maxReconnects) return;

      // Exponential back-off: 1 s, 2 s, 4 s, 8 s, 16 s
      const delay = 1000 * Math.pow(2, this.reconnectAttempts);
      setTimeout(() => {
        this.reconnectAttempts++;
        this.connect();
      }, delay);
    };

    this.ws.onopen = () => {
      this.reconnectAttempts = 0; // Reset counter on successful connect
    };
  }
}

export default new WebSocketService();
```

### Problem: "Out of memory - app crashes"

```bash
# Option 1: Upgrade Render instance (recommended first step)
#   Render dashboard → Web Service → Settings → Instance Type
#   Change from "Free" (256 MB) to "Starter" ($7/mo, 512 MB)

# Option 2: Cap Node.js heap size to match your instance's RAM
#   NOTE: Setting --max-old-space-size to your instance's RAM limit
#   tells Node how much it can use, but does NOT solve a memory leak.
#   Use this only AFTER upgrading to a larger instance, or to prevent
#   Node from crashing the whole container on the free tier.
#   In package.json: "start": "node --max-old-space-size=400 dist/index.js"

# Option 3: Find and fix the memory leak
#   Render → Metrics → Memory — look for a steadily rising line
#   Common causes: forgotten setInterval, unclosed DB connections,
#   large arrays built in memory instead of streamed
```

### Problem: "Too many database connections"

```typescript
// backend/src/services/database.ts

// Prisma pools connections automatically.
// Cap the pool size to match Render's free-tier limit (≤ 5).
const prisma = new PrismaClient({
  log: ['query', 'error', 'warn'],
});

// OR embed limits directly in the connection string:
// DATABASE_URL=postgresql://user:pass@host/db?connection_limit=5&pool_timeout=10
```

### Problem: "Deployment hangs or times out"

```bash
# Fix 1: Clear Render's build cache and retry
#   Render → Web Service → Manual Deploy → "Clear build cache & deploy"

# Fix 2: Speed up TypeScript compilation
#   package.json → "build": "tsc --incremental"
#   (Only recompiles files that changed since last build)

# Fix 3: Make sure no build script waits for user input
#   Add --yes / -y to any interactive commands (e.g. npx prisma ... --yes)

# Fix 4: Check the Render build timeout
#   Default is 20 minutes. Contact Render support if you genuinely need more.
```

---

## ONGOING MAINTENANCE CHECKLIST

### Every Deployment (Before Pushing)
- [ ] Run `npm test` - all tests pass
- [ ] Run `npm run lint` - no warnings
- [ ] Check `.env` - no hardcoded secrets
- [ ] Run locally: `docker-compose up` works
- [ ] Test in browser - no console errors

### Every Week
- [ ] Review error logs (Render + Vercel)
- [ ] Check disk usage (80% threshold)
- [ ] Monitor database performance
- [ ] Backup database manually (or verify auto-backup)

### Every Month
- [ ] Security audit: `npm audit`
- [ ] Dependency updates: `npm update`
- [ ] Performance review (check slow queries)
- [ ] Cost review (Render/Vercel bills)
- [ ] User feedback review

### Every Quarter
- [ ] Update documentation
- [ ] Review architecture (anything to improve?)
- [ ] Plan for scaling (do we need bigger instances?)
- [ ] Disaster recovery test (can we recover from backup?)

---

## GETTING HELP (When Stuck)

### Step 1: Use Claude as Your DevOps Engineer

```
I'm getting this error in my FATE Quantum Visualization app:

[PASTE YOUR FULL ERROR MESSAGE HERE]

Context:
- Backend: Node.js + Express + TypeScript on Render.com
- Frontend: React + TypeScript on Vercel
- Database: PostgreSQL on Render
- Error first appeared: [when did it start?]

Here are my recent changes:
[PASTE LAST 3 GIT COMMITS OR DESCRIBE WHAT YOU CHANGED]

Please:
1. Explain what this error means in simple terms
2. Give me 3 possible solutions (easiest first)
3. Show me the exact commands/code to fix each solution
4. Tell me how to prevent this error in the future
```

**Claude will:**
- Explain the error
- Suggest 3 solutions (ranked by ease)
- Provide exact commands
- Explain why it happened

### Step 2: Check Documentation
- **Render docs:** render.com/docs
- **Vercel docs:** vercel.com/docs
- **Prisma docs:** prisma.io/docs
- **Express docs:** expressjs.com
- **React docs:** react.dev

### Step 3: Community Help
- **Stack Overflow:** Tag questions with `render` `vercel` `nodejs`
- **GitHub Discussions:** In your repo or tool repos
- **Discord communities:** Render, Vercel, Node.js communities

---

## COST BREAKDOWN (Monthly)

| Service | Free Tier | Cost | Notes |
|---------|-----------|------|-------|
| **Render Backend** | Yes | $7+ | Auto-sleeps if unused |
| **Vercel Frontend** | Yes | Free | Best for static sites |
| **PostgreSQL** | 256MB | $15+ | 1GB recommended |
| **Redis** | 100MB | Free | Included with Render |
| **GitHub** | Unlimited | Free | Private repos free |
| **Claude API** | Usage | ~$0.50 | Per deployment help |
| **Total** | Full | $15-25/mo | Very affordable! |

**To reduce costs:**
- Use Render's free tier during development
- Only pay for production
- Use caching to reduce DB hits
- Monitor usage weekly

---

## NEXT STEPS (After First Deployment)

1. **Add users** - Create admin account, invite team
2. **Set up monitoring** - UptimeRobot + Slack alerts
3. **Enable backups** - Render automatic daily backups
4. **Performance tuning** - Use Render analytics
5. **CI/CD pipeline** - Auto-deploy on git push
6. **Custom domain** - Add yourdomain.com
7. **SSL certificate** - Auto-managed by Render/Vercel
8. **Team access** - Add other admins to GitHub + Render

---

## CHEAT SHEET (Quick Reference)

```bash
# Local development
docker-compose up

# Deploy everything
git add . && git commit -m "update" && git push

# Check logs
render logs -f  # Backend
# OR
vercel logs     # Frontend

# Database backups
# Render: Auto-backups every day
# Manual: Render dashboard → Backups

# Emergency rollback
git revert HEAD && git push

# Monitor performance
curl https://your-api.onrender.com/health
```

---

## Final Checklist: Ready for Production?

- [ ] Backend deployed and accessible
- [ ] Frontend deployed and accessible
- [ ] Database connected and migrated
- [ ] Environment variables secure
- [ ] CORS configured correctly
- [ ] WebSocket working
- [ ] Monitoring alerts set up
- [ ] Backup strategy confirmed
- [ ] Documentation complete
- [ ] Team knows how to maintain

✅ **You're ready to launch!**

---

**Remember:** 
- Start simple
- Monitor everything
- Back up regularly
- Update monthly
- Ask Claude when stuck
- You've got this! 🚀
