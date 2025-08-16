# ✈️ Flight Booking Backend

This is a **full backend system** for a Flight Booking website, built with **Node.js** and **Express.js**.  
It provides a **scalable microservices architecture** with authentication, notifications, and role-based login.

---

## 🚀 Features
- 🔑 **Authentication & Authorization** with **JWT**  
- 👤 **Role-based login** (Admin, User, etc.)  
- 📧 **Email notifications** when a user books a flight (via **Nodemailer**)  
- 📨 **Message queue handling** with **RabbitMQ**  
- ⚡ **Microservices architecture** (API Gateway, Flight Service, Booking Service)  
- 🔒 Secure and structured backend  

---

## 🏗️ Project Structure
The project is divided into **3 services**:

1. **API Gateway**  
   - Handles incoming requests  
   - Authentication & authorization middleware  
   - Routes requests to respective services  

2. **Flight Service**  
   - Manages flights (CRUD operations)  
   - Stores flight-related data  

3. **Booking Service**  
   - Handles user bookings  
   - Sends booking confirmation emails via Nodemailer  
   - Uses RabbitMQ for async communication  

---

## 🛠️ Tech Stack
- **Node.js**  
- **Express.js**  
- **JWT (JSON Web Token)**  
- **Nodemailer**  
- **RabbitMQ**  
- **MongoDB / SQL** (depending on your DB choice)  

---

## ⚙️ Installation & Setup
Clone the repo and install dependencies:

```bash
git clone https://github.com/<your-username>/flight-booking-backend.git
cd flight-booking-backend
npm install
