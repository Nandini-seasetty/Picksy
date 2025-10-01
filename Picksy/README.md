# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Picksy - Your One-Stop Online Store

![Picksy Logo](./src/assets/logo.png) <!-- Optional: replace with your logo path -->

## Overview

**Picksy** is a modern, responsive e-commerce web application built with **React**, **Vite**, and **Tailwind CSS**. It offers a wide range of products including clothes, electronics, shoes, furniture, and more. Users can browse, filter, search, and add products to the cart for a seamless shopping experience.  

This project uses **DummyJSON API** for dynamic product data and supports features like category filtering, price range selection, pagination, and responsive design for both desktop and mobile.

---

## Features

- Browse products by **category** or view **all products**
- **Search** functionality for products
- **Filter products** by price range and category
- **Add to cart** with quantity management
- **Responsive design** for mobile and desktop
- **Product details page** with image carousel
- **Pagination** for large product lists
- **Dynamic product data** fetched from DummyJSON API
- **User authentication** (if integrated via Clerk)
- **Loading & not-found states** with animations

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **API:** DummyJSON for products and categories
- **Routing:** React Router DOM
- **State Management:** React Context API
- **Deployment:** GitHub Pages / Netlify / Vercel

---

## Getting Started

### Prerequisites

- Node.js v18+  
- npm v9+  

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Nandini-seasetty/Picksy.git
cd Picksy
