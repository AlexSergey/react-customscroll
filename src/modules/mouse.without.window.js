import { isClient } from '../utils/is';

let MouseWithoutWindow = (function () {
    let instance;

    function createInstance() {
        document.addEventListener('mouseup', function(e) {
            let w = window,
                d = document,
                el = d.documentElement,
                body = d.getElementsByTagName('body')[0],
                width = w.innerWidth || el.clientWidth || body.clientWidth,
                height = w.innerHeight|| el.clientHeight|| body.clientHeight;

            if (
                (
                    e.clientX >= width ||
                    e.clientX < 0
                ) ||
                (
                    e.clientY >= height ||
                    e.clientY < 0
                )
            ) {
                fire();
            }
        });

        window.addEventListener('blur', function() {
            fire();
        });

        function fire() {
            let event = document.createEvent('Event');
            event.initEvent('mouseWithoutWindow', true, true);
            document.dispatchEvent(event);
        }
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
}());

let mouseWithoutWindow = isClient() ? MouseWithoutWindow.getInstance() : null;

export default mouseWithoutWindow;
