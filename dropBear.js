var DropBear = (function() {

    var toggleId = 'dropbear';
    var hiddenClass = 'dropbear__menu--is-hiding';

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
        var $ddToggle = document.getElementById(toggleId);
        if (idExists($ddToggle)) {
            return;
        }
        var span = document.createElement(options.toggleElement);
            span.innerHTML = options.toggleText;
            span.id = toggleId;
        $selection.parentNode.insertBefore(span, $selection);
        $selection.classList.add(hiddenClass);
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
        var $ddToggle = document.getElementById(toggleId);
        if (idExists($ddToggle)) {
            $ddToggle.parentNode.removeChild(document.getElementById(toggleId));
        }
        if ($selection.classList.contains(hiddenClass)) {
            $selection.classList.remove(hiddenClass);
        }
    };

    /**
     * Toggle the dropdown
     * @param $selection
     */
    var toggle = function($selection) {
        var $ddToggle = document.getElementById(toggleId);
        $ddToggle.onclick = function () {
            if ($selection.classList.contains(hiddenClass)) {
                $selection.classList.remove(hiddenClass);
            }
            else {
                $selection.classList.add(hiddenClass);
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

})();