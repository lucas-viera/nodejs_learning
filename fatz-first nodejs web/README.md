# First Web with Node.js

[Fatz Youtube Channel][1]

[Video][2]

[Zeit.co][3]

## Project setup

1. Create `package.json` file with `npm init --yes`
2. Install dependencies as follows:
  - `npm install express`
  - `npm install ejs` which is a template editor
  - `npm install morgan`
3. Create `src/` directory
4. Create `index.js` inside `src/`
5. Added `dev` script to `package.json` file. 
  - Now we can run the project using `npm run dev` instead of `node src/index.js`. This will be useful for cloud environments which use `start` script.
6. Install a new dependency:
  - `npm install nodemon -D`
  - It will only be used for **D**evelompent purpose
7. We can now modify `dev` script to be `nodemon src`

## Project implementation
1. Require express
2. Creat express app
3. Set listening port for app
4. Use `__dirname` so we can show a basic `index.html` file using a `res.senFile()`
5. Require path so we can use `path.join()` to concatenate paths
6. Now, we use library `ejs`. Setting `view engine` to `ejs` and changing `index.html` file name to `index.ejs`
7. We must change `res.sendFile()` to `res.render()` and also set `app.set('views', path.join...)` correctly
8. We learned how to send a parameter `title` from `index.js` to the `HTML` code at `index.ejs` 
```html
    <title><%= title %></title>
```
```javascript
    res.render('index', {title : 'Hello from node'}); 
```

## Express router
9. We moved `app.get('/', (req, res) => ...` to a different file called `index.js` inside `routes/`
10. No we must use a combination of `module.exports = routes` and `app.use(require('./routes'));`

## EJS undo configuration 
11. We undo `ejs` file extensions and modified logic inside the second `index.js` (the route one) file so it supports `.html` files directly.

## Front End - Bootstrap, FontAwesome, Google Fonts, UI Gradients
12. We added bootsrapp CSS Styles and JavaScript scripts.
13. Then, added NavBar, modified some margin and colors.
14. Paste CDN link for FontAwesome icons.
15. Added icons for Home and Contact link
16. Added CDN for Google Fonts
17. Found a problem so we added a custom CSS file and made it public using `app.use(express.static(path.join(__dirname, 'public')));`
18. On `main.css` we added UI Gradients styles

## Partials
19. Created `partials` directory to reuse code such as the navbar, footer and head

## Contact page
20. Completed contact page with form (which will no be currently working)

## Animate CSS
21. Animate.css was added as CDN on header again.

## Remember
- In order to run this project, you should run `npm run dev` inside `MyProject` and visit `localhost:4000` in your browser.

### Quick indent for HTML
- `CTRL+K CTRL+F`


[1]: https://www.youtube.com/channel/UCX9NJ471o7Wie1DQe94RVIg
[2]: https://youtu.be/sh-NanMOh1Q
[3]: https://www.zeit.co