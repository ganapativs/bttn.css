/**
 * Created by Ganapati on 10/24/16.
 */

import {h, Component} from 'preact';

export default class Header extends Component {
    shouldComponentUpdate({}, {animateLogo}) {
        return animateLogo != this.state.animateLogo;
    }

    componentWillMount() {
        this.setState({
            animateLogo: false
        });
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                animateLogo: true
            });
        }, 500);
    }

    render({}, {animateLogo}) {
        return (
            <div class="row center-xs bttn-logo-box" id="logo-box">
                <div class="col-xs-12">
                    <div class="box">
                        <button class={{"bttn-jelly": true, "active": animateLogo}}>
                            bttn.css
                        </button>
                        <h4 class="col-xs-12 animated fadeInUp">Simple buttons for your next awesome project!</h4>
                        <div class="row col-xs-12 col-sm-8 col-md-6 col-lg-6 col-md-offset-3
                                    col-lg-offset-3 col-sm-offset-2 col-xs-offset-0 around-xs download-options">
                            <div class="col-xs-6 download-bttn end-xs animated fadeInUp">
                                <a href="https://raw.githubusercontent.com/ganapativs/bttn.css/master/bttn.css"
                                   download="bttn.css">
                                    <button class="bttn-gradient bttn-md bttn-warning">
                                        Download
                                    </button>
                                </a>
                            </div>
                            <div class="col-xs-6 download-bttn start-xs animated fadeInUp">
                                <a href="https://github.com/ganapativs/bttn.css" target="_blank">
                                    <button class="bttn-gradient bttn-md bttn-primary">
                                        Github
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div class="row col-xs-12 col-sm-8 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3
                                    col-sm-offset-2 around-xs author animated fadeInUp">
                            <div class="col-xs-12 download-bttn center-xs">
                                v0.1.8 • with ❤
                                <a href="https://twitter.com/ganapativs" target="_blank">
                                    <button class="bttn-simple bttn-sm">
                                        @ganapativs
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
