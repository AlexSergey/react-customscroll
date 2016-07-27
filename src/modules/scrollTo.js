function scrollTo(element, to, duration) {
    if (duration <= 0) {
        return false;
    }
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) {
            return;
        }
        scrollTo.call(this, element, to, duration - 10);
    }.bind(this), 10);
}

export default function (domEl, offsetY, animate) {
    if (animate) {
        scrollTo.call(this, domEl, offsetY, 500);
    } else {
        domEl.scrollTop = offsetY;
    }
}