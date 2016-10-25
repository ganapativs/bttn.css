/**
 * Created by Ganapati on 10/25/16.
 */
import { h, Component } from 'preact';
import Clipboard from 'clipboard';

export default class BttnBox extends Component {
    componentWillMount() {
        this.setState({
            textCopied: false
        })
    }

    componentDidMount() {
        // Copy code
        let self = this;
        let { i } = this.props;
        new Clipboard('.code-copy' + i, {
            text: (trigger) => {
                let { bttn, size, activeColor, activeSize } = self.props;
                self.setState({
                    textCopied: true
                });
                setTimeout(() => {
                    self.setState({
                        textCopied: false
                    });
                }, 1000);
                return '<button class="bttn-' + bttn.name + ' bttn-' + size + ' bttn-' + activeColor + '">'
                    + activeSize + '</button>';
            }
        })
    }

    render({ bttn, i, color, background, size, activeColor, activeSize, codeBackground }, { textCopied }) {
        return (
            <div class="box-animate animated fadeInUp"
                 style={{
                     'animation-delay': 0.4 + i * 0.07 + 's'
                 }}>
                <div class="box"
                     key={size}
                     style={{
                         color: color,
                         background: background
                     }}>
                    <div class="title">{bttn.displayName}</div>
                    <hr/>
                    <div class="button-wrapper animated fadeIn">
                        <button class={"bttn-" + bttn.name + " bttn-" + size + " bttn-" + activeColor}
                                dangerouslySetInnerHTML={{__html: bttn.texts[activeSize]}}>
                        </button>
                    </div>
                    <div class="classname"
                         style={{
                             color: color,
                             background: codeBackground
                         }}>
                        .bttn-{bttn.name}.bttn-{size}
                    </div>
                    <div class={"code-copy code-copy" + i}>{textCopied ? 'Copied' : 'Copy code'}</div>
                </div>
            </div>
        );
    }
}
