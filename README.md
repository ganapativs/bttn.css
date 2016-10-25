# bttn.css
Awesome CSS buttons for your next web project

Demo - https://bttn.surge.sh/

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
> :information_source: Build process uses [yarn](https://yarnpkg.com), you can use npm instead of yarn.
####Install dependencies - stylus, autoprefixer-stylus and clean-css
<pre>
yarn
</pre>

####Compile stylus to css
<pre>
yarn start
</pre>

####Minify css for production and build example folder javascript files(Webpack)
<pre>
yarn run build
</pre>

####View bttn.css demo in browser
<pre>
open build/index.html in browser
</pre>

##TODO
- Add loading & done state animations
- Test on older version of the browsers
