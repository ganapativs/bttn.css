import {h, Component} from 'preact';
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
    '#607d8b',
    '#b5883f',
    '#480048',
    '#403E44',
    '#00BCD4'
];

let hexToRgb = (hex, opacity) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (opacity)
        return result ? 'rgba(' + parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) + ', ' + opacity + ')' : null;
    else
        return result ? 'rgb(' + parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) + ')' : null;
};

export default class App extends Component {
    componentWillMount() {
        this.setState({
            fixed: 0,
            activeColor: 'primary',
            activeSize: 'medium',
            blockButton: false,
            buttonOutline: false
        });
        window.onscroll = () => {
            let fixed = ((document.documentElement.scrollTop || document.body.scrollTop) - 20) >= parallaxThreshold;
            if (this.state.fixed != fixed)
                this.setState({
                    fixed
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

    setOptions(option, value) {
        this.setState({
            [option]: value
        });
    }

    shouldComponentUpdate({}, {fixed, activeColor, activeSize, blockButton, buttonOutline}) {
        return fixed != this.state.fixed ||
            activeColor != this.state.activeColor ||
            activeSize != this.state.activeSize ||
            blockButton != this.state.blockButton ||
            buttonOutline != this.state.buttonOutline;
    }

    render({}, {fixed, activeColor, activeSize, blockButton, buttonOutline}) {
        return (
            <div id="app">
                <div>
                    <Header />
                    <div class="fancy-box-wrapper animated fadeInUp">
                        <Options colors={colors}
                                 sizes={sizes}
                                 fixed={fixed}
                                 blockButton={blockButton}
                                 buttonOutline={buttonOutline}
                                 activeColor={activeColor}
                                 activeSize={activeSize}
                                 setOptions={this.setOptions.bind(this)}
                                 setColor={this.setColor.bind(this)}
                                 setSize={this.setSize.bind(this)}/>
                        <div class={{
                            "box-wrapper": true,
                            "padding-top": fixed,
                            "animated fadeInUp": windowWidth >= 870
                        }}>
                            {
                                Bttns.map((bttn, i) => {
                                    return <BttnBox bttn={bttn}
                                                    key={i}
                                                    i={i}
                                                    size={sizes[activeSize]}
                                                    activeSize={activeSize}
                                                    activeColor={activeColor}
                                                    color={colors[activeColor]}
                                                    block={blockButton}
                                                    outline={buttonOutline}
                                                    codeBackground={activeColor === 'default' ? hexToRgb(defaultColors[i], 0.2) : '#fafafa'}
                                                    background={activeColor === 'default' ? hexToRgb(defaultColors[i], 0.5) : '#ffffff'}/>
                                })
                            }
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}
