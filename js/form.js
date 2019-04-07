(function() {

    var inputs = document.querySelectorAll(['input', 'textarea']);

    [].forEach.call(inputs, function(input) {
        if (input.type != 'submit' && input.type != 'hidden') {
            input.addEventListener('input', function() {
                showHideLabel(this, this.previousElementSibling);
            });
            input.addEventListener('blur', function() {
                this.previousElementSibling.classList.remove('on');
            });
            input.addEventListener('focus', function() {
                this.previousElementSibling.classList.add('on');
            });
        }
    });

    function showHideLabel(input, label) {
        if (input.value.length) {
            label.classList.add('visible');
        } else {
            label.classList.remove('visible');
        }
    }

})()

function gaFormSent() {
    ga('send', 'event', 'Contact Form', 'submit');
}
