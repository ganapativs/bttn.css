import { h, Component } from 'preact';

export default class Options extends Component {
	render({ colors, sizes, fixed, setColor, setSize, activeColor, activeSize }) {
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
            </div>
        );
	}
}
