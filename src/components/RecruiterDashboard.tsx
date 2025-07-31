import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { 
  Plus, 
  Users, 
  Briefcase, 
  TrendingUp, 
  Target,
  Eye,
  Calendar,
  MessageSquare
} from 'lucide-react';

interface RecruiterDashboardProps {
  onNavigate: (page: 'matches') => void;
}

export function RecruiterDashboard({ onNavigate }: RecruiterDashboardProps) {
  const [isCreateJobOpen, setIsCreateJobOpen] = useState(false);
  const [newJob, setNewJob] = useState({
    title: '',
    department: '',
    location: '',
    type: '',
    salary: '',
    description: '',
    requirements: ''
  });

  const activeJobs = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      posted: '3 days ago',
      applicants: 45,
      matches: 12,
      interviews: 3,
      status: 'Active'
    },
    {
      id: '2',
      title: 'Product Manager',
      department: 'Product',
      posted: '1 week ago',
      applicants: 67,
      matches: 8,
      interviews: 5,
      status: 'Active'
    },
    {
      id: '3',
      title: 'UX Designer',
      department: 'Design',
      posted: '2 weeks ago',
      applicants: 32,
      matches: 15,
      interviews: 2,
      status: 'Paused'
    }
  ];

  const topCandidates = [
    {
      name: 'Alex Johnson',
      role: 'Senior Frontend Developer',
      matchScore: 95,
      experience: '6 years',
      skills: ['React', 'TypeScript', 'Node.js'],
      status: 'Available'
    },
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      matchScore: 92,
      experience: '5 years',
      skills: ['Product Strategy', 'Analytics', 'Agile'],
      status: 'Available'
    },
    {
      name: 'Mike Rodriguez',
      role: 'UX Designer',
      matchScore: 88,
      experience: '4 years',
      skills: ['Figma', 'User Research', 'Prototyping'],
      status: 'Interviewing'
    }
  ];

  const recentActivity = [
    {
      type: 'application',
      message: 'New application for Senior Frontend Developer',
      time: '2 hours ago'
    },
    {
      type: 'match',
      message: 'High-quality match found for Product Manager role',
      time: '4 hours ago'
    },
    {
      type: 'interview',
      message: 'Interview scheduled with Alex Johnson',
      time: '1 day ago'
    },
    {
      type: 'application',
      message: 'Application received for UX Designer position',
      time: '2 days ago'
    }
  ];

  const handleCreateJob = () => {
    // Mock job creation
    console.log('Creating job:', newJob);
    setIsCreateJobOpen(false);
    setNewJob({
      title: '',
      department: '',
      location: '',
      type: '',
      salary: '',
      description: '',
      requirements: ''
    });
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl mb-2">Recruiter Dashboard</h1>
            <p className="text-muted-foreground">Manage your job postings and find top talent.</p>
          </div>
          <Dialog open={isCreateJobOpen} onOpenChange={setIsCreateJobOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Post New Job
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Job Posting</DialogTitle>
                <DialogDescription>
                  Fill in the details for your new job posting. Our AI will help match the best candidates.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title</Label>
                    <Input
                      id="title"
                      value={newJob.title}
                      onChange={(e) => setNewJob({...newJob, title: e.target.value})}
                      placeholder="e.g. Senior Frontend Developer"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select onValueChange={(value) => setNewJob({...newJob, department: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="product">Product</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={newJob.location}
                      onChange={(e) => setNewJob({...newJob, location: e.target.value})}
                      placeholder="e.g. San Francisco, CA or Remote"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Job Type</Label>
                    <Select onValueChange={(value) => setNewJob({...newJob, type: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fulltime">Full-time</SelectItem>
                        <SelectItem value="parttime">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary">Salary Range</Label>
                  <Input
                    id="salary"
                    value={newJob.salary}
                    onChange={(e) => setNewJob({...newJob, salary: e.target.value})}
                    placeholder="e.g. $120,000 - $150,000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Job Description</Label>
                  <Textarea
                    id="description"
                    value={newJob.description}
                    onChange={(e) => setNewJob({...newJob, description: e.target.value})}
                    placeholder="Describe the role, responsibilities, and what makes this position exciting..."
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements</Label>
                  <Textarea
                    id="requirements"
                    value={newJob.requirements}
                    onChange={(e) => setNewJob({...newJob, requirements: e.target.value})}
                    placeholder="List required skills, experience, education, etc. (one per line)"
                    rows={3}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setIsCreateJobOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateJob}>
                  Create Job Posting
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Active Jobs</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">{activeJobs.filter(job => job.status === 'Active').length}</div>
              <p className="text-xs text-muted-foreground">
                +2 from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Total Applicants</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">{activeJobs.reduce((sum, job) => sum + job.applicants, 0)}</div>
              <p className="text-xs text-muted-foreground">
                +12% from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Quality Matches</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">{activeJobs.reduce((sum, job) => sum + job.matches, 0)}</div>
              <p className="text-xs text-muted-foreground">
                85% match rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Interviews</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">{activeJobs.reduce((sum, job) => sum + job.interviews, 0)}</div>
              <p className="text-xs text-muted-foreground">
                8 scheduled this week
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="jobs" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="jobs">Active Jobs</TabsTrigger>
                <TabsTrigger value="candidates">Top Candidates</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              {/* Active Jobs */}
              <TabsContent value="jobs" className="space-y-4">
                {activeJobs.map((job) => (
                  <Card key={job.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{job.title}</CardTitle>
                          <CardDescription>{job.department} • Posted {job.posted}</CardDescription>
                        </div>
                        <Badge variant={job.status === 'Active' ? 'default' : 'secondary'}>
                          {job.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl">{job.applicants}</div>
                          <div className="text-sm text-muted-foreground">Applicants</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl">{job.matches}</div>
                          <div className="text-sm text-muted-foreground">Matches</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl">{job.interviews}</div>
                          <div className="text-sm text-muted-foreground">Interviews</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">View Applications</Button>
                        <Button size="sm" variant="outline" onClick={() => onNavigate('matches')}>
                          View Matches
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Eye className="h-4 w-4 mr-1" />
                          Preview
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Top Candidates */}
              <TabsContent value="candidates" className="space-y-4">
                {topCandidates.map((candidate, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{candidate.name}</CardTitle>
                          <CardDescription>{candidate.role} • {candidate.experience} experience</CardDescription>
                        </div>
                        <div className="text-right">
                          <Badge variant="default" className="mb-2">
                            {candidate.matchScore}% Match
                          </Badge>
                          <div>
                            <Badge variant={candidate.status === 'Available' ? 'default' : 'secondary'}>
                              {candidate.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="text-sm font-medium mb-2">Skills:</div>
                        <div className="flex flex-wrap gap-2">
                          {candidate.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">View Profile</Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Contact
                        </Button>
                        <Button size="sm" variant="ghost">Save</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Analytics */}
              <TabsContent value="analytics">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Recruitment Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-3">Performance Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm">Time to Fill</span>
                              <span className="text-sm font-medium">28 days avg</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Application Rate</span>
                              <span className="text-sm font-medium">23% increase</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Interview-to-Hire Ratio</span>
                              <span className="text-sm font-medium">3:1</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm">Source Quality</span>
                              <span className="text-sm font-medium">TalentMatch: 89%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Candidate Satisfaction</span>
                              <span className="text-sm font-medium">4.7/5</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Offer Acceptance Rate</span>
                              <span className="text-sm font-medium">78%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        View Detailed Analytics
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm">{activity.message}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" onClick={() => setIsCreateJobOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Post New Job
                </Button>
                <Button variant="outline" className="w-full" onClick={() => onNavigate('matches')}>
                  <Target className="h-4 w-4 mr-2" />
                  View All Matches
                </Button>
                <Button variant="outline" className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  Search Candidates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}