function copyInput(node) {
    node.select();
    document.execCommand('copy');
    getSelection().removeAllRanges();
}

Array.prototype.forEach.call(document.getElementsByClassName('link-list--button'), function (el) {
    el.onclick = function (e) {
        e.preventDefault();

        this.classList.add('copied');
        this.addEventListener('animationend', function () {
            this.classList.remove('copied');
        });

        copyInput(this.nextSibling.nextSibling);

        this.blur();

        gtag('event', 'Visit link', {'event_category': 'Indentities', 'event_label': this.getAttribute('title')});
    };
});

function registerModalToggles(openSelector, modalContentId) {
    var openTrigger = document.querySelector(openSelector);
    openTrigger.onclick = function (e) {
        e.preventDefault();
        this.parentNode.classList.add('hidden');
        document.getElementById('main-content').classList.add('hidden');
        document.getElementById(modalContentId).classList.add('visible');
    };

    document.querySelector('#' + modalContentId + ' .close').onclick = function (e) {
        e.preventDefault();
        openTrigger.parentNode.classList.remove('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        document.getElementById(modalContentId).classList.remove('visible');
    };
}

registerModalToggles('.imprint-link', 'imprint');
registerModalToggles('.privacy-policy-link', 'privacy-policy');