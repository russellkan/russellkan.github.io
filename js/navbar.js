(function() {
    // adapted from: https://mpetroff.net/2015/03/bootstrap-navbar-without-jquery/

    var toggles = document.getElementsByClassName('navbar-toggle');
    var subnavIndex = 2;

    [].forEach.call(toggles, function(navbar) {
        if (navbar.classList.contains("base-navbar")) {
            navbar.addEventListener('click', function() {
                toggleNavbar(this.parentNode.nextElementSibling);
            }, false);
        } else {
            navbar.addEventListener('click', function() {
                toggleSubNavbar(
                    this.parentNode.children[subnavIndex],
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

