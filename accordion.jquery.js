//mobileAccordion
// Mobile Accordion expand/collaspe toggle and trigger active class to update UI icons
// Can pass in options to get specific selectors, and optional callback function
(function ($) {
    $.fn.mobileAccordion = function (args) {
        var options = {
            selector: '.js-mobile-accordion-header',
            contentSelector: '.js-mobile-accordion-content',
            callback: function () { }
        };

        $.extend(options, args);

        return this.each(function () {
            var $parentSelector = $(this);

            $parentSelector.on('click', options.selector, function (e) {
                e.stopImmediatePropagation();
                e.preventDefault();
                $(this).toggleClass('active').next(options.contentSelector).slideToggle(250, function () {
                    options.callback.call(this);
                });
            });
        });
    };
})(jQuery);
