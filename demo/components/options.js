import {h, Component} from 'preact';

export default class Options extends Component {
    shouldComponentUpdate({colors, sizes, fixed, setColor, setSize, activeColor, activeSize, blockButton, buttonOutline, setOptions}) {
        return colors != this.props.colors ||
            sizes != this.props.sizes ||
            fixed != this.props.fixed ||
            setColor != this.props.setColor ||
            activeColor != this.props.activeColor ||
            activeSize != this.props.activeSize ||
            setSize != this.props.setSize ||
            setOptions != this.props.setOptions ||
            blockButton != this.props.blockButton ||
            buttonOutline != this.props.buttonOutline;
    }

    render({colors, sizes, fixed, setColor, setSize, activeColor, activeSize, blockButton, buttonOutline, setOptions}) {
        let activeSizeIndex = Object.keys(sizes).findIndex((size) => size === activeSize);
        let activeColorIndex = Object.keys(colors).find((color) => color === activeColor);
        return (
            <div class={{"options-chooser animated fadeInUp": true, "fixed": fixed}}>
                <div className="options-chooser-container">
                    <div className="half colors left">
                        {
                            Object.keys(colors).map((color, i) => {
                                return <div class="color-round animated zoomIn"
                                            style={{
                                                'animation-delay': 0.4 + i * 0.07 + 's'
                                            }}>
                                    <div class={{'color': true, 'active': color === activeColor}}
                                         onClick={() => setColor(color)}
                                         style={{
                                             background: colors[color]
                                         }}>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="half sizes right">
                        <div class="size-box animated fadeInUp">
                            {
                                Object.keys(sizes).map((size, i) => {
                                    return <div class="size-block animated zoomIn"
                                                style={{
                                                    color: activeColorIndex !== 'default' ? colors[activeColorIndex] : '#777777',
                                                    'animation-delay': 0.8 + i * 0.07 + 's'
                                                }}>
                                        <div class={{'size': true, 'active': size === activeSize}}
                                             onClick={() => setSize(size)}>
                                            {sizes[size]}
                                        </div>
                                    </div>
                                })
                            }
                            <div class="size-slider fadeIn" style={{
                                transform: 'translateX(' + (60 * activeSizeIndex) + 'px)',
                                background: activeColorIndex !== 'default' ? colors[activeColorIndex] : '#777777'
                            }}></div>
                        </div>
                    </div>
                </div>
                <div className="options-chooser-container options-chooser-container-small hidden-xs">
                    <div className="half sizes left"></div>
                    <div className="half sizes right">
                        <div class="options-checkbox-container animated fadeInUp hint--left hint--rounded hint--bounce"
                             data-hint="Full width buttons, Enable: `bttn-block`"
                             onClick={()=>setOptions('blockButton', !blockButton)}
                             style={{'animation-delay': '1s'}}>
                            <input class="options-checkbox options-checkbox-flat"
                                   checked={blockButton}
                                   id="block-indicator"
                                   type="checkbox"/>
                            <label class="options-checkbox-btn" for="block-indicator"/>
                            <span class={{"options-checkbox-btn-label": true, "active": blockButton}}>Block Buttons</span>
                        </div>
                        <div class="options-checkbox-container animated fadeInUp hint--left hint--rounded hint--bounce"
                             data-hint="Button outline when navigating with keyboard, Disable: `bttn-no-outline`"
                             onClick={()=>setOptions('buttonOutline', !buttonOutline)}
                             style={{'animation-delay': '1.1s'}}>
                            <input class="options-checkbox options-checkbox-flat"
                                   checked={buttonOutline}
                                   id="disable-outline"
                                   type="checkbox"/>
                            <label class="options-checkbox-btn" for="disable-outline"/>
                            <span class={{"options-checkbox-btn-label": true, "active": buttonOutline}}>Outline(Accessibility)</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
