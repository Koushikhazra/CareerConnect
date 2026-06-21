"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { Menu, X, LogOut, Sparkles } from "lucide-react";

export function Header() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-white via-white to-blue-50 border-b border-gray-100 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center text-white font-black text-lg">
              JP
            </div>
            <span className="font-black text-lg bg-gradient-to-r from-primary-700 to-secondary-600 bg-clip-text text-transparent">
              JobPortal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {session ? (
              <>
                <Link
                  href="/jobs"
                  className="text-gray-700 hover:text-primary-600 font-medium transition"
                >
                  Browse Jobs
                </Link>
                {session.user?.role === "RECRUITER" && (
                  <Link
                    href="/recruiter/jobs"
                    className="text-gray-700 hover:text-primary-600 font-medium transition"
                  >
                    My Jobs
                  </Link>
                )}
                <Link
                  href="/dashboard"
                  className="text-gray-700 hover:text-primary-600 font-medium transition"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="flex items-center gap-2 text-gray-700 hover:text-red-600 font-medium transition"
                >
                  <LogOut size={18} />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-primary-600 font-medium transition"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition font-semibold flex items-center gap-2"
                >
                  <Sparkles size={16} />
                  Sign Up
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4 border-t border-gray-100 pt-4">
            {session ? (
              <>
                <Link href="/jobs" className="text-gray-700 hover:text-primary-600 font-medium">
                  Browse Jobs
                </Link>
                {session.user?.role === "RECRUITER" && (
                  <Link href="/recruiter/jobs" className="text-gray-700 hover:text-primary-600 font-medium">
                    My Jobs
                  </Link>
                )}
                <Link href="/dashboard" className="text-gray-700 hover:text-primary-600 font-medium">
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="text-left text-gray-700 hover:text-red-600 font-medium"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-700 hover:text-primary-600 font-medium">
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-lg inline-block font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
