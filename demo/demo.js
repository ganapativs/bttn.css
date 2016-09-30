/**
 * Created by Ganapati(@ganapativs) on 9/27/16.
 */

;(function() {
    // Smooth scroll - hash
    $("a[href*='#']:not([href='#'])").click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var offset = target.offset();
                if (offset && offset.top)
                    $('html,body').animate({
                        scrollTop: offset.top
                    }, 400);
                return false;
            }
        }
    });

    // Color change for button block
    $(document).on('click', '.fancy-box .colors .color', function() {
        var element = $(this).closest('.fancy-box');
        var className = $(this).attr('data-class');

        $(element).find('.color').removeClass('active');
        $(this).addClass('active');
        element.find('button').removeClass(element.attr('data-activeclass'));
        element.find('button').addClass(className);

        if(element.attr('data-activeclass'))
            element.removeClass(element.attr('data-activeclass'));
        element.addClass(className);
        element.attr('data-activeclass', className);
    });

    // Copy code
    new Clipboard('.code-copy', {
        text: function(trigger) {
            var element = $(trigger).closest('.item');
            var copyHTML = element.find('button')[0].outerHTML;
            $(trigger).text('Copied');
            setTimeout(function(){
                $(trigger).text('Copy code');
            }, 1000);
            return copyHTML;
        }
    });

    // Header logo box parallax
    var parallaxThreshold = 360;
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if(scrollTop < parallaxThreshold) {
            $('.bttn-logo-box').css({
                transform: 'translate3d(0, 0, 0) translateY(' + (-scrollTop * 0.4) + 'px)',
                opacity: 1 - (scrollTop / parallaxThreshold)
            });
            $('.go-top').removeClass('active');
        }
        else {
            $('.go-top').addClass('active');
        }
    });

    // Go to top
    $('.go-top').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 400);
    });
})();