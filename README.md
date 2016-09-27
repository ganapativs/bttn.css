# bttn.css
Awesome CSS buttons for your next web project

Demo - https://ganapativs.github.io/bttn.css/

### Environment Setup
####Install stylus and autoprefixer-stylus
<pre>
npm install -g stylus
npm install -g autoprefixer-stylus
npm install -g clean-css
</pre>

####Compile stylus to css
<pre>
stylus -w bttn.styl -o bttn.css
</pre>

####Autoprefix & Minify css for production
<pre>
stylus -u autoprefixer-stylus -c bttn.styl -o bttn.css
cleancss -o bttn.min.css bttn.css
</pre>

####View bttn.css demo in browser
<pre>
stylus -u autoprefixer-stylus -c demo/demo.styl -o demo/demo.css
open demo/index.html in browser
</pre>
