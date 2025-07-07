TripTribe - Travel Listing Platform
A modern web application that allows users to discover, share, and review travel destinations and accommodations.

🌟 What is TripTribe?
TripTribe is a travel-focused platform where users can:

Discover amazing travel destinations and accommodations
Share their own travel listings with photos and details
Review places they've visited to help other travelers
Connect with fellow travel enthusiasts
🚀 Key Features
User Authentication - Secure signup/login system
Listing Management - Create, edit, and delete travel listings
Photo Uploads - Upload images via Cloudinary integration
Reviews & Ratings - 5-star rating system with comments
Interactive Maps - View listing locations on TomTom maps
Responsive Design - Works seamlessly on all devices
🛠️ Tech Stack
Backend:

Node.js & Express.js
MongoDB with Mongoose
Passport.js for authentication
Cloudinary for image storage
Frontend:

EJS templating
Bootstrap 5 for styling
TomTom Maps API
Custom CSS/JavaScript
⚡ Quick Start
Clone & Install


git clone <repository-url>
cd major-project
npm install
Environment Setup
Create .env file with:


ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
MAP_API_KEY=your_tomtom_api_key
Run Application


node app.js
Visit http://localhost:8080

📁 Project Structure

├── models/          # Database schemas (User, Listing, Review)
├── routes/          # Express route handlers
├── controllers/     # Business logic
├── views/           # EJS templates
├── public/          # Static assets (CSS, JS, images)
├── middleware.js    # Custom middleware functions
└── app.js          # Main application file
🎯 Core Functionality
Browse Listings - View all travel destinations on the homepage
User Registration - Create account to start sharing listings
Add Listings - Share your favorite places with photos and details
Leave Reviews - Rate and review places you've visited
Interactive Maps - See exact locations of listings
Manage Content - Edit/delete your own listings and reviews
Perfect for travelers who want to share experiences and discover new destinations! 🌍✈️
