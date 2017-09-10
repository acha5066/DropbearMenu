var DropBear = (function() {

    /**
     * Compare the browser width to breakpoint
     * @param $selection
     * @param breakpoint
     */
    var comparison = function($selection, breakpoint) {
        if ($(window).width() < breakpoint) {
            create($selection);
        } else {
            destroy($selection);
        }
    };

    /**
     * Create the dropdown
     * @param $selection
     */
    var create = function($selection) {
        var $ddToggle = $('#dd-toggle');
        if ($ddToggle.length) {
            return;
        }
        $selection.before('<span id="dd-toggle">Menu</span>');
        $selection.addClass('is-hidden');
        toggle($selection);
    };

    /**
     * Destroy the dropdown
     * @param $selection
     */
    var destroy = function($selection) {
        var $ddToggle = $('#dd-toggle');
        if ($ddToggle.length) {
            $ddToggle.remove();
        }
        console.log($selection);
        if ($selection.hasClass('is-hidden')) {
            $selection.removeClass('is-hidden');
        }
    };

    /**
     * Toggle the dropdown
     * @param $selection
     */
    var toggle = function($selection) {
        var $ddToggle = $('#dd-toggle');
        $ddToggle.click(function () {
            if ($selection.hasClass('is-hidden')) {
                $selection.removeClass('is-hidden');
            }
            else {
                $selection.addClass('is-hidden');
            }
        });
    };

    return {
        construct: function(options) {
            comparison(options.$selection, options.breakpoint);
            $(window).resize(function() {
                comparison(options.$selection, options.breakpoint);
            });
        }
    }

})();