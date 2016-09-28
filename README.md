# bttn.css
Awesome CSS buttons for your next web project

Demo - https://ganapativs.github.io/bttn.css/

#### Button classes
- bttn-jelly
- bttn-simple
- bttn-minimal
- bttn-material-circle
- bttn-material-flat

#### Button sizes
- bttn-xs
- bttn-sm
- bttn-md
- bttn-lg

#### Usage
Include 'bttn.min.css' in head of your html file and start using class in your button.
<pre>
&lt;button class="bttn-material-circle bttn-md"&gt;
  &lt;i class="icon-menu"&gt;&lt;/i&gt;
&lt;/button&gt;
</pre>


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
