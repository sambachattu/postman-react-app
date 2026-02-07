# API Nexus - Setup Instructions

## Quick Setup Guide

### Option 1: Local Development

1. **Navigate to the project directory:**
   ```bash
   cd api-tester-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

### Option 2: Docker Deployment

1. **Navigate to the project directory:**
   ```bash
   cd api-tester-app
   ```

2. **Using Docker Compose (Recommended):**
   ```bash
   docker-compose up -d
   ```

3. **Or using Docker directly:**
   ```bash
   docker build -t api-tester-app .
   docker run -p 3000:80 api-tester-app
   ```

4. **Access the application:**
   Open `http://localhost:3000` in your browser

### Option 3: Production Build

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Preview the build:**
   ```bash
   npm run preview
   ```

3. **Deploy the `dist/` folder:**
   Upload the contents of the `dist/` folder to any static hosting service (Netlify, Vercel, AWS S3, etc.)

## Troubleshooting

### Port 3000 is already in use
Change the port in `vite.config.js` or `docker-compose.yml`

### Docker build fails
Make sure Docker is installed and running:
```bash
docker --version
docker-compose --version
```

### npm install fails
Try clearing npm cache:
```bash
npm cache clean --force
npm install
```

## Next Steps

1. Click "Sample GET Request" to test the pre-configured endpoint
2. Create a new request using the "New Request" button
3. Test your own APIs by entering custom URLs and headers
4. Explore the response viewer features (copy, download)

Enjoy using API Nexus! 🚀
