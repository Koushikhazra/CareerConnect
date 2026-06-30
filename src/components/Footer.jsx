"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center text-white font-bold">
                JP
              </div>
              <span className="font-bold text-lg text-white">JobPortal</span>
            </div>
            <p className="text-sm text-gray-400">
              Connecting talented professionals with amazing opportunities.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">For Job Seekers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/jobs" className="hover:text-primary-400 transition">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-primary-400 transition">
                  Create Profile
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-400 transition">
                  Career Tips
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">For Recruiters</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/recruiter/signup" className="hover:text-primary-400 transition">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/recruiter/dashboard" className="hover:text-primary-400 transition">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-400 transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@jobportal.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Tech Street, San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; 2024 JobPortal. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <Link href="#" className="hover:text-primary-400 transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary-400 transition">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary-400 transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
