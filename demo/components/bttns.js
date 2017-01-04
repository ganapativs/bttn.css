/**
 * Created by Ganapati on 10/25/16.
 */

let defaultText = {
    extraSmall: 'Extra Small',
    small: 'Small',
    medium: 'Medium',
    large: 'Large',
};

export default [
    {
        name: 'simple',
        className: 'bttn-simple',
        displayName: 'Simple',
        texts: defaultText
    },
    {
        name: 'bordered',
        className: 'bttn-bordered',
        displayName: 'Bordered',
        texts: defaultText
    },
    {
        name: 'minimal',
        className: 'bttn-minimal',
        displayName: 'Minimal',
        texts: defaultText
    },
    {
        name: 'stretch',
        className: 'bttn-stretch',
        displayName: 'Stretch',
        texts: defaultText
    },
    {
        name: 'jelly',
        className: 'bttn-jelly',
        displayName: 'Jelly',
        texts: defaultText
    },
    {
        name: 'gradient',
        className: 'bttn-gradient',
        displayName: 'Gradient',
        texts: defaultText
    },
    {
        name: 'fill',
        className: 'bttn-fill',
        displayName: 'Fill',
        texts: defaultText
    },
    {
        name: 'material-circle',
        className: 'bttn-material-circle',
        displayName: 'Material - circle',
        texts: {
            extraSmall: '<i class="icon-menu"></i>',
            small: '<i class="icon-menu"></i>',
            medium: '<i class="icon-menu"></i>',
            large: '<i class="icon-menu"></i>',
        }
    },
    {
        name: 'material-flat',
        className: 'bttn-material-flat',
        displayName: 'Material - flat',
        texts: defaultText
    },
    {
        name: 'pill',
        className: 'bttn-pill',
        displayName: 'Pill',
        texts: defaultText
    },
    {
        name: 'float',
        className: 'bttn-float',
        displayName: 'Float',
        texts: defaultText
    },
    {
        name: 'unite',
        className: 'bttn-unite',
        displayName: 'Unite',
        texts: defaultText
    },
    // Beta buttons
    {
        name: 'slant',
        className: 'bttn-slant',
        displayName: 'Slant',
        isBeta: true,
        texts: defaultText
    }
].reverse()