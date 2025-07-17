# Портфолио разработчика 🚀

[![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-16+-green)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-8+-red)](https://www.npmjs.com/)

## 🛠️ Технологический стек

### 🔧 Основные технологии
- **Ядро**: JavaScript (ES6+)
- **Роутинг**: [Navigo 8.11.1](https://github.com/krasimir/navigo)
- **Анимации**: [GSAP 3.12.5](https://greensock.com/gsap/)
- **DOM-менеджмент**: [RE:DOM 4.1.5](https://redom.js.org/)

### ⚙️ Инструменты сборки
- **Сборщик**: [Webpack 5](https://webpack.js.org/)
- **Транспиляция**: [Babel 7](https://babeljs.io/)
- **Стили**: [PostCSS](https://postcss.org/) + [Autoprefixer](https://autoprefixer.github.io/)
- **Линтинг**: [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

## 🚀 Установка и запуск

### 📋 Требования
- [Node.js](https://nodejs.org/) v16+
- [npm](https://www.npmjs.com/) v8+

### 🖥️ Команды

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера (localhost:8080)
npm run dev

# Сборка для разработки
npm run build:dev

# Продакшн-сборка
npm run build:prod

# Деплой на GitHub Pages
npm run deploy

# Проверка кода
npm run lint

# Автоисправление ошибок стиля
npm run lint:fix