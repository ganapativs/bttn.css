import {h, Component} from 'preact';

export default class Footer extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div class="footer animated fadeInUp">
                <a href="http://meetguns.com" class="hidden-xs" target="_blank">
                    <button class="bttn-stretch bttn-sm">
                        meetguns.com
                    </button>
                </a>
                <a href="https://twitter.com/ganapativs" target="_blank">
                    <button class="bttn-stretch bttn-sm">
                        @ganapativs
                    </button>
                </a>
                <a href="https://github.com/ganapativs/bttn.css" target="_blank">
                    <button class="bttn-stretch bttn-sm">
                        Github Repo
                    </button>
                </a>
                <a href="https://github.com/ganapativs/preact-redux-autocompete" class="hidden-xs" target="_blank">
                    <button class="bttn-stretch bttn-sm">
                        Fancy autocomplete
                    </button>
                </a>
            </div>
        );
    }
}
