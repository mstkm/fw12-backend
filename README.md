<div align="center">
  <br>
  <h1><strong>Backend Karcis App</strong></h1
  <br>

  <!-- [**View the Web App**](https://exceltodynamodbjson.vercel.app) -->
</div>


## Table of contents
- [Descriptions](#descrptions)
- [Built with](#built-with)
- [Technologies](#technologies)
- [ENV Example](#env-example)
- [Main End Point](#main-end-point)


##  Description
Backend application for **fw12-frontend** repository


## Built with
![Express](https://img.shields.io/badge/Express-v4.18.2-pink?style=flat)
![Cors](https://img.shields.io/badge/cors-v2.8.5-green?style=flat)
![Argon2](https://img.shields.io/badge/argon2-v0.30.2-blue?style=flat)
![Dotenv](https://img.shields.io/badge/dotenv-v16.0.3-orange?style=flat)
![JWT](https://img.shields.io/badge/jwt-v8.5.1-navy?style=flat)
![Morgan](https://img.shields.io/badge/morgan-v1.10.0-cyan?style=flat)
![Multer](https://img.shields.io/badge/multer-v8.4.5-ray?style=flat)
![Nodemon](https://img.shields.io/badge/nodemon-v2.0.20-white?style=flat)
![pg](https://img.shields.io/badge/pg-v8.8.0-pink?style=flat)
![Cloudinary](https://img.shields.io/badge/cloudinary-v1.33.0-pink?style=flat)
![Googleapis](https://img.shields.io/badge/googleapis-v110.0.0-green?style=flat)
![MulterStorageCloudinary](https://img.shields.io/badge/multerstoragecloudinary-v4.0.0-blue?style=flat)
![Nodemailer](https://img.shields.io/badge/nodemailer-v6.9.0-navy?style=flat)


## Technologies
- [Node Js](https://nodejs.org/en/)
- [Express Js](https://expressjs.com/)
- [Postman](https://www.postman.com/)
- [Postgree SQL](https://www.postgresql.org/)
- [Supabase](https://supabase.com/)
- [Vercel](https://www.vercel.com/)
   

## ENV Example
### Database URL
DB_URL =

### Port server
PORT =

### Client id google mail api
CLIENT_ID =

### Client secret google mail api
CLIENT_SECRET =

### Refresh token google mail api
REFRESH_TOKEN =


## Main End Point
|url|method|desc|
|---|------|----|
|/auth/login|POST|login|
|/auth/register|POST|registrasi|
|/auth/forgotPassword|POST|if forgot password|
|/auth/resetPassword|POST|reset password |
|/movies?limit&page&search&sort&sortBy|GET|get all movies with a default limit of 5 movies
|/movies/nowShowing?limit=&page=&search&sort&sortBy=title&month|GET|get all the movies that are currently showing with a default limit of 5 movies|
|/movies/upcoming?month=&year&limit&page&search&sort&sortBy|GET|get all movies based on the month of release with a default limit of 5 movies|
|/profile/transaction|POST|make transactions|



