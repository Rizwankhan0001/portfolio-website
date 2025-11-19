# React Portfolio Website

A beautiful, responsive portfolio website built with React.js.

## Setup Instructions

### 1. Install Dependencies
```bash
cd react-portfolio
npm install
```

### 2. Copy CSS Styles
Copy the entire content from `../style.css` to `src/index.css`

### 3. Run Development Server
```bash
npm start
```

The app will open at `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
```

## Project Structure

```
react-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Experience.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## Features

- ✅ Fully converted to React.js
- ✅ Component-based architecture
- ✅ React Hooks (useState, useEffect)
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Form validation
- ✅ Mobile navigation
- ✅ All original styling preserved

## Customization

Edit the data arrays in each component file:
- `Experience.js` - Update work experience
- `Skills.js` - Update skills
- `Projects.js` - Update projects
- `Contact.js` - Update contact information

## Deployment

Deploy to:
- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Use `gh-pages` package
