<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally or deploy it to a production environment.

View your app in AI Studio: https://ai.studio/apps/91085f8e-adc8-4311-9571-99924fb3edae

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the example environment file and fill in your values:
   ```bash
   cp .env.example .env.local
   ```
3. Open `.env.local` and set all required variables (see [Environment Variables](#environment-variables) below).
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open your browser at `http://localhost:3000`.

---

## Deploy to Production

**Prerequisites:** Node.js 18+, a Linux/Unix server (VPS, cloud instance, etc.)

### Step 1 — Clone the repository

```bash
git clone https://github.com/hima890/Landing_page.git
cd Landing_page
```

### Step 2 — Install dependencies

```bash
npm install
```

### Step 3 — Configure environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and set every variable (see [Environment Variables](#environment-variables) below).  
Use strong, unique values for `ADMIN_PASSWORD` and `ADMIN_SECRET` in production.

### Step 4 — Build the frontend

```bash
npm run build
```

This compiles the React app into the `dist/` folder, which the Express server will serve in production mode.

### Step 5 — Start the production server

```bash
NODE_ENV=production node --import tsx/esm server.ts
```

Or, if you prefer using the `tsx` CLI directly:

```bash
NODE_ENV=production npx tsx server.ts
```

The server will start on **port 3000** and serve the built frontend from `dist/`.

### Step 6 — (Recommended) Run as a background service with PM2

```bash
npm install -g pm2
NODE_ENV=production pm2 start --interpreter "node --import tsx/esm" server.ts --name landing-page
pm2 save
pm2 startup   # follow the printed command to enable auto-start on reboot
```

### Step 7 — (Recommended) Reverse proxy with Nginx

Install Nginx and create a site config at `/etc/nginx/sites-available/landing-page`:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site and reload Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/landing-page /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

For HTTPS, use [Certbot](https://certbot.eff.org/):

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and set the following:

| Variable | Description | Example |
|---|---|---|
| `ADMIN_EMAIL` | Admin login email | `admin@example.com` |
| `ADMIN_PASSWORD` | Admin login password (use a strong password) | `SuperSecureP@ssw0rd` |
| `ADMIN_SECRET` | Secret key for signing admin session tokens (random 32-byte hex string) | *(generate below)* |
| `APP_URL` | Full URL where the app is hosted | `https://your-domain.com` |
| `VITE_GOOGLE_SHEETS_WEBHOOK_URL` | Google Sheets Apps Script webhook URL (optional) | `https://script.google.com/...` |

Generate a secure `ADMIN_SECRET` with:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (Vite HMR + Express) |
| `npm run build` | Build the frontend for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run TypeScript type checks |
| `npm run clean` | Remove the `dist/` build directory |
