import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Search, MapPin, Clock, DollarSign, Building, Users } from 'lucide-react';

interface JobListingsProps {
  onNavigate: (page: 'home' | 'matches') => void;
}

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  postedDays: number;
  applicants: number;
  tags: string[];
}

export function JobListings({ onNavigate }: JobListingsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [jobTypeFilter, setJobTypeFilter] = useState('all');

  const mockJobs: Job[] = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $150,000',
      description: 'We are looking for a passionate Senior Frontend Developer to join our growing team. You will be responsible for building the next generation of our web applications using modern technologies.',
      requirements: ['React', 'TypeScript', 'Node.js', '5+ years experience'],
      postedDays: 2,
      applicants: 45,
      tags: ['React', 'TypeScript', 'Remote OK']
    },
    {
      id: '2',
      title: 'Product Manager',
      company: 'StartupXYZ',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$110,000 - $140,000',
      description: 'Join our product team to drive strategy and execution for our flagship products. Work closely with engineering, design, and business teams.',
      requirements: ['Product Management', 'Agile', 'Analytics', '3+ years experience'],
      postedDays: 1,
      applicants: 67,
      tags: ['Product', 'Strategy', 'Analytics']
    },
    {
      id: '3',
      title: 'UX Designer',
      company: 'DesignStudio',
      location: 'Remote',
      type: 'Contract',
      salary: '$80,000 - $100,000',
      description: 'Create exceptional user experiences for our diverse portfolio of clients. Lead design thinking workshops and collaborate with cross-functional teams.',
      requirements: ['Figma', 'User Research', 'Prototyping', '4+ years experience'],
      postedDays: 3,
      applicants: 32,
      tags: ['Design', 'Figma', 'Remote']
    },
    {
      id: '4',
      title: 'Data Scientist',
      company: 'DataCorp',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$130,000 - $160,000',
      description: 'Leverage machine learning and statistical analysis to derive insights from large datasets. Build predictive models and work with stakeholders.',
      requirements: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
      postedDays: 5,
      applicants: 89,
      tags: ['Python', 'ML', 'Analytics']
    },
    {
      id: '5',
      title: 'DevOps Engineer',
      company: 'CloudFirst',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$115,000 - $145,000',
      description: 'Build and maintain our cloud infrastructure. Implement CI/CD pipelines and ensure high availability of our services.',
      requirements: ['AWS', 'Kubernetes', 'Docker', 'CI/CD'],
      postedDays: 4,
      applicants: 23,
      tags: ['AWS', 'DevOps', 'Kubernetes']
    },
    {
      id: '6',
      title: 'Marketing Manager',
      company: 'GrowthCo',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$85,000 - $110,000',
      description: 'Lead our marketing initiatives across digital channels. Develop campaign strategies and analyze performance metrics.',
      requirements: ['Digital Marketing', 'Analytics', 'Campaign Management', '3+ years experience'],
      postedDays: 1,
      applicants: 76,
      tags: ['Marketing', 'Digital', 'Analytics']
    }
  ];

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLocation = locationFilter === 'all' || 
                         (locationFilter === 'remote' && job.location.toLowerCase().includes('remote')) ||
                         (locationFilter === 'sanfrancisco' && job.location.toLowerCase().includes('san francisco')) ||
                         (locationFilter === 'newyork' && job.location.toLowerCase().includes('new york')) ||
                         (locationFilter === 'austin' && job.location.toLowerCase().includes('austin')) ||
                         (locationFilter === 'seattle' && job.location.toLowerCase().includes('seattle')) ||
                         (locationFilter === 'losangeles' && job.location.toLowerCase().includes('los angeles'));
    const matchesType = jobTypeFilter === 'all' || 
                       (jobTypeFilter === 'fulltime' && job.type === 'Full-time') ||
                       (jobTypeFilter === 'contract' && job.type === 'Contract') ||
                       (jobTypeFilter === 'parttime' && job.type === 'Part-time');

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-4">Job Opportunities</h1>
          <p className="text-muted-foreground">
            Discover your next career opportunity from our curated list of positions.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search jobs, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="sanfrancisco">San Francisco</SelectItem>
                  <SelectItem value="newyork">New York</SelectItem>
                  <SelectItem value="austin">Austin</SelectItem>
                  <SelectItem value="seattle">Seattle</SelectItem>
                  <SelectItem value="losangeles">Los Angeles</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={jobTypeFilter} onValueChange={setJobTypeFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="fulltime">Full-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="parttime">Part-time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {filteredJobs.length} jobs found
          </p>
        </div>

        {/* Job Cards */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4 mb-3">
                      <span className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {job.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.postedDays} days ago
                      </span>
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {job.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-muted-foreground mb-2">
                      <DollarSign className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{job.applicants} applicants</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                <div className="mb-4">
                  <h4 className="mb-2">Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, index) => (
                      <Badge key={index} variant="outline">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button>Apply Now</Button>
                  <Button variant="outline">Save Job</Button>
                  <Button variant="ghost" onClick={() => onNavigate('matches')}>
                    View Match Score
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No jobs found matching your criteria.</p>
            <Button onClick={() => {
              setSearchTerm('');
              setLocationFilter('all');
              setJobTypeFilter('all');
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}