import { h, Component } from 'preact';
import Header from './header';
import Footer from './footer';
import Bttns from './bttns';
import BttnBox from './bttnBox';
import Options from './options';

let windowWidth = window.innerWidth;

// Header parallax
let parallaxThreshold = 360;

let colors = {
	'primary': '#1d89ff',
	'warning': '#feab3a',
	'danger': '#FF5964',
	'success': '#28B78D',
	'royal': '#bd2df5',
	'default': '#ffffff'
};

let sizes = {
	'extraSmall': 'xs',
	'small': 'sm',
	'medium': 'md',
	'large': 'lg'
};

let defaultColors = [
	'#f44336',
	'#9c27b0',
	'#3f51b5',
	'#03a9f4',
	'#009688',
	'#8bc34a',
	'#ff9800',
	'#795548',
	'#607d8b'
];

let hexToRgb = (hex, opacity) => {
	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	if(opacity)
		return result ? 'rgba(' + parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) + ', ' + opacity + ')' : null;
	else
		return result ? 'rgb(' + parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) + ')' : null;
};

export default class App extends Component {
	componentWillMount() {
		this.setState({
			scrollTop: 0,
			activeColor: 'primary',
			activeSize: 'medium'
		});
		window.onscroll = () => {
			this.setState({
				scrollTop: document.documentElement.scrollTop || document.body.scrollTop
			});
		};
	}

	setColor(activeColor) {
		this.setState({
			activeColor
		});
	}

	setSize(activeSize) {
		this.setState({
			activeSize
		});
	}

	render({}, { scrollTop, activeColor, activeSize }) {
		return (
			<div id="app">
                <Header scrollTop={scrollTop}
						windowWidth={windowWidth}
						parallaxThreshold={parallaxThreshold} />
				<div class="fancy-box-wrapper animated fadeIn">
					<Options colors={colors}
							 sizes={sizes}
							 fixed={scrollTop - 20 >= parallaxThreshold}
							 activeColor={activeColor}
							 activeSize={activeSize}
							 setColor={this.setColor.bind(this)}
							 setSize={this.setSize.bind(this)} />
					<div class={{"box-wrapper": true, "padding-top": scrollTop - 20 >= parallaxThreshold, "animated fadeInUp": windowWidth >= 870}}>
						{
							Bttns.map((bttn, i) => {
								return <BttnBox bttn={bttn}
												key={i}
												i={i}
												size={sizes[activeSize]}
												activeSize={activeSize}
												activeColor={activeColor}
												color={colors[activeColor]}
												codeBackground={activeColor === 'default' ? hexToRgb(defaultColors[i], 0.2) : '#fafafa'}
												background={activeColor === 'default' ? hexToRgb(defaultColors[i], 0.5) : '#ffffff'}/>
							})
						}
					</div>
				</div>
                <Footer />
			</div>
		);
	}
}
