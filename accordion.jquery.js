//mobileAccordion
// Mobile Accordion expand/collaspe toggle and trigger active class to update UI icons
// Can pass in options to get specific selectors, and optional callback function
(function ($) {
    $.fn.simpleAccordion = function (args) {
        var options = {
            selector: '.js-accordion-header',
            contentSelector: '.js-accordion-content',
            activeClassSelector: 'active',
            multipleOpen: true,
            animationSpeed: 250,
            callback: function () { }
        };
        $.extend(options, args);

        return this.each(function () {
            var $parentSelector = $(this);

            $parentSelector.on('click', options.selector, function (e) {
                var $this = $(this);
                e.stopImmediatePropagation();
                e.preventDefault();
                if (options.multipleOpen == false && !$this.hasClass(options.activeClassSelector)) {
                    $parentSelector.find("." + options.activeClassSelector).toggleClass(options.activeClassSelector).next(options.contentSelector).slideToggle();
                }
                $this.toggleClass(options.activeClassSelector).next(options.contentSelector).slideToggle(options.animationSpeed, function () {
                    options.callback.call(this);
                });
            });
        });
    };
})(jQuery);
