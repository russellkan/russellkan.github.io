(function() {
    // adapted from: https://mpetroff.net/2015/03/bootstrap-navbar-without-jquery/

    var toggles = document.getElementsByClassName('navbar-toggle');

    [].forEach.call(toggles, function(navbar) {
        if (navbar.classList.contains("base-navbar")) {
            navbar.addEventListener('click', function() {
                toggleNavbar(this.parentNode.nextElementSibling);
            }, false);
        } else {
            navbar.addEventListener('click', function() {
                children = this.parentNode.children
                toggleSubNavbar(
                    children[children.length-1],
                    this.firstElementChild
                );
            }, false);
        }
    });

    function toggleNavbar(navbar) {
        navbar.classList.toggle('collapse');
        navbar.classList.toggle('in');
    }

    function toggleSubNavbar(navbar, caret) {
        toggleNavbar(navbar);
        caret.classList.toggle('active');
    }

})()

