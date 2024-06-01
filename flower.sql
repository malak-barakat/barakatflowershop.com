 /*Products: Each product has a name, price, discount, image, and possibly other attributes.
Reviews: Each review has a user name, rating, and comment.
Contact form submissions: Name, email, phone number, message.
For simplicity, let's create a simple structure for these data types.

Products Table:
ProductID (Primary Key)
Name
Price
Discount
ImageURL
Reviews Table:
ReviewID (Primary Key)
UserName
Rating
Comment
ContactForm Submissions Table:
SubmissionID (Primary Key)
Name
Email
PhoneNumber
Message
Here's a simple representation of how you could structure the SQL commands to create these tables:*/

sql

-- Create Products table
CREATE TABLE Products (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    Price DECIMAL(10, 2),
    Discount DECIMAL(4, 2),
    ImageURL VARCHAR(255)
);

-- Create Reviews table
CREATE TABLE Reviews (
    ReviewID INT AUTO_INCREMENT PRIMARY KEY,
    UserName VARCHAR(255),
    Rating INT,
    Comment TEXT
);

-- Create ContactForm Submissions table
CREATE TABLE ContactFormSubmissions (
    SubmissionID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    Email VARCHAR(255),
    PhoneNumber VARCHAR(20),
    Message TEXT
);