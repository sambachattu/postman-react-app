# API Nexus - REST API Tester

A modern, beautiful REST API testing tool built with React. Test your APIs with an intuitive interface featuring real-time responses, request management, and a sleek dark-themed design.

## ✨ Features

- 🚀 **Multiple HTTP Methods** - Support for GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS
- 📝 **Request Management** - Create, edit, and organize multiple requests
- 🎯 **Custom Headers** - Add, edit, and toggle headers with ease
- 📦 **Request Body** - Full editor for POST/PUT/PATCH requests with JSON/Text/XML support
- 🎨 **Beautiful UI** - Modern dark theme with gradient accents
- ⚡ **Fast & Responsive** - Built with Vite for lightning-fast performance
- 📊 **Response Viewer** - Syntax-highlighted JSON responses with status codes
- 💾 **Copy & Download** - Export responses with one click
- 📈 **Performance Metrics** - Track response time and payload size
- 🐳 **Docker Ready** - Easy deployment with Docker and docker-compose

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd api-tester-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🐳 Docker Deployment

### Using Docker

Build and run with Docker:

```bash
# Build the image
docker build -t api-tester-app .

# Run the container
docker run -p 3000:3000 api-tester-app
```

The application will be available at `http://localhost:3000`

## 🎨 Features in Detail

### Request Builder
- **Method Selection**: Choose from GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS
- **URL Input**: Enter your API endpoint
- **Headers Management**: Add multiple headers with enable/disable toggles
- **Body Editor**: For POST/PUT/PATCH requests with support for JSON, Text, and XML

### Response Viewer
- **Status Codes**: Color-coded status badges (Success, Error, Warning)
- **Response Time**: Millisecond precision timing
- **Payload Size**: Byte-level size tracking
- **Copy to Clipboard**: One-click response copying
- **Download**: Save responses as JSON files

## 🎯 Usage Examples

### Testing a GET Request
1. Click on "Sample GET Request" in the sidebar
2. The URL is pre-filled with a sample endpoint
3. Click "SEND" to execute the request
4. View the response in the bottom panel

### Creating a POST Request
1. Click "New Request" button
2. Select "POST" from the method dropdown
3. Enter your API endpoint URL
4. Click the "Body" tab
5. Enter your JSON payload
6. Add any necessary headers
7. Click "SEND"


## 🚢 Production Build

Build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
