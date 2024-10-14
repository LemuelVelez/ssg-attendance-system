# Attendance and Participation Tracking System for SSG

## Overview

This project is a web application designed for the Supreme Student Government (SSG) to efficiently manage attendance at events and meetings. It utilizes unique QR code generation for events and students, enabling a streamlined check-in process and real-time attendance tracking. The system also supports customizable fines for student absences and provides automatic attendance reports. 

The app ensures offline functionality and includes anti-cheating measures to prevent unauthorized check-ins. Additionally, the system is mobile-friendly, making it easy for students and administrators to interact with.

## Features

### 1. Event and Personal QR Code Generation
- **Event QR Code Generation:** Automatically generate QR codes for each event, containing essential details like event ID and timestamp.
- **Personal QR Code Generation:** Each student gets a unique personal QR code to verify their identity for attendance check-ins.

### 2. QR Code Scanning
- Supports check-in through scanning event and personal QR codes with any mobile or handheld QR code scanner.

### 3. Attendance Reports
- Automatically generates attendance reports, including event details, attendees, and timestamps.
- Export attendance data in **PDF** or **CSV** formats.

### 4. Offline Functionality
- Students can check in even without internet access. Data syncs to the server once the connection is restored.

### 5. Anti-Cheating Measures
- **Kiosk Scanning:** Controls are set to prevent multiple scans by the same student in different locations.
- **Time-limited access:** Check-ins can only occur within the pre-defined time window for each event.

### 6. Absence Fines Management
- Admins can set customizable fines for student absences. Fines can vary for different events or students.
- The system tracks and calculates accumulated fines for each student based on their absences.

### 7. Mobile-Friendly
- The system is responsive and optimized for use on mobile devices, ensuring that QR code scanning and attendance tracking can be performed seamlessly on smartphones and tablets.

## Tech Stack

### Frontend
- **Next.js:** For server-side rendering and a React-based frontend.
- **Shadcn UI:** For UI components.
- **Tailwind CSS:** For styling.
- **Framer Motion:** For animations.
- **TypeScript:** For type safety and better development experience.

### Backend
- **Appwrite:** Used for database management, authentication, and file storage.
- **Node.js:** Powers server-side logic, handles QR code generation, scanning processes, and attendance fine tracking.

## Installation and Setup

### Prerequisites
- Node.js (v14 or later)
- NPM or Yarn
- Appwrite Cloud or Self-hosted Appwrite instance

### Steps to Install and Run the Project:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/attendance-ssg.git
   ```

2. Navigate to the project folder:

   ```bash
   cd attendance-ssg
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up Appwrite:
   - Create a project on Appwrite (either self-hosted or cloud version).
   - Configure your database for storing attendance, QR code data, user authentication, and absences.

5. Create a `.env.local` file in the root directory and configure it with the following details:

   ```bash
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
   NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
   NEXT_PUBLIC_APPWRITE_API_KEY=your_appwrite_api_key
   ```

6. Run the application:

   ```bash
   npm run dev
   ```

   The app should now be running on `http://localhost:3000`.

### Deploy to Vercel

1. Push your code to GitHub:

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Connect your GitHub repository to [Vercel](https://vercel.com/).

3. Set the required environment variables in your Vercel project’s settings.

4. Deploy the application from the Vercel dashboard.

## How to Use the Application

### Admin
1. **Login** using admin credentials.
2. **Create Events** with auto-generated QR codes.
3. **Manage Attendance Reports**: View attendance, download reports, and calculate fines for absences.
4. **Set Absence Fines**: Customize fine amounts for each student or event.

### Student
1. **Scan Event QR Code** and **Personal QR Code** at the start of the event.
2. **Check-in** will be processed, and attendance data will sync to the server when online.
3. **View Absence Records** and fines (if applicable).

## Contributing
Feel free to open issues or create pull requests. Contributions are welcome!

## License
This project is licensed under the MIT License.