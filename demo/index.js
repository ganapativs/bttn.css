import { h, render } from 'preact';
import WebFont from 'webfontloader';
import App from './components/app';
import 'animate.css';
import '../bttn.styl';
import './style/flexboxgrid.css';
import './style/demo.styl';

// Load google fonts
WebFont.load({
    google: {
      families: ['Quicksand:300,400,700']
    },
    active: () => document.body.style.opacity = 1,
    inactive: () => document.body.style.opacity = 1
});

render((
	<div id="outer">
        <App />
	</div>
), document.body);
