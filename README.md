# 📊 Angular Admin Dashboard

**A responsive admin dashboard built with Angular 12 and Angular Material, with interactive amCharts visualisations.**

![Angular](https://img.shields.io/badge/Angular_12-DD0031?style=flat-square&logo=angular&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular_Material-757575?style=flat-square&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![amCharts](https://img.shields.io/badge/amCharts_4-67B7DC?style=flat-square)

## ✨ Features
- **Default layout** with a header, collapsible sidebar, and footer, using Angular Material and Flex Layout
- **Dashboard** with **amCharts 4** line charts (XY with category and value axes, bullets, legend) and a **pie chart**
- Summary cards in a Material **grid list**, plus a data table built with Angular Material
- **Feature modules** (dashboard, posts) and a **shared module** for reusable components (header, sidebar, footer, card)

## 🛠️ Tech Stack
Angular 12 · TypeScript · Angular Material + CDK · Angular Flex Layout · amCharts 4 · SCSS

## 🚀 Getting Started
```bash
npm install
npx ng serve   # http://localhost:4200
npx ng test    # unit tests (Karma + Jasmine)
```

## 📂 Structure
```
src/app/
├── layouts/default/        # shell: header + sidebar + content + footer
├── modules/dashboard/      # charts, cards, table
├── modules/posts/          # posts page (placeholder)
└── shared/                 # header, sidebar, footer, card components
```

---
Made by [Shikhar Jaiswal](https://github.com/shikharskj)
