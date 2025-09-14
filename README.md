# 🗺️ Geospatial Dashboard

A modern, interactive geospatial dashboard built with React, Leaflet, and Google Maps API. This application provides real-time mapping capabilities with route planning, waypoint management, and seamless user authentication.

![Geospatial Dashboard](https://img.shields.io/badge/Status-Active-green) ![React](https://img.shields.io/badge/React-18+-blue) ![Vite](https://img.shields.io/badge/Vite-Latest-purple) ![Tailwind](https://img.shields.io/badge/TailwindCSS-3.0+-cyan)

## ✨ Features

- 🗺️ **Interactive Maps** - Powered by Leaflet with OpenStreetMap tiles
- 🛣️ **Smart Routing** - Google Maps API integration for real-world route planning
- 📍 **Waypoint Management** - Click-to-add waypoints with drag-and-drop functionality
- 🎨 **Modern UI** - Clean, responsive design with Shadcn/ui components
- 🔐 **Authentication** - Secure login modal with form validation
- 💳 **Payment Integration** - Built-in payment modal for premium features
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🌙 **Theme Support** - Neutral color theme with dark/light mode compatibility

## 🚀 Live Demo

Visit the live application: [https://geospatial-dashboard-opal.vercel.app](https://geospatial-dashboard-opal.vercel.app)

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- A Google Maps API key with the following APIs enabled:
  - Maps JavaScript API
  - Directions API
  - (Optional) Geocoding API

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Manav250305/Geospatial-Dashboard.git
   cd geospatial-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # Create .env file in the root directory
   cp .env.example .env

   # Add your Google Maps API key
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Google Maps API Setup

1. **Create a Google Cloud Project**

   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one

2. **Enable Required APIs**

   - Navigate to "APIs & Services" → "Library"
   - Enable the following APIs:
     - Maps JavaScript API
     - Directions API

3. **Create API Credentials**

   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy the generated API key

4. **Configure API Restrictions** (Recommended)

   - Click on your API key to edit
   - Under "Application restrictions", select "HTTP referrers"
   - Add your domains:
     - `http://localhost:5173/*` (for development)
     - `https://your-domain.com/*` (for production)

5. **Enable Billing** (Required for Directions API)
   - Go to "Billing" in Google Cloud Console
   - Add a payment method (Google provides $200/month free credit)

## 📁 Project Structure

```
geospatial-dashboard/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Shadcn/ui components
│   │   ├── MapComponent.jsx      # Main map component
│   │   ├── RouteComponent.jsx    # Route planning component
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── LoginModal.jsx       # Authentication modal
│   │   └── PaymentModal.jsx     # Payment processing modal
│   ├── utils/            # Utility functions
│   │   └── googleMaps.js # Google Maps API integration
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── .env                  # Environment variables
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.js        # Vite build configuration
```

## 🎮 Usage

### Adding Waypoints

- Click anywhere on the map to add waypoints
- Maximum of 2 waypoints supported for route planning
- Click the "Clear Path" button to remove all waypoints

### Route Planning

- Add two waypoints to automatically calculate the route
- Routes use Google Maps API for real-world driving directions
- Fallback to curved lines if API is unavailable

### Authentication

- Click "Login" in the navigation bar
- Fill in the login form (demo purposes)
- Secure form validation included

## 🛠️ Built With

- **Frontend Framework**: [React 18+](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/)
- **Maps**: [Leaflet](https://leafletjs.com/) + [React Leaflet](https://react-leaflet.js.org/)
- **Routing**: [Google Maps API](https://developers.google.com/maps)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🚀 Deployment

### Deploy to Vercel

1. **Connect your repository**

   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project" and import your GitHub repository

2. **Configure environment variables**

   - In your Vercel project settings, go to "Environment Variables"
   - Add `VITE_GOOGLE_MAPS_API_KEY` with your Google Maps API key

3. **Deploy**
   - Vercel will automatically deploy on every push to main branch
   - Your app will be available at `https://your-project.vercel.app`

### Other Deployment Options

- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `npm run build` and deploy the `dist` folder
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Manav** - [GitHub Profile](https://github.com/Manav250305)

## 🙏 Acknowledgments

- [OpenStreetMap](https://www.openstreetmap.org/) for map tiles
- [Leaflet](https://leafletjs.com/) for the mapping library
- [Shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Google Maps](https://developers.google.com/maps) for routing services

## 📞 Support

If you have any questions or need help, please:

- Open an issue on GitHub
- Contact me at manavprakash91@gmail.com

---

⭐ Star this repository if you find it helpful!
