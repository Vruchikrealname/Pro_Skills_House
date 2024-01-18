
    document.addEventListener('DOMContentLoaded', function () {
        var menuCheckbox = document.getElementById('menu');
        var navBar = document.querySelector('.nav');

        // Event listener for checking/unchecking the menu checkbox
        menuCheckbox.addEventListener('change', function () {
            toggleNavBar();
        });

        // Event listener for clicking anywhere on the page
        document.addEventListener('click', function (event) {
            var isMenuClicked = event.target.closest('#menu');
            var isNavLinkClicked = event.target.closest('.nav a');

            // Check if the clicked element is not the menu checkbox and not within the navigation bar
            if (!isMenuClicked && !navBar.contains(event.target)) {
                menuCheckbox.checked = false;
                toggleNavBar();
            }

            // Check if a navigation link (tab) is clicked
            if (isNavLinkClicked) {
                menuCheckbox.checked = false;
                toggleNavBar();
            }
        });

        function toggleNavBar() {
            navBar.style.transform = menuCheckbox.checked ? 'translateX(0%)' : 'translateX(-100%)';
        }
    });