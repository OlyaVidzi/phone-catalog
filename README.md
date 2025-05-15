# 📱 Phone Catalogue

**Live Demo:**

[DEMO LINK](https://olyavidzi.github.io/phone-catalog/)

## 🎨 Design Reference

The site design was inspired by this Figma prototype:
[Figma Design](https://www.figma.com/file/BUusqCIMAWALqfBahnyIiH/Phone-catalog-(V2)-Original-Dark)

## 📝 Description

**Phone Catalogue** is a modern online store interface for browsing, filtering, and viewing details about smartphones, tablets, and accessories. Users can add items to their cart or favorites, and navigate through categories easily. This project was created to practice and demonstrate FullStack development skills using React and Redux, and to showcase reusable and scalable frontend architecture.

## 🚀 Features

- 📦 Product listing by categories: Phones, Tablets, Accessories
- 🛒 Cart functionality with quantity management
- ❤️ Favorites page to save products you like
- 🔍 Detailed product pages
- 🔁 Persistent cart and favorites via localStorage
- ❌ 404 Not Found page for undefined routes
- 📱 Responsive design

## 🛠️ Technologies Used

- **React** with **Vite** as the build tool
- **Redux Toolkit** for global state management
- **TypeScript** for static typing
- **React Router v6** for navigation
- **Modular SCSS** for styling
- **Reusable components** inside the `shared/` folder
- **Enums**, **Interfaces**, **Helpers**, **Hooks** for clean architecture
- **LocalStorage** for persisting cart and favorites
- **Custom configuration** via `vite.config.ts`

## 📁 Project Structure Highlights

- `pages/` – Main page components (Home, Cart, Category, etc.)
- `shared/` – Reusable UI components (ProductDetails, CardItem, Loader, etc.)
- `store/` – Redux slices and store setup
- `interfaces/` – Type definitions for better type safety
- `helpers/` – Logic for localStorage and other utility functions
- `enums/` – Enum types for clear value management (e.g., category types)
- `hooks/` – Custom React hooks

## 📦 How to Run the Project Locally

🛠️ Installation

  - Clone the repository
    - git clone https://github.com/OlyaVidzi/phone-catalog.git
    - cd phone-catalog
  - Switch to the main branch
    - git checkout main
  - Install dependencies
    - npm install
  - Start the development server
    - npm start

🌐 Deploy to GitHub Pages

  - npm run deploy

