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
   git clone https://github.com/your-username/inventory-management-system.git
