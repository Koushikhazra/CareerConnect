"use client";

import { Bookmark, MapPin, Briefcase, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function JobCard({
  id,
  title,
  companyName,
  location,
  salary,
  jobType,
  workMode,
  skills,
  description,
  saved = false,
}) {
  const [isSaved, setIsSaved] = useState(saved);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-hover transition-all duration-300 hover:border-primary-200">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition">
            <Link href={`/jobs/${id}`}>{title}</Link>
          </h3>
          <p className="text-sm text-gray-600 mt-1">{companyName}</p>
        </div>
        <button
          onClick={() => setIsSaved(!isSaved)}
          className={`p-2 rounded-lg transition ${
            isSaved
              ? "bg-primary-100 text-primary-600"
              : "bg-gray-100 text-gray-600 hover:text-primary-600"
          }`}
        >
          <Bookmark size={20} fill={isSaved ? "currentColor" : "none"} />
        </button>
      </div>

      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
          <MapPin size={14} /> {location}
        </span>
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">
          <Briefcase size={14} /> {jobType}
        </span>
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
          <TrendingUp size={14} /> {workMode}
        </span>
      </div>

      {salary && <p className="text-sm font-semibold text-gray-900 mb-4">{salary}</p>}

      <div className="mb-4">
        <p className="text-xs text-gray-600 font-medium mb-2">Key Skills</p>
        <div className="flex flex-wrap gap-1">
          {skills.slice(0, 3).map((skill) => (
            <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
              {skill}
            </span>
          ))}
          {skills.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
              +{skills.length - 3} more
            </span>
          )}
        </div>
      </div>

      <Link
        href={`/jobs/${id}`}
        className="block w-full text-center bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition font-medium text-sm"
      >
        View Details
      </Link>
    </div>
  );
}
