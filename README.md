# 📰 NewsApp

A modern, responsive news aggregation application built with React that fetches and displays news articles from around the world using the NewsAPI service.

## 🌟 Features

- **Browse News Articles**: View the latest news from various sources and categories
- **Infinite Scroll**: Seamlessly load more articles as you scroll down
- **Loading Indicator**: Visual feedback with a top loading bar when fetching data
- **Navigation Bar**: Easy navigation between different news categories
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Article Details**: View article images, titles, descriptions, and source information
- **Open Original**: Click articles to read the full story on the source website

## 🛠️ Tech Stack

- **React 19.2.6** - UI library
- **React Router DOM** - Client-side routing
- **React Infinite Scroll Component** - Infinite scrolling functionality
- **React Top Loading Bar** - Loading progress indicator
- **CSS3** - Styling and responsive design
- **React Scripts 5.0.1** - Build tools

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

## 🚀 Getting Started

### 1. Installation

Clone the repository and install dependencies:

```bash
cd newsapp
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory (if needed for API keys):

```
REACT_APP_NEWS_API_KEY=your_newsapi_key_here
```

You can get a free API key from [NewsAPI.org](https://newsapi.org)

### 3. Start the Application

Run the development server:

```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page reloads when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is minified and optimized for the best performance.

### `npm run eject`
**⚠️ Warning: This is a one-way operation. Once you eject, you can't go back!**

Exposes all configuration files and dependencies, giving you full control over the build configuration.

## 📁 Project Structure

```
newsapp/
├── public/                 # Static files
│   ├── index.html         # Main HTML file
│   ├── manifest.json      # PWA manifest
│   └── robots.txt         # SEO robots file
├── src/
│   ├── components/        # Reusable components
│   │   ├── NavBar.js      # Navigation component
│   │   ├── News.js        # Main news list component
│   │   ├── NewsItem.js    # Individual article component
│   │   └── Spinner.js     # Loading spinner
│   ├── App.js             # Main app component
│   ├── App.css            # App styles
│   ├── index.js           # Entry point
│   ├── index.css          # Global styles
│   └── setupTests.js      # Test configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 🎯 Component Overview

- **App.js**: Main component that manages state and routing
- **NavBar.js**: Navigation menu for category selection
- **News.js**: Container component that fetches and displays articles with infinite scroll
- **NewsItem.js**: Individual article card showing title, image, and description
- **Spinner.js**: Loading indicator shown while fetching data

## 🔧 Configuration

### API Integration

The app uses the [NewsAPI.org](https://newsapi.org) service to fetch news articles. You'll need an API key to run the application.

### Customization

You can customize the following:
- **News Categories**: Modify the categories in `NavBar.js`
- **Articles Per Page**: Adjust the pagination size in `News.js`
- **Styling**: Edit `App.css` and `index.css` for custom themes

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to Hosting

You can deploy the `build` folder to services like:
- **Vercel** - Easiest option for React apps
- **Netlify** - Great CI/CD integration
- **GitHub Pages** - Free hosting
- **Firebase Hosting** - Google's hosting solution
- **Heroku** - Platform as a Service

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# On Windows (PowerShell)
netstat -ano | findstr :3000

# On Mac/Linux
lsof -i :3000

# Kill the process or use a different port
PORT=3001 npm start
```

### API Key Issues
- Ensure your API key is correctly set in the environment variables
- Check your API quota on NewsAPI.org dashboard
- Verify your API key has the necessary permissions

### Infinite Scroll Not Working
- Check browser console for errors
- Ensure `react-infinite-scroll-component` is properly installed
- Verify the News component has sufficient data

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [NewsAPI Documentation](https://newsapi.org/docs)
- [Create React App Guide](https://create-react-app.dev)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

For questions or issues, please open an issue on the project repository.

---

**Happy reading! 📰**
