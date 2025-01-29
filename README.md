Node API Project

Description

This project implements a RESTful API using Node.js. The API exposes several endpoints to perform CRUD (Create, Read, Update, Delete) operations for managing users. It uses file system (FS) as a simple database for storing user data in JSON files. This approach eliminates the need for an external database, making it suitable for small applications or learning projects.

The project is built with basic Node.js modules, including HTTP, File System (FS), and URL parsing. It provides endpoints for creating, retrieving, updating, and deleting user data. The user data is stored in a users folder in JSON format, with each user’s phone number serving as a unique identifier.
Features

    RESTful API structure with standard HTTP methods (GET, POST, PUT, DELETE)
    CRUD operations for managing users
    File System as the database for storing user data
    Data is stored in JSON format for easy manipulation

File System as Database

For this project, the file system (FS) module in Node.js is used to handle user data. When a user is created, updated, or deleted, the changes are made to JSON files located in the users directory. Each user’s data is stored in a file named by the user's phone number. This eliminates the need for an external database and simplifies the setup process.

The following operations are implemented:

    Create: Adds a new user if the phone number does not already exist.
    Read: Retrieves user details by phone number, excluding sensitive information like the password.
    Update: Modifies user details such as name or password based on the provided phone number.
    Delete: Removes a user from the system by phone number.

CRUD Operations

    POST /users
        Creates a new user with the provided details (firstName, lastName, phoneNumber, password, tosAgreement).
        Validates input data to ensure proper formatting.

    GET /users?phone={phone_number}
        Retrieves a user by their phone number.
        Excludes the password from the response.

    PUT /users
        Updates user details (first name, last name, password) based on the phone number provided.
        Ensures at least one field is provided for update.

    DELETE /users?phone={phone_number}
        Deletes the user by their phone number.
