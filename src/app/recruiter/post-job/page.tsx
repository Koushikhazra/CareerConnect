"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { AlertCircle } from "lucide-react";

export default function PostJobPage() {
  const { data: session, status } = useSession();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("/api/jobs", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || "Failed to post job");
        return;
      }

      // Success - redirect to jobs list
      window.location.href = "/recruiter/jobs";
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="section-container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Post a New Job</h1>
        <p className="text-gray-600 mb-8">
          Fill in the details below to create a job listing
        </p>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
            <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
            <p className="text-red-800">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="card space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Title
              </label>
              <input
                type="text"
                name="title"
                className="input-field"
                placeholder="e.g., Senior Software Engineer"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Type
              </label>
              <select name="jobType" className="input-field" required>
                <option value="">Select job type</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="internship">Internship</option>
                <option value="contract">Contract</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Work Mode
              </label>
              <select name="workMode" className="input-field" required>
                <option value="">Select work mode</option>
                <option value="remote">Remote</option>
                <option value="onsite">On-site</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                className="input-field"
                placeholder="e.g., San Francisco, CA"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Salary (Min)
              </label>
              <input
                type="number"
                name="salaryMin"
                className="input-field"
                placeholder="100000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Salary (Max)
              </label>
              <input
                type="number"
                name="salaryMax"
                className="input-field"
                placeholder="150000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Description
            </label>
            <textarea
              name="description"
              className="input-field"
              rows={6}
              placeholder="Describe the role, responsibilities, and what success looks like..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Required Skills (comma-separated)
            </label>
            <input
              type="text"
              name="skills"
              className="input-field"
              placeholder="e.g., React, Node.js, TypeScript, PostgreSQL"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Closing Date
            </label>
            <input
              type="date"
              name="closingDate"
              className="input-field"
              required
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-medium disabled:opacity-50"
            >
              {isLoading ? "Publishing..." : "Publish Job"}
            </button>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-200 transition font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
