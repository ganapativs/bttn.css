# bttn.css
Awesome CSS buttons for your next web project

Demo - https://ganapativs.github.io/bttn.css/

### Environment Setup
**Install stylus and autoprefixer-stylus**
<code>
`npm install -g stylus`
`npm install -g autoprefixer-stylus`
`npm install -g clean-css`
</code>

**Compile stylus to css**
<code>
`stylus -w bttn.styl -o bttn.css`
</code>

**Autoprefix & Minify css for production**
<code>
`stylus -u autoprefixer-stylus -c bttn.styl -o bttn.css`
`cleancss -o bttn.min.css bttn.css`
</code>

**View bttn.css demo in browser**
<code>
`stylus -u autoprefixer-stylus -c demo/demo.styl -o demo/demo.css`
`open demo/index.html in browser`
</code>
