exports.DropBear = function() {

    /**
     * Compare the browser width to breakpoint
     * @param $selection
     * @param breakpoint
     */
    var comparison = function($selection, breakpoint) {
        if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < breakpoint) {
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
        var $ddToggle = document.getElementById('dd-toggle');
        if (idExists($ddToggle)) {
            return;
        }
        var span = document.createElement('span');
            span.innerHTML = 'Menu';
            span.id = 'dd-toggle';
        $selection.parentNode.insertBefore(span, $selection);
        $selection.classList.add('is-hidden');
        toggle($selection);
    };

    /**
     * Convenience method to check for existing elements by Id.
     * @param elementId
     * @returns {boolean}
     */
    var idExists = function(elementId) {
        if (typeof elementId !== 'undefined' && elementId !== null) {
            return true;
        }
    };

    /**
     * Destroy the dropdown
     * @param $selection
     */
    var destroy = function($selection) {
        var $ddToggle = document.getElementById('dd-toggle');
        if (idExists($ddToggle)) {
            $ddToggle.parentNode.removeChild(document.getElementById('dd-toggle'));
        }
        if ($selection.classList.contains('is-hidden')) {
            $selection.classList.remove('is-hidden');
        }
    };

    /**
     * Toggle the dropdown
     * @param $selection
     */
    var toggle = function($selection) {
        var $ddToggle = document.getElementById('dd-toggle');
        $ddToggle.onclick = function () {
            if ($selection.classList.contains('is-hidden')) {
                $selection.classList.remove('is-hidden');
            }
            else {
                $selection.classList.add('is-hidden');
            }
        };
    };

    return {
        construct: function(options) {
            // If selection is jQuery object convert into regular DOM element
            if (options.$selection.hasOwnProperty(0)) {
                options.$selection = options.$selection[0];
            }
            comparison(options.$selection, options.breakpoint);
            window.onresize = function() {
                comparison(options.$selection, options.breakpoint);
            };
        }
    }

};