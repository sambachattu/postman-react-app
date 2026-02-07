# API Nexus - Project Structure

```
api-tester-app/
│
├── 📁 public/
│   └── vite.svg                      # Application icon
│
├── 📁 src/
│   ├── 📁 components/                # React Components
│   │   ├── Header.jsx                # Top navigation header
│   │   ├── Header.css
│   │   ├── Sidebar.jsx               # Request list sidebar
│   │   ├── Sidebar.css
│   │   ├── RequestBuilder.jsx        # Main request builder
│   │   ├── RequestBuilder.css
│   │   ├── HeadersSection.jsx        # Headers management
│   │   ├── HeadersSection.css
│   │   ├── BodySection.jsx           # Request body editor
│   │   ├── BodySection.css
│   │   ├── ResponseViewer.jsx        # Response display panel
│   │   └── ResponseViewer.css
│   │
│   ├── 📁 hooks/                     # Custom React Hooks
│   │   └── useApiRequest.js          # API request logic hook
│   │
│   ├── 📁 styles/                    # Global Styles
│   │   ├── index.css                 # Global CSS & variables
│   │   └── App.css                   # App component styles
│   │
│   ├── App.jsx                       # Main App component
│   └── main.jsx                      # React entry point
│
├── 📄 Configuration Files
│   ├── package.json                  # Dependencies & scripts
│   ├── vite.config.js                # Vite configuration
│   ├── .eslintrc.cjs                 # ESLint rules
│   ├── index.html                    # HTML template
│   ├── .gitignore                    # Git ignore rules
│   ├── .dockerignore                 # Docker ignore rules
│   └── .env.example                  # Environment variables template
│
├── 🐳 Docker Files
│   ├── Dockerfile                    # Docker image configuration
│
└── 📖 Documentation
    ├── README.md                     # Main documentation
    └── SETUP.md                      # Setup instructions

```

## Component Hierarchy

```
App (main.jsx)
└── App.jsx
    ├── Header
    ├── Sidebar
    │   └── Request Items (dynamic)
    └── Content
        ├── RequestBuilder
        │   ├── HeadersSection
        │   └── BodySection (conditional)
        └── ResponseViewer
```
