/**
 * Created by Ganapati(@ganapativs) on 9/27/16.
 */

;(function() {
    // Color change for button block
    $(document).on('click', '.fancy-box .colors .color', function() {
        var element = $(this).closest('.fancy-box');
        var className = $(this).attr('data-class');

        $(element).find('.color').removeClass('active');
        $(this).addClass('active');

        if(element.attr('data-activeclass'))
            element.removeClass(element.attr('data-activeclass'));
        element.addClass(className);
        element.attr('data-activeclass', className);
    });
})();