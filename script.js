
//Toggle the navigation menu when clicking on the hamburger icon.
//Smooth scrolling when clicking on navigation links.
//Functionality for the "Add to Cart" buttons.

//This JavaScript code will toggle the navigation bar when the menu icon is clicked, and it will enable smooth scrolling when clicking on navigation links.
// JavaScript code for FLOWER SHOP website

// Toggle navigation bar
const toggler = document.getElementById('toggler');
const navbar = document.querySelector('.navbar');

toggler.addEventListener('change', () => {
    if (toggler.checked) {
        navbar.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
    } else {
        navbar.style.clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
    }
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Toggle navigation menu
    const toggler = document.getElementById('toggler');
    const navbar = document.querySelector('.navbar');

    toggler.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            // Close the navigation menu after clicking a link (for smaller screens)
            if (window.innerWidth <= 768) {
                navbar.classList.remove('active');
                toggler.checked = false;
            }
        });
    });

    // Functionality for "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Add your logic here for adding the item to the cart
            // For example, you can send an AJAX request to the server or simply display a message
            alert('Item added to cart!');
        });
    });

    
});

// Function to handle adding products to cart
function addToCart() {
    const cartButtons = document.querySelectorAll('.cart-btn');
  
    cartButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        // Implement your cart functionality here
        console.log('Added to cart!');
      });
    });
  }
 // Call the functions once the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    toggleNavbar();
    smoothScrolling();
    addToCart();
  });
   