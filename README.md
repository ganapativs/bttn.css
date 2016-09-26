# bttn.css
Awesome CSS buttons for your next web project

### Environment Setup
**Install stylus and autoprefixer-stylus**
`npm install -g stylus`
`npm install -g autoprefixer-stylus`
`npm install -g clean-css`

**Compile stylus to css**
`stylus -w bttn.styl -o bttn.css`

**Autoprefix & Minify css for production**
`stylus -u autoprefixer-stylus -c bttn.styl -o bttn.css`
`cleancss -o bttn.min.css bttn.css`

**View bttn.css demo in browser**
`stylus -u autoprefixer-stylus -c demo/demo.styl -o demo/demo.css`
`open demo/index.html in browser`
