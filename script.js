
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

            // Check if the clicked element is not the menu checkbox
            if (!isMenuClicked) {
                // If a navigation link (tab) is clicked, close the menu
                if (isNavLinkClicked) {
                    menuCheckbox.checked = false;
                    toggleNavBar();
                } else if (!navBar.contains(event.target)) {
                    // If clicked outside the navigation bar, close the menu
                    menuCheckbox.checked = false;
                    toggleNavBar();
                }
            }
        });

        // Adjust the script to close the navigation bar on window resize
        window.addEventListener('resize', function () {
            if (!menuCheckbox.checked) {
                toggleNavBar();
            }
        });

        function toggleNavBar() {
            navBar.style.transition = 'transform 0.2s ease-in-out';
            // navBar.style.transform = menuCheckbox.checked ? 'translateX(0%)' : 'translateX(-100%)';

            // Reset transition property after animation
            setTimeout(function () {
                navBar.style.transition = '';
            }, 200);
        }
    });



    document.addEventListener('DOMContentLoaded', function () {
        var tabs = document.querySelectorAll('.tab');
    
        tabs.forEach(function (tab) {
          tab.addEventListener('click', function () {
            // Remove the 'active' class from all tabs
            tabs.forEach(function (t) {
              t.classList.remove('active');
            });
    
            // Add the 'active' class to the clicked tab
            tab.classList.add('active');
          });
        });
      });
