import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  User, 
  FileText, 
  Star, 
  TrendingUp, 
  Briefcase, 
  GraduationCap,
  Plus,
  Edit,
  Target
} from 'lucide-react';

interface CandidateDashboardProps {
  onNavigate: (page: 'matches' | 'jobs') => void;
}

export function CandidateDashboard({ onNavigate }: CandidateDashboardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    title: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    bio: 'Passionate frontend developer with 6 years of experience building scalable web applications. Love working with React, TypeScript, and modern web technologies.',
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'GraphQL'],
    experience: [
      {
        role: 'Senior Frontend Developer',
        company: 'TechStart Inc.',
        duration: '2022 - Present',
        description: 'Lead frontend development for multiple products, mentored junior developers.'
      },
      {
        role: 'Frontend Developer',
        company: 'WebSolutions',
        duration: '2020 - 2022',
        description: 'Built responsive web applications using React and modern CSS frameworks.'
      }
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of California, Berkeley',
        year: '2018'
      }
    ]
  });

  const matchedJobs = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      matchScore: 95,
      salary: '$120,000 - $150,000',
      location: 'San Francisco, CA'
    },
    {
      title: 'Lead React Developer',
      company: 'InnovateTech',
      matchScore: 88,
      salary: '$130,000 - $160,000',
      location: 'Remote'
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      matchScore: 82,
      salary: '$110,000 - $140,000',
      location: 'New York, NY'
    }
  ];

  const applications = [
    {
      jobTitle: 'Senior Frontend Developer',
      company: 'TechCorp',
      status: 'Interview Scheduled',
      appliedDate: '2 days ago',
      statusColor: 'bg-blue-500'
    },
    {
      jobTitle: 'React Developer',
      company: 'WebFlow',
      status: 'Under Review',
      appliedDate: '5 days ago',
      statusColor: 'bg-yellow-500'
    },
    {
      jobTitle: 'Frontend Engineer',
      company: 'CloudFirst',
      status: 'Application Sent',
      appliedDate: '1 week ago',
      statusColor: 'bg-green-500'
    }
  ];

  const profileCompleteness = 85;

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Welcome back, {profile.name}!</h1>
          <p className="text-muted-foreground">Manage your profile and track your job applications.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Profile Completion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Progress value={profileCompleteness} className="w-full" />
                  <p className="text-sm text-muted-foreground">
                    {profileCompleteness}% complete
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    Complete Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Profile Views</span>
                  <span className="font-semibold">47</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Job Matches</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Applications</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Interviews</span>
                  <span className="font-semibold">3</span>
                </div>
              </CardContent>
            </Card>

            {/* Top Matches */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Top Matches
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {matchedJobs.slice(0, 3).map((job, index) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">{job.title}</h4>
                      <Badge variant={job.matchScore >= 90 ? 'default' : 'secondary'}>
                        {job.matchScore}%
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                  </div>
                ))}
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => onNavigate('matches')}
                >
                  View All Matches
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5" />
                        Profile Information
                      </CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        {isEditing ? 'Save' : 'Edit'}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {isEditing ? (
                      <>
                        <Input 
                          value={profile.name}
                          onChange={(e) => setProfile({...profile, name: e.target.value})}
                          placeholder="Full Name"
                        />
                        <Input 
                          value={profile.title}
                          onChange={(e) => setProfile({...profile, title: e.target.value})}
                          placeholder="Professional Title"
                        />
                        <Input 
                          value={profile.location}
                          onChange={(e) => setProfile({...profile, location: e.target.value})}
                          placeholder="Location"
                        />
                        <Textarea 
                          value={profile.bio}
                          onChange={(e) => setProfile({...profile, bio: e.target.value})}
                          placeholder="Professional Bio"
                          rows={4}
                        />
                      </>
                    ) : (
                      <>
                        <div>
                          <h3 className="text-lg">{profile.name}</h3>
                          <p className="text-muted-foreground">{profile.title}</p>
                          <p className="text-muted-foreground">{profile.location}</p>
                        </div>
                        <p>{profile.bio}</p>
                      </>
                    )}
                  </CardContent>
                </Card>

                {/* Skills */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                      {isEditing && (
                        <Button variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-1" />
                          Add Skill
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Experience */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {profile.experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-4">
                        <h4 className="font-medium">{exp.role}</h4>
                        <p className="text-sm text-muted-foreground">{exp.company} • {exp.duration}</p>
                        <p className="text-sm mt-1">{exp.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Applications Tab */}
              <TabsContent value="applications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      My Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {applications.map((app, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-medium">{app.jobTitle}</h4>
                            <p className="text-sm text-muted-foreground">{app.company}</p>
                            <p className="text-sm text-muted-foreground">Applied {app.appliedDate}</p>
                          </div>
                          <Badge variant="secondary">
                            {app.status}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">View Details</Button>
                          <Button size="sm" variant="ghost">Withdraw</Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Recommendations Tab */}
              <TabsContent value="recommendations" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recommended for You</CardTitle>
                    <CardDescription>
                      Based on your profile and preferences, here are some opportunities we think you'd love.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      className="w-full" 
                      onClick={() => onNavigate('jobs')}
                    >
                      Browse All Job Recommendations
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => onNavigate('matches')}
                    >
                      View Match Analytics
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}