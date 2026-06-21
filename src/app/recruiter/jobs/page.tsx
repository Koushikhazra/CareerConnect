"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function RecruiterJobsPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!session || session.user?.role !== "RECRUITER") {
    redirect("/login");
  }

  return (
    <div className="section-container py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Job Postings</h1>
          <p className="text-gray-600">Manage and track your active job listings</p>
        </div>
        <Link
          href="/recruiter/post-job"
          className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-medium"
        >
          <Plus size={20} />
          Post New Job
        </Link>
      </div>

      {/* Empty State */}
      <div className="card text-center py-12">
        <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Plus className="text-gray-600" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          No jobs posted yet
        </h2>
        <p className="text-gray-600 mb-6">
          Create your first job posting to start receiving applications
        </p>
        <Link
          href="/recruiter/post-job"
          className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
        >
          Post a Job Now
        </Link>
      </div>
    </div>
  );
}
