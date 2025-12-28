### To setup backend

# Run this command in PowerShell, git bas will throw error.

```bash
npm init -y; npm install express mysql2 dotenv zod prisma @prisma/client; npm install -D typescript ts-node @types/node @types/express concurrently
```

# To initialize the typescript and prisma

```bash
npx tsc --init; npx prisma init
```

## Now you backend code is ready!! hurry!

# Backend Setup (Node.js + TypeScript + Prisma + MySQL)

This project is a backend setup built using **Node.js**, **Express**, **TypeScript**, **Prisma ORM**, and **MySQL**.  
It follows modern backend development practices and is suitable for building scalable REST APIs.

---

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **Prisma ORM**
- **MySQL**
- **Zod**
- **dotenv**

---

## 📦 Installed Dependencies

These packages are required when the application is running.

### 1. Express

A minimal and flexible Node.js framework used to:

- Create the server
- Handle routes and HTTP methods
- Manage middleware

---

### 2. MySQL2

A fast MySQL driver for Node.js.

- Used by Prisma to communicate with MySQL database
- Supports modern MySQL features

---

### 3. Prisma

A modern ORM (Object Relational Mapper).

- Defines database schema
- Handles migrations
- Generates a type-safe database client

---

### 4. @prisma/client

The auto-generated Prisma Client.

- Used in controllers to interact with the database
- Provides type-safe database queries

---

### 5. Zod

A schema validation library.

- Validates request body and parameters
- Prevents invalid data from entering the system
- Works perfectly with TypeScript

---

### 6. dotenv

Environment variable manager.

- Loads variables from `.env` file
- Keeps sensitive data secure (database URL, secrets)

---

## 🧪 Dev Dependencies

These packages are used only during development.

### 7. TypeScript

Adds static typing to JavaScript.

- Improves code quality
- Reduces runtime errors
- Makes the project more maintainable

---

### 8. ts-node

Runs TypeScript files directly.

- Helpful for development and scripts
- Not recommended for production

---

### 9. @types/node

Provides TypeScript types for Node.js.

- Enables type checking for Node APIs

---

### 10. @types/express

Provides TypeScript types for Express.

- Adds type safety for `req`, `res`, and middleware

---

### 11. concurrently

Runs multiple commands at the same time.

- Used to run TypeScript compiler and Node watch mode together during development

---

## 🔄 Development Workflow

1. TypeScript code is written in the `src` folder
2. TypeScript is compiled to JavaScript in the `dist` folder
3. Node.js runs the compiled JavaScript
4. Prisma handles all database operations
5. Zod validates incoming requests before saving data

---

## 🧠 Summary

This setup provides:

- Clean project structure
- Type safety
- Secure environment configuration
- Scalable database access
- Modern development experience

It is suitable for building **CRUD APIs**, **authentication systems**, and **production-ready backend services**.

---

## ✅ Ready For

- REST API development
- Todo CRUD applications
- Authentication & authorization
- Interview and real-world backend projects

### Happy Coding
