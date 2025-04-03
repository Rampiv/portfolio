# Основные команды
### npm run build
### npm run dev
### npm run lint:fix

# Структура проекта:
### viev.js - функции создания компонентов
### index.js - логика
### animation.js - все анимации

# Загрузка проекта на GitPages
### #!/bin/sh
### git commit -am "Save uncommited changes (WIP)"
### git branch --delete --force gh-pages
### git checkout --orphan gh-pages
### git add -f dist
### git commit -m "Rebuild GitHub pages"
### git filter-branch -f --prune-empty --subdirectory-filter dist 
### git push -f origin gh-pages 
### git checkout -

# Упрощение загруки на GitPages
### npm run deploy