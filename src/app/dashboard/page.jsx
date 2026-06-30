"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { FileText, Briefcase, Heart, Clock } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!session) {
    redirect("/login");
  }

  const isStudent = session.user?.role === "STUDENT";

  return (
    <div className="section-container py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Welcome back, {session.user?.name}!
        </h1>
        <p className="text-gray-600">
          {isStudent
            ? "Track your applications and explore new opportunities"
            : "Manage your job postings and applications"}
        </p>
      </div>

      {isStudent ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Briefcase, label: "Applications", count: "12", color: "blue" },
            { icon: Heart, label: "Saved Jobs", count: "8", color: "red" },
            { icon: Clock, label: "In Progress", count: "3", color: "yellow" },
            { icon: FileText, label: "My Resume", count: "1", color: "green" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            const colorMap = {
              blue: "bg-blue-50 text-blue-600",
              red: "bg-red-50 text-red-600",
              yellow: "bg-yellow-50 text-yellow-600",
              green: "bg-green-50 text-green-600",
            };
            return (
              <div key={index} className="card">
                <div className={`w-12 h-12 rounded-lg ${colorMap[stat.color]} flex items-center justify-center mb-4`}>
                  <Icon size={24} />
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.count}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Briefcase, label: "Active Jobs", count: "5", color: "blue" },
            { icon: FileText, label: "Applications", count: "24", color: "purple" },
            { icon: Heart, label: "Shortlisted", count: "8", color: "green" },
            { icon: Clock, label: "This Month", count: "3", color: "orange" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            const colorMap = {
              blue: "bg-blue-50 text-blue-600",
              purple: "bg-purple-50 text-purple-600",
              green: "bg-green-50 text-green-600",
              orange: "bg-orange-50 text-orange-600",
            };
            return (
              <div key={index} className="card">
                <div className={`w-12 h-12 rounded-lg ${colorMap[stat.color]} flex items-center justify-center mb-4`}>
                  <Icon size={24} />
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.count}</p>
              </div>
            );
          })}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <p className="text-gray-600 text-sm">
              {isStudent
                ? "You applied for Software Engineer at Tech Corp 2 days ago"
                : "You received 5 new applications for Senior Developer"}
            </p>
          </div>
        </div>

        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            {isStudent ? (
              <>
                <Link href="/jobs" className="block w-full text-center bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition">
                  Browse Jobs
                </Link>
                <Link href="/profile" className="block w-full text-center bg-gray-100 text-gray-900 py-2 rounded-lg hover:bg-gray-200 transition">
                  Update Profile
                </Link>
              </>
            ) : (
              <>
                <Link href="/recruiter/post-job" className="block w-full text-center bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition">
                  Post New Job
                </Link>
                <Link href="/recruiter/applications" className="block w-full text-center bg-gray-100 text-gray-900 py-2 rounded-lg hover:bg-gray-200 transition">
                  View Applications
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
