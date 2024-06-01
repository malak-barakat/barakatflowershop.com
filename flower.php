<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $number = $_POST["number"];
        $message = $_POST["message"];

        // Your email address where you want to receive messages
        $to = "your_email@example.com";

       
    }



    // Function to retrieve product data from the database
    function getProducts() {
        
        $products = [
            [
                'name' => 'flower mix',
                'price' => 10.99,
                'discount_price' => 20.99,
                'image' => 'images/img5.jpeg'
            ],
            // Add more products as needed
        ];
    
        return $products;
    }
    
    // Function to add a product to the cart
    function addToCart($productId) {
        
    }
    
    function getReviews() {

        $reviews = [
            [
                'name' => 'John Doe',
                'rating' => 5,
                'comment' => 'Lorem ipsum dolor sit amet...',
            ],
            // Add more reviews as needed
        ];
    
        return $reviews;
    }
    // Function to submit a contact form
    function submitContactForm($formData) {
    
    }
    

    ?>


  