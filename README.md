# Travlr Getaways Full Stack Web Application

## Overview
This project is a full-stack travel booking website for Travlr Getaways, featuring both a customer-facing site and an admin Single Page Application (SPA) with secured login functionality.

---

## Architecture

In this project, I used two different types of frontend development:  
- The **customer site** was built using **Express with Handlebars templates**, combined with **HTML** and **JavaScript** for dynamic client-side interactivity. This was structured in a traditional multi-page application (MPA) style, where each page request returned a full HTML document rendered on the server.
- The **admin site** was built as a **Single-Page Application (SPA)** using **Angular**. Instead of loading new pages, Angular dynamically updated the view in the browser based on routing changes, providing a seamless and faster user experience for administrators.

The backend used a **NoSQL MongoDB database** because of its flexibility in storing different types of data (like trips, users, and bookings) without enforcing a rigid schema. MongoDB’s document-oriented storage made it easier to store complex travel package information and adapt as requirements changed.

---

## Functionality

**JSON** (JavaScript Object Notation) is different from regular JavaScript because it is purely a data format — it stores and transmits data without including functions or executable code. JSON serves as a bridge between the frontend and backend by standardizing how data is transferred via RESTful APIs. For example, when a customer books a trip, the trip information is serialized as JSON and sent from the Angular frontend to the Node.js backend server.

During the development process, I refactored several areas for better functionality:
- **Refactored RESTful routes** to improve consistency and error handling.
- **Refactored Angular components** to create **reusable UI components** for trip listings and booking forms.
  - **Benefit:** Reusable components reduced code duplication, improved maintainability, and made updates easier without breaking functionality elsewhere.

---

## Testing

In the full stack application, **methods** (such as GET, POST, PUT, DELETE) define the type of HTTP request made to **endpoints** (specific API URLs like `/api/trips` or `/api/bookings`).  
Testing required verifying:
- That **GET** requests returned correct lists of trips or users.
- That **POST** requests correctly created new resources.
- That **PUT** requests properly updated existing trips or bookings.
- That **DELETE** requests correctly removed resources.

Adding **security with JWT authentication** added challenges to testing. Protected endpoints require sending a valid token in the Authorization header. Without this token, requests would fail with a 401 Unauthorized error. I used Postman and browser DevTools to test both public and secured routes, verifying that the token-based security worked as intended.

---

## Reflection

This course has helped me progress significantly toward my professional goals by giving experience with real-world web development tools and full-stack architecture. I strengthened my skills in:
- Frontend development with **Angular and Express/Handlebars**.
- Backend development with **Node.js, Express, MongoDB, and Mongoose**.
- API design and **RESTful service development**.
- Implementing **security features** such as JWT authentication.
- Practical **full stack project structure** and deployment processes.



---
