# Lisi Developer — инструкция по сайту

Код править не нужно: кладёте картинки в папки и называете их точно по таблице.

## 1. Как работают картинки

- Все картинки лежат в `assets/images/`, у каждого проекта своя папка.
- Сайт находит файл по имени. Расширение любое: `.jpg`, `.png`, `.webp`, `.jpeg` (заглавные тоже подходят).
- Имя строго латиницей, строчными, без пробелов. Если файл назван иначе (`IMG_123.jpg`), сайт его не увидит: переименуйте.
- Одно имя, один файл. Не держите рядом `cover.jpg` и `cover.png`.

## 2. Что где показывается

- **Главная страница:** у каждого проекта одна большая обложка `cover` и кнопка **«Подробно»**.
- **Страница «Подробно»** (`project.html`): все скриншоты проекта в ряд, клик открывает картинку на весь экран. Закрывается крестиком, клавишей Esc или кликом мимо.

## 3. Таблица файлов

| Папка | Имя файла | Куда попадёт изображение |
|---|---|---|
| `assets/images/home/` | `about.jpg` | Блок «О разработчике» на главной (вертикальное, 4:5) |
| `assets/images/messenger-nexus/` | `cover.jpg` | Обложка Messenger Nexus на главной |
| `assets/images/messenger-nexus/` | `screenshot-1.jpg`, `screenshot-2.jpg` … | Страница «Подробно» Messenger Nexus |
| `assets/images/aurora-detailing/` | `cover.jpg` | Обложка AURORA DETAILING на главной |
| `assets/images/aurora-detailing/` | `screenshot-1.jpg`, `screenshot-2.jpg` … | Страница «Подробно» AURORA DETAILING |
| `assets/images/nova-finance/` | `cover.jpg` | Обложка NOVA FINANCE на главной |
| `assets/images/nova-finance/` | `screenshot-1.jpg`, `screenshot-2.jpg` … | Страница «Подробно» NOVA FINANCE |

Сейчас в сайте уже лежат: у Messenger Nexus 3 скриншота, у AURORA DETAILING 3, у NOVA FINANCE 4, плюс обложки.

## 4. Как добавить ещё скриншоты

Положите файл со следующим номером в папку проекта: `screenshot-4.jpg`, `screenshot-5.jpg` и так далее до 30. Номера идут подряд, без пропусков: сайт останавливается на первом отсутствующем. Порядок на странице «Подробно» равен порядку номеров.

## 5. Как заменить обложку или скриншот

Положите новый файл с тем же именем и тем же расширением поверх старого. Если расширение другое, сначала удалите старый файл.

## 6. Форматы и размеры

- Обложки и скриншоты: горизонтальные, лучше около 1600 px по ширине, вес до 500 КБ.
- Фото `about`: вертикальное, 1000×1250 px.
- Скриншоты любых пропорций показываются целиком, без обрезки.

## 7. Ссылки на опубликованные проекты

Откройте `js/site-config.js` в любом текстовом редакторе и вставьте адрес между кавычками:

```js
const PROJECT_LINKS = {
  'messenger-nexus': 'https://адрес-вашего-проекта',
  'aurora-detailing': '',
  'nova-finance': ''
};
```

Адрес должен начинаться с `https://`. Пока ссылка пустая, кнопки «Смотреть проект» на сайте нет. Вставили ссылку, и кнопка появится рядом с «Подробно».

## 8. Структура файлов

```
lisi-developer/
├── index.html            главная
├── project.html          страница «Подробно» (общая для всех проектов)
├── INSTRUCTION.md
├── css/style.css
├── js/
│   ├── images.js         поиск картинок и просмотр на весь экран
│   ├── main.js           главная
│   ├── project.js        страница «Подробно»
│   └── site-config.js    ← сюда вставлять ссылки на проекты
└── assets/
    ├── logo.png
    ├── favicon.png
    └── images/
        ├── home/               about.jpg
        ├── messenger-nexus/    cover.jpg, screenshot-1.jpg …
        ├── aurora-detailing/   cover.jpg, screenshot-1.jpg …
        └── nova-finance/       cover.jpg, screenshot-1.jpg …
```

## 9. Запуск на своём компьютере

Откройте `index.html` двойным щелчком. Если картинки не подгружаются, запустите в папке проекта `python3 -m http.server 8000` и откройте http://localhost:8000.

## 10. Бесплатная публикация (GitHub Pages)

1. На github.com нажмите **New repository**, назовите `lisi-developer`, тип **Public**.
2. Выберите **uploading an existing file**, перетащите содержимое папки (файлы внутри: `index.html`, `project.html`, `css`, `js`, `assets`) и нажмите **Commit changes**.
3. **Settings → Pages**: Source **Deploy from a branch**, ветка `main`, папка `/ (root)`, **Save**.
4. Через 1–2 минуты сайт откроется по адресу `https://ваш-логин.github.io/lisi-developer/`.
5. Новые картинки добавляйте через **Add file → Upload files** в нужной папке. На GitHub регистр в именах важен: `Cover.jpg` и `cover.jpg` разные файлы.

Подойдёт и Cloudflare Pages или Netlify: перетащите папку проекта на страницу загрузки.
