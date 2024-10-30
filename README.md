# Inventory Management System

![License](https://img.shields.io/badge/license-MIT-green)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![AWS EC2](https://img.shields.io/badge/AWS-EC2-orange)
![Postgres](https://img.shields.io/badge/Postgres-13-blue)

## Overview

This **Inventory Management System** is a full-stack web application designed to help businesses track and manage their inventory efficiently. Built with **Node.js**, **Postgres**, and **Tailwind CSS**, the system is designed for performance, scalability, and ease of use. Deployed on **AWS**, it leverages services like **EC2** for server hosting, **RDS** for database management, and **S3** for file storage.

## Key Features

- **Real-time Inventory Tracking**: Monitor stock levels and movements across multiple locations.
- **Customizable Product Categories**: Organize products by categories, suppliers, and brands.
- **Role-Based Access Control**: Different roles with specific permissions for administrators, managers, and staff.
- **Analytics & Reporting**: Generate detailed reports for stock trends, sales, and product performance.
- **Cloud Infrastructure**: Deployed on AWS for secure, reliable, and globally accessible data.

## Tech Stack

### Frontend:
- **Tailwind CSS**: A utility-first CSS framework for building responsive user interfaces quickly.

### Backend:
- **Node.js**: A JavaScript runtime for building fast and scalable server-side applications.
- **PostgreSQL**: An advanced, enterprise-grade open-source relational database system.

### Deployment:
- **AWS EC2**: Elastic Compute Cloud (EC2) for scalable virtual servers.
- **AWS RDS**: Relational Database Service (RDS) for managing the PostgreSQL database.
- **AWS S3**: Simple Storage Service (S3) for secure object storage of files and images.

## Architecture

The system uses a microservice architecture to ensure flexibility and easy scaling. Key components include:

- **Backend API**: Handles user authentication, inventory operations, and reporting through RESTful APIs.
- **Postgres Database**: Hosted on AWS RDS, ensuring data reliability and ACID compliance for inventory transactions.
- **File Storage**: Images, documents, and other assets are securely stored and accessed via AWS S3.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- **Node.js** (v16 or higher)
- **PostgreSQL** (v13 or higher)
- **AWS Account**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/promumyhero/InventoTrack.git
2. Navigate to the project directory and install the necessary dependencies:
   ```bash
   cd inventory-management-system
   npm install
3. Set up environment variables in the .env file:
   ```bash
   POSTGRES_USER=your-db-user
   POSTGRES_PASSWORD=your-db-password
   S3_BUCKET=your-s3-bucket-name
4. Run the development server:
   ```bash
   npm run dev

## Deployment

To deploy the application on AWS:

- 1. EC2 Setup: Set up an EC2 instance for the backend using AWS EC2.
- 2. RDS Configuration: Configure RDS with PostgreSQL to host the database.
- 3. S3 Bucket: Create and configure an S3 bucket for file storage.
- 4. Use the AWS CLI or SDK to manage and deploy your application.

## Usage

- **Admin Dashboard**: Manage stock, update inventory, and view reports.
- **Inventory Management**: Add new products, update stock levels, and track movements.
- **Reports**: Generate customized reports based on date ranges or product categories.

## Contributing

We welcome contributions! Please follow these steps:

- 1. Fork the repository.
- 2. Create a new branch (git checkout -b feature-branch).
- 3. Make your changes.
- 4. Commit your changes (git commit -m 'Add new feature').
- 5. Push to the branch (git push origin feature-branch).
- 6. Open a pull request to the main branch.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

### Contact
For any inquiries, feel free to reach out:
- **Ridho Hery Winarto**
- **Email** : ridhoherywinarto@gmail.com
