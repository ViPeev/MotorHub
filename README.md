# MotorHub
Personal Project - React web application for car sales

# Introduction
MotorHub is a platform for publishing car deals on the internet.

# Technologies

### Front-end
-   ReactJS
-   JavaScript
-   HTML
-   CSS (SASS)
-   React Testing Library
-   Cypress

### Back-end
-   Node.js
-   Express
-   MongoDB / Mongoose
-   JWT
-   Multer
-   Cloudinary
-   bcrypt
-   dotenv


# Deployment

The application is deployed on the internet on a private VPS, secured with firewall rules, custom sshd configuration with SSH keys, and Fail2Ban.
It is temporarily accessible via https /it has an active SSL certificate/ on https://www.motorhub.info/, served by an Apache webserver.

# Installation

To run this app locally, follow these steps:

1.  Clone this repository
2.  Navigate to the front-end directory using `cd client`
3.  Install the dependencies using `npm install`
4.  Navigate to the back-end directory using `cd ../server` or `cd server` if you are in the main directory.
5.  Install the dependencies using `npm install`
6.  Create a `.env` file in the root directory and add the necessary environment variables, which are:
- SECRET
- PORT
- Cloudinary:
    * CLOUD_NAME
    * API_KEY
    * API_SECRET
    * This requires an active account with https://cloudinary.com/. Two separate upload presets need to be set in the account - motorhub-profile-images & motorhub-cars
 
7.  Navigate to the client folder and run `npm start`
8.  Navigate to the server folder and run `npm start`

# Features
### Public
- Home page with a static hero section with car advertisements and basic search form
- Catalog with an extended search form, collection of car deals, pagination and sorters
- Details page for each car deal with its technicals details, image gallery, description, and contact details
- Seller profiles with their active car deals
- Login
- Register
- Static pages - About, Contacts, Terms of Service, Privacy policy
- 404 page for invalid routes

### Private
- Home page with a static hero section with car advertisements and basic search form
- Catalogue with an extended search form, collection of car deals, pagination and sorters
- Create Page
- Edit page
  - Accessible via the details page, only if the associated automobile was created by the logged user
  - Enables article editing and deletion
- Details page for each car deal with its technicals details, image gallery, description, and contact details
  - Logged in users, if they are not the publisher of the deal, are able to add the article to their favourites collection
  - Logged in users, if they are the publisher of the deal, are able to navigate to the respective edit page.
- Seller profiles with their active car deals
  - If seller is the logged-in user, he will be redirected to the Profile page
- Profile page
  - Collection of the logged user's published car deals
  - Collection of the user's liked car deal /favourites/
  - Adding profile photo functionality
- Logout
- Static pages - About, Contacts, Terms Of Service, Privacy policy
- 404 page for invalid routes

<br/>

### Login
![login](./img/login.jpg?raw=true)

### Home page
![login](./img/home.jpg?raw=true)

### Catalog
![login](./img/catalogue.jpg?raw=true)

### Details
![login](./img/details.jpg?raw=true)