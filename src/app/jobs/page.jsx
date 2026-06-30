"use client";

import { useEffect, useState } from "react";
import { JobCard } from "@/components/JobCard";
import { Search, Filter, MapPin, Briefcase } from "lucide-react";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    setJobs([]);
  }, [searchTerm, selectedLocation, selectedJobType]);

  return (
    <div>
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="section-container py-6">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by job title or company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
                <Filter size={20} />
                Filters
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                <MapPin size={18} className="text-gray-600" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="bg-transparent outline-none text-sm"
                >
                  <option value="">All Locations</option>
                  <option value="remote">Remote</option>
                  <option value="new-york">New York</option>
                  <option value="san-francisco">San Francisco</option>
                  <option value="london">London</option>
                </select>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                <Briefcase size={18} className="text-gray-600" />
                <select
                  value={selectedJobType}
                  onChange={(e) => setSelectedJobType(e.target.value)}
                  className="bg-transparent outline-none text-sm"
                >
                  <option value="">All Types</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="internship">Internship</option>
                  <option value="contract">Contract</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container py-12">
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading jobs...</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="text-gray-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No jobs found</h2>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {jobs.map((job) => (
                  <JobCard
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    companyName={job.recruiter.companyName}
                    location={job.location}
                    salary={job.salary}
                    jobType={job.jobType}
                    workMode={job.workMode}
                    skills={job.skills}
                    description={job.description}
                  />
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="card sticky top-32">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Tips</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>✓ Use specific keywords to find relevant jobs</li>
                  <li>✓ Filter by location and job type</li>
                  <li>✓ Save jobs for later review</li>
                  <li>✓ Upload an updated resume to your profile</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
