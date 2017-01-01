# bttn.css
Awesome buttons for awesome projects!

###[Demo](https://bttn.surge.sh/) | [Medium Article](https://medium.com/@ganapativs/bttn-css-awesome-buttons-for-awesome-projects-baa2486bcb3d) | [ProductHunt](https://www.producthunt.com/posts/bttn-css)

<img src="http://imgur.com/mqPa6Ac.png" width="600" />

#### Button style classes
- `bttn-simple`
- `bttn-bordered`
- `bttn-minimal`
- `bttn-stretch`
- `bttn-jelly`
- `bttn-gradient`
- `bttn-fill`
- `bttn-material-circle`
- `bttn-material-flat`
- `bttn-pill`
- `bttn-float`
- `bttn-unite`
- `bttn-slant`

#### Button sizes
- `bttn-xs`
- `bttn-sm`
- `bttn-md`
- `bttn-lg`

#### Button Colors
- `bttn-default`
- `bttn-primary`
- `bttn-warning`
- `bttn-success`
- `bttn-danger`
- `bttn-royal`

#### Button helper classes
- `bttn-block`
- `bttn-no-outline` (Don't show outline when navigating with keyboard/interact using mouse or touch)

#### Usage
Include 'bttn.min.css' in head of your html file and start using class in your button.
<pre>
&lt;button class="bttn-material-circle bttn-md"&gt;
  &lt;i class="icon-menu"&gt;&lt;/i&gt;
&lt;/button&gt;
</pre>


### Environment Setup

> :information_source: Build process uses [yarn](https://yarnpkg.com), you can also use npm instead.


####Install dependencies - stylus, autoprefixer-stylus and clean-css
<pre>
yarn
</pre>

####Compile stylus to css
<pre>
yarn start
</pre>

####Dev environment
<pre>
yarn run dev
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
