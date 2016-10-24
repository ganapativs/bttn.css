# bttn.css
Awesome CSS buttons for your next web project

Demo - https://ganapativs.github.io/bttn.css/

#### Button style classes
- bttn-simple
- bttn-bordered
- bttn-minimal
- bttn-stretch
- bttn-jelly
- bttn-gradient
- bttn-fill
- bttn-material-circle
- bttn-material-flat

#### Button helper classes
- bttn-block

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
####Install dependencies - stylus, autoprefixer-stylus and clean-css
<pre>
npm install
</pre>

####Compile stylus to css
<pre>
npm start
</pre>

####Autoprefix & Minify css for production
<pre>
npm run build
</pre>

####View bttn.css demo in browser
<pre>
npm run demo
open demo/index.html in browser
</pre>

##TODO
- Add loading & done state animations
- Test on older version of the browsers
