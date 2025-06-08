# My Portfolio React App

This repository contains the source code for my personal portfolio website, built with React and modern web technologies. It showcases my skills, projects, professional experience, education, and recommendations — all in a single-page, responsive layout over a particle animation background.

## Table of Contents

* [Demo](#demo)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)

  * [Installation](#installation)
  * [Development](#development)
  * [Building](#building)
* [Deployment](#deployment)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)

## Demo

Live demo: [https://your-username.vercel.app](https://your-username.vercel.app)

## Features

* **Hero Section**: Full-screen intro with background particles.
* **About Section**: Brief bio and contact links.
* **Skills Section**: Responsive grid of technical skills.
* **Projects Section**: Filterable showcase of featured projects.
* **Experience Section**: Filterable cards for professional & volunteering roles.
* **Education Section**: Academic background with key coursework.
* **Recommendations Section**: Testimonials from colleagues and managers.
* **Sticky Footer Navigation**: Highlights current section using Intersection Observer.
* **Responsive Design**: Works on desktop, tablet, and mobile.

## Tech Stack

* **React** (functional components, hooks)
* **React Icons** for iconography
* **CSS** (modern layout with CSS Grid, Flexbox)
* **Intersection Observer API** for scroll-based nav highlighting
* **create-react-app** build tooling
* **Vercel** for CI/CD & hosting

## Project Structure

```
my-portfolio/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── Projects.js
│   │   ├── Recommendations.js
│   │   ├── Skills.js
│   │   └── ...
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/my-portfolio.git
   cd my-portfolio
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in the browser. The page reloads on save.

### Building

Create a production build in the `build/` folder:

```bash
npm run build
```

## Deployment

This app is configured for zero-config deployment on **Vercel**.

1. Push to GitHub.
2. Import the repo in your Vercel dashboard.
3. Vercel auto-detects `create-react-app` and will build & deploy on every push to `main`.
4. Configure a custom domain under project **Settings → Domains**.

## Usage

Use the footer nav or scroll to navigate. Sections highlight automatically. On smaller screens, the filter components collapse gracefully.

## Contributing

Contributions are welcome! Feel free to:

* Submit issues for bugs or feature requests.
* Open pull requests with improvements or fixes.

## License

This project is open source under the [MIT License](LICENSE).
