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
                        <div class={{"bttn-jelly": true, "active": animateLogo, "bttn-no-outline": true}} style={{display: 'inline-block'}}>
                            bttn.css
                        </div>
                        <h4 class="col-xs-12 animated fadeInUp">Awesome buttons for awesome projects!</h4>
                        <div class="row col-xs-12 col-sm-8 col-md-6 col-lg-6 col-md-offset-3
                                    col-lg-offset-3 col-sm-offset-2 col-xs-offset-0 around-xs download-options">
                            <div class="col-xs-6 download-bttn end-xs animated fadeInUp">
                                <a href="https://raw.githubusercontent.com/ganapativs/bttn.css/master/dist/bttn.min.css"
                                   download="bttn.css">
                                    <button class="bttn-gradient bttn-md bttn-warning bttn-no-outline">
                                        Download
                                        <small class="hidden-xs">
                                            <strong style="vertical-align: middle;font-size: 10px;">
                                                &nbsp;(4kb gzip)
                                            </strong>
                                        </small>
                                    </button>
                                </a>
                            </div>
                            <div class="col-xs-6 download-bttn start-xs animated fadeInUp">
                                <a href="https://github.com/ganapativs/bttn.css" target="_blank">
                                    <button class="bttn-gradient bttn-md bttn-primary bttn-no-outline">
                                        Github<span class="hidden-xs"> Repo</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div class="row col-xs-12 col-sm-8 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3
                                    col-sm-offset-2 around-xs author animated fadeInUp">
                            <div class="col-xs-12 download-bttn center-xs">
                                v0.2.4 • with ❤
                                <a href="https://twitter.com/ganapativs" target="_blank">
                                    <button class="bttn-simple bttn-sm bttn-no-outline">
                                        @ganapativs
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href="https://www.producthunt.com/posts/bttn-css" target="_blank">
                        <div className="product-hunt-featured">
                            <h3 class="animated fadeInUp">Featured on</h3>
                            <span className="hint--bottom hint--bounce hint--rounded" data-hint="Product Hunt">
                                <img class="animated fadeInUp" src="https://i.imgur.com/BPK4eNA.png"/>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}
