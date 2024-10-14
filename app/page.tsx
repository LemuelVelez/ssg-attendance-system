"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineClipboardList, HiLockClosed } from "react-icons/hi";
import { FaUserCheck } from "react-icons/fa";
import { MdOfflineBolt, MdCheckCircle } from "react-icons/md"; // Importing relevant icons
import Button from "@/components/ui/button"; // Ensure correct import for Button
import Card from "@/components/ui/card"; // Ensure correct import for Card

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-gray-200 overflow-hidden">
      {/* Main Content Section */}
      <section className="flex flex-1 items-center justify-center">
        <Card className="max-w-xl p-6 space-y-6 bg-gray-900 rounded-lg shadow-lg w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10">
          {/* Centered Logo Section */}
          <div className="flex justify-center mb-4">
            <div className="relative w-24 h-24 overflow-hidden rounded-full">
              <Image
                src="icons/logo.svg" // Keeping the original logo path
                height={300} // Adjust height as necessary
                width={300} // Adjust width as necessary
                alt="SSG Attendance System Logo"
                className="object-cover" // Ensures the image covers the circle
              />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center sm:text-4xl md:text-5xl">
            Welcome to the SSG Attendance System
          </h1>
          <p className="text-center text-base sm:text-lg md:text-xl">
            Manage attendance at events and meetings efficiently with our unique
            QR code system.
          </p>

          {/* Features Section */}
          <div className="grid grid-cols-1 gap-6 mt-6">
            {[
              {
                icon: (
                  <HiOutlineClipboardList
                    className="text-blue-400 mr-3"
                    size={24}
                  />
                ),
                text: "Generate Event QR Codes for easy check-ins.",
              },
              {
                icon: <FaUserCheck className="text-blue-400 mr-3" size={24} />,
                text: "Verify students with personal QR codes.",
              },
              {
                icon: (
                  <MdOfflineBolt className="text-blue-400 mr-3" size={24} />
                ),
                text: "Check-in offline and sync when online.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center p-4 border border-gray-600 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {feature.icon}
                <span className="text-sm sm:text-base">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Start Check-In Button */}
          <div className="flex justify-center mt-6">
            <Button>
              <Link
                href="/checkin"
                className="flex items-center w-full justify-center"
              >
                <MdCheckCircle className="text-blue-400 mr-2" size={24} />
                Start Check-In
              </Link>
            </Button>
          </div>

          {/* Admin Sign In Link */}
          <div className="flex justify-center mt-4">
            <Link
              href="/admin/signin"
              className="flex items-center text-white underline"
            >
              <HiLockClosed className="text-blue-400 mr-2" size={24} />
              Admin Sign In
            </Link>
          </div>

          {/* Copyright Section */}
          <div className="text-center mt-6">
            <p className="text-sm sm:text-base">© 2024 SSG Attendance System</p>
            <p className="text-sm sm:text-base">JESUS BE THE GLORY!</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
