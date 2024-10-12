# Attendance and Participation Tracking System for SSG

## Objective
Design and implement a web application for the Supreme Student Government (SSG) to manage attendance at events and meetings efficiently. The system generates unique QR codes for each event, allowing students to check in by scanning these codes with any QR code scanner. Each student will also have a personal QR code that verifies their identity. The application provides automatic attendance reports, including the ability to export them as PDF or CSV files, while ensuring offline functionality that syncs data when a connection is restored.

## Features

### Core Features
1. **Event QR Code Generation**  
   Generate unique QR codes for each event or meeting that includes essential details such as event ID, event name, and a timestamp for when the code was created.

2. **Personal QR Code Generation**  
   Generate a unique personal QR code for each student based on their registered information (e.g., student ID, name). This QR code serves as an identity verification method when checking in to events.

3. **QR Code Scanning**  
   Allow students to check in by scanning the event QR code followed by their personal QR code using any QR code scanner (mobile or handheld). This process does not require students to log in to the app, ensuring ease of access.

4. **Attendance Reports**  
   Automatically generate attendance reports based on check-ins. Reports include event details, a list of attendees (identified by their personal QR codes), and their check-in timestamps. The report is exportable in formats like PDF and CSV.

5. **Offline Functionality**  
   Allow students to check in even without an internet connection, storing data locally and syncing it with the server once the connection is restored.

6. **Time-Limited Access**  
   Implement a customizable time limit for attendance. After the specified time for an event has elapsed, students will be unable to check in, automatically marking them as absent.

### Anti-Cheating Measures
1. **Kiosk Scanning**  
   Set up dedicated attendance kiosks or stations where students must scan their personal QR codes. This ensures scanning occurs in a controlled environment, reducing the chances of one student scanning multiple QR codes.

2. **Single Scan Per Student**  
   Limit the scanning of personal QR codes to one scan per event. Once a student's QR code is scanned and marked present, they cannot use it again for that event.

3. **Physical Presence Verification**  
   Require students to be physically present at the event location to scan their QR codes. The system will deny any attempts to mark attendance from outside the event.

4. **Monitoring Attendance Timing**  
   Log the time when each QR code is scanned to ensure that it aligns with the event time. This will help identify any discrepancies, and any scans outside of the allowed time will be flagged.

5. **Notifications to Students**  
   Notify students of the time limits and attendance procedures in advance (e.g., via announcements or the app). Consider sending reminders as the event time approaches to ensure they are aware of when they need to scan.

### Mobile-Friendly
Ensure the system is responsive and optimized for mobile devices to facilitate easy QR code scanning and attendance reporting.

## Tech Stack
- **Frontend:**  
  - Next.js: For server-side rendering and a React-based frontend.  
  - Shadcn UI: For UI components.  
  - Tailwind CSS: For styling.  
  - Framer Motion: For animations.  
  - TypeScript: For type-safe development.  

- **Backend:**  
  - Appwrite: For database management, authentication, and file storage.  
  - Node.js: For server-side logic and handling QR code generation and scanning processes.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/attendance-tracking-ssg.git
   cd attendance-tracking-ssg
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file and add your environment variables, such as:
   ```plaintext
   NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
   NEXT_PUBLIC_APPWRITE_BUCKET_ID=your_bucket_id
   ```

4. Run the application:
   ```bash
   npm run dev
   ```

## Usage
- Navigate to the application in your browser to access the attendance system.
- Generate event QR codes and personal QR codes as needed.
- Students can scan QR codes to check in to events and view their attendance records.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.

## Acknowledgments
- Thanks to the Supreme Student Government (SSG) for the inspiration and support in developing this project.
- Special thanks to the developers and contributors of the libraries and tools used in this project.