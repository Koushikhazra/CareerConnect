import Link from "next/link";
import { ArrowRight, Briefcase, Users, TrendingUp, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-custom rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-warm rounded-full mix-blend-multiply filter blur-3xl animation-delay-2000" />
        </div>

        <div className="section-container relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary-100 rounded-full mb-6">
              <Zap size={18} className="text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">
                Find Your Dream Career Today
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Unlock Your{" "}
              <span className="gradient-text">Future</span> with
              <br />
              <span className="bg-gradient-to-r from-secondary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent">
                Perfect Opportunities
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Connect with top companies and unlock incredible job opportunities.
              Whether you&apos;re starting your journey or looking for growth,
              we&apos;ve got the perfect match for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/jobs"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all font-bold text-lg"
              >
                Explore Opportunities
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl hover:bg-primary-50 transition-all font-bold text-lg"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-black mb-3">5000+</div>
              <p className="text-lg opacity-90">Active Job Listings</p>
            </div>
            <div className="text-center border-l border-r border-white/20">
              <div className="text-5xl font-black mb-3">10000+</div>
              <p className="text-lg opacity-90">Successful Placements</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-3">500+</div>
              <p className="text-lg opacity-90">Verified Companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Why Choose JobPortal?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re committed to making job search simple, efficient, and
              rewarding for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Curated Opportunities",
                description:
                  "Access carefully selected job listings from top companies across industries.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Users,
                title: "Smart Matching",
                description:
                  "Our algorithms match your skills and preferences with the perfect opportunities.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: TrendingUp,
                title: "Career Growth",
                description:
                  "Track your applications and get insights to improve your career prospects.",
                gradient: "from-orange-500 to-red-500",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group card hover:shadow-glow border-0"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                <span className="gradient-text">Trusted by</span> Students & Companies Worldwide
              </h2>
              <ul className="space-y-4">
                {[
                  "Secure and verified job listings",
                  "Protected user data with encryption",
                  "24/7 customer support",
                  "Transparent salary information",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold">
                      ✓
                    </div>
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-12 border-2 border-primary-100">
              <Shield size={48} className="text-primary-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Your Safety is Our Priority
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every job listing is verified and every company profile is validated.
                Your personal information is encrypted and never shared without consent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-vibrant opacity-20" />
        <div className="section-container relative">
          <div className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Join thousands of professionals who have found their dream jobs through
                JobPortal. Your next opportunity is just one click away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="inline-block bg-white text-primary-600 px-8 py-3 rounded-xl hover:bg-gray-100 transition-all font-bold text-lg"
                >
                  Get Started Now
                </Link>
                <Link
                  href="/jobs"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white/10 transition-all font-bold text-lg"
                >
                  Browse Opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
