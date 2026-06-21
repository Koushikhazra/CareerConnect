# JobPortal - Full-Stack Job Application Platform

A modern, full-featured job application platform built with Next.js, PostgreSQL, and Auth.js. Inspired by leading job portals like Unstop and Internshala, with beautiful UI design and seamless user experience.

## 🎯 Features

### For Job Seekers (Students)
- **Browse & Search**: Explore thousands of job listings with advanced filters
- **Smart Applications**: Apply to jobs and track application status
- **Saved Jobs**: Save jobs for later and get notifications
- **Resume Management**: Upload and manage your resume
- **Application Tracking**: Track all your applications in one dashboard
- **Profile Management**: Build a comprehensive professional profile

### For Recruiters
- **Job Posting**: Easily create and publish job listings
- **Application Management**: Review and manage all incoming applications
- **Candidate Screening**: Shortlist or reject candidates with detailed notes
- **Dashboard Analytics**: View stats on job postings and applications
- **Company Profile**: Showcase your company to job seekers

### For Admins
- **User Management**: Manage all users and their roles
- **Content Moderation**: Review and moderate job postings
- **Analytics & Reports**: Platform-wide statistics and insights

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Auth.js (NextAuth.js)
- **UI Components**: Tailwind CSS, Lucide React Icons
- **Validation**: Zod, React Hook Form
- **Notifications**: React Hot Toast

## 📋 Prerequisites

- Node.js 18+ or higher
- PostgreSQL 12+ (local or cloud-hosted)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
```bash
cd job-portal
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Database setup**
```bash
# Push Prisma schema to database
npm run db:push

# Or run migrations
npm run db:migrate
```

5. **Generate Prisma Client**
```bash
npm run prisma:generate
```

## 🎮 Running the Application

### Development Mode
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

## 📁 Project Structure

```
job-portal/
├── src/
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   ├── auth/         # Authentication endpoints
│   │   │   └── jobs/         # Job-related endpoints
│   │   ├── login/            # Login page
│   │   ├── signup/           # Signup page
│   │   ├── jobs/             # Jobs listing page
│   │   ├── dashboard/        # Dashboard
│   │   ├── recruiter/        # Recruiter pages
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   ├── components/           # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── JobCard.tsx
│   ├── lib/                  # Library functions
│   │   ├── auth.ts           # Auth configuration
│   │   ├── auth.config.ts    # Auth config
│   │   └── prisma.ts         # Prisma client
│   └── utils/                # Utility functions
├── prisma/
│   └── schema.prisma         # Database schema
├── .env.example              # Environment variables template
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🗄️ Database Schema

The platform includes the following main entities:

- **User**: Core user model with role-based access
- **Student**: Student/Job seeker profile with resume
- **Recruiter**: Company recruiter profile
- **Job**: Job listings with requirements and details
- **Application**: Job applications with status tracking
- **SavedJob**: Bookmarked jobs by students

## 🔐 Authentication

The application uses Auth.js with:
- **Credentials Provider**: Email and password authentication
- **JWT Sessions**: Secure token-based sessions
- **Role-Based Access**: STUDENT, RECRUITER, ADMIN roles

### Demo Credentials
```
Email: student@example.com
Password: password123

Email: recruiter@example.com
Password: password123
```

## 🎨 Design Features

- **Modern UI**: Clean, professional design inspired by Unstop and Internshala
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop
- **Beautiful Components**: Custom-designed cards, modals, and forms
- **Smooth Animations**: Subtle transitions and hover effects
- **Color Scheme**: Professional color palette with primary and accent colors
- **Icons**: Comprehensive icon set from Lucide React

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/signin` - Sign in user
- `POST /api/auth/signout` - Sign out user

### Jobs
- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/:id` - Get job details
- `POST /api/jobs` - Create job (Recruiter only)
- `PUT /api/jobs/:id` - Update job (Recruiter only)
- `DELETE /api/jobs/:id` - Delete job (Recruiter only)

### Applications
- `POST /api/applications` - Apply for job
- `GET /api/applications` - Get user applications
- `PUT /api/applications/:id` - Update application status

## 🚦 Status Tracking

### Application Status
- PENDING: Initial state
- SHORTLISTED: Moved forward by recruiter
- REJECTED: Not selected
- ACCEPTED: Offer extended
- WITHDRAWN: Withdrawn by student

### Job Status
- DRAFT: Not published
- PUBLISHED: Active and visible
- CLOSED: No longer accepting
- ARCHIVED: Old posting

## 📱 Key Pages

1. **Home** (`/`): Landing page with features and CTA
2. **Login** (`/login`): User authentication
3. **Signup** (`/signup`): New account creation
4. **Browse Jobs** (`/jobs`): Job listings with filters
5. **Dashboard** (`/dashboard`): User-specific dashboard
6. **Recruiter** (`/recruiter`): Recruiter-specific pages
7. **Job Details** (`/jobs/:id`): Individual job details

## 🔄 Development Workflow

1. Create a feature branch
2. Make changes and test locally
3. Run linting: `npm run lint`
4. Commit changes with clear messages
5. Push and create a pull request

## 📦 Building for Production

```bash
npm run build
npm start
```

The optimized build will be available in the `.next` directory.

## 🆘 Troubleshooting

### Database Connection Issues
- Check DATABASE_URL in .env
- Ensure PostgreSQL is running
- Verify credentials are correct

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `npm install`
- Regenerate Prisma: `npm run prisma:generate`

### Authentication Issues
- Check NEXTAUTH_SECRET is set
- Verify NEXTAUTH_URL matches your domain
- Clear browser cookies

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or questions, please create an issue in the repository or contact support@jobportal.com

---

Built with ❤️ using Next.js, React, and TypeScript
