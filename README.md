# TripTribe

TripTribe is a travel listing full-stack web application that allows users to explore and share amazing travel destinations. It features secure user authentication, cloud-based image storage, and a fully functional CRUD system for managing listings and reviews.

---

## 🔍 Summary

TripTribe lets users:

* Sign up and log in securely
* Create, edit, and delete travel place listings
* Upload images for listings using Cloudinary
* View and review places added by other users
* Get notified with flash messages for important actions

---

## 📁 Structure Overview

* `models/`: Defines the data models (User, Listing, Review)
* `routes/`: Route handlers for listings, users, and reviews
* `views/`: EJS templates for rendering pages
* `controllers/`: Route logic and backend actions
* `public/`: Static assets like CSS and JS
* `utils/`: Middleware, error handlers, and schema validations

---

## 🚀 Technologies Used

* **Backend**: Node.js, Express.js
* **Frontend**: EJS templates, Bootstrap 5
* **Database**: MongoDB with Mongoose
* **Auth**: Passport.js for local authentication
* **Cloud**: Cloudinary for image storage, MongoDB Atlas for database
* **Security & Validation**: dotenv, Joi, express-session

---

## 💡 Key Features

* Full user authentication (signup, login, logout)
* Create and manage travel listings with image upload
* Leave reviews on other users’ listings
* Backend and frontend validation
* Error handling and user feedback through flash messages

---

## 🛠️ Setup Instructions

1. Clone the repo and install dependencies
2. Add environment variables in a `.env` file:

```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
DB_URL=your_mongodb_connection
SECRET=your_session_secret
```

3. Optionally seed the database using `node init.js`
4. Start the app: `node app.js`
5. Visit `http://localhost:8080`

---

## 🧪 Routes

* **/signup**: Create account
* **/login**: Log in
* **/logout**: Log out
* **/listings**: View all listings
* **/listings/new**: Add a new listing
* **/listings/\:id**: View single listing
* **/listings/\:id/edit**: Edit your listing
* **/listings/\:id/reviews**: Add a review

---

## 👤 Author

**Chetan Agarwal**
GitHub: [@Agarwalchetan](https://github.com/Agarwalchetan)

---

## 📄 License

MIT License

---

TripTribe is a great start for building a travel recommendation or sharing platform. Sign in, explore listings, and add your own adventures!
