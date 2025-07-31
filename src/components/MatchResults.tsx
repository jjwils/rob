import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Target, 
  Star, 
  TrendingUp, 
  CheckCircle,
  AlertCircle,
  Users,
  Briefcase,
  MapPin,
  DollarSign,
  Clock
} from 'lucide-react';

interface MatchResultsProps {
  onNavigate: (page: 'jobs' | 'candidate-dashboard' | 'recruiter-dashboard') => void;
  userType: 'candidate' | 'recruiter' | null;
}

export function MatchResults({ onNavigate, userType }: MatchResultsProps) {
  const [selectedMatch, setSelectedMatch] = useState<string | null>(null);

  // Mock match data for candidates
  const candidateMatches = [
    {
      id: '1',
      jobTitle: 'Senior Frontend Developer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      salary: '$120,000 - $150,000',
      matchScore: 95,
      matchReasons: [
        { category: 'Skills Match', score: 98, details: 'React, TypeScript, Node.js' },
        { category: 'Experience Level', score: 95, details: '6 years matches 5+ requirement' },
        { category: 'Location Preference', score: 92, details: 'San Francisco preference' },
        { category: 'Company Culture', score: 88, details: 'Tech-forward, collaborative environment' }
      ],
      requirements: ['React', 'TypeScript', 'Node.js', '5+ years experience'],
      benefits: ['Health Insurance', 'Remote Work', '401k', 'Stock Options'],
      description: 'Lead frontend development for next-generation web applications.',
      posted: '2 days ago'
    },
    {
      id: '2',
      jobTitle: 'Lead React Developer',
      company: 'InnovateTech',
      location: 'Remote',
      salary: '$130,000 - $160,000',
      matchScore: 88,
      matchReasons: [
        { category: 'Skills Match', score: 95, details: 'React, JavaScript, GraphQL' },
        { category: 'Experience Level', score: 85, details: '6 years for lead role' },
        { category: 'Remote Preference', score: 100, details: 'Fully remote position' },
        { category: 'Team Leadership', score: 78, details: 'Previous mentoring experience' }
      ],
      requirements: ['React', 'JavaScript', 'GraphQL', 'Team Leadership'],
      benefits: ['Fully Remote', 'Flexible Hours', 'Learning Budget', 'Health Insurance'],
      description: 'Lead a team of frontend developers building cutting-edge applications.',
      posted: '1 week ago'
    },
    {
      id: '3',
      jobTitle: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      salary: '$110,000 - $140,000',
      matchScore: 82,
      matchReasons: [
        { category: 'Skills Match', score: 88, details: 'React, Node.js, Python' },
        { category: 'Experience Level', score: 80, details: 'Full-stack experience valuable' },
        { category: 'Location Preference', score: 75, details: 'NYC secondary preference' },
        { category: 'Company Stage', score: 85, details: 'Startup environment experience' }
      ],
      requirements: ['React', 'Node.js', 'Python', 'Database Design'],
      benefits: ['Equity', 'Health Insurance', 'Gym Membership', 'Catered Meals'],
      description: 'Build end-to-end features for our rapidly growing platform.',
      posted: '5 days ago'
    }
  ];

  // Mock match data for recruiters
  const recruiterMatches = [
    {
      id: '1',
      candidateName: 'Alex Johnson',
      currentRole: 'Senior Frontend Developer',
      experience: '6 years',
      location: 'San Francisco, CA',
      expectedSalary: '$120,000 - $150,000',
      matchScore: 95,
      matchReasons: [
        { category: 'Skills Match', score: 98, details: 'React, TypeScript, Node.js expertise' },
        { category: 'Experience Level', score: 95, details: 'Perfect senior-level experience' },
        { category: 'Cultural Fit', score: 90, details: 'Collaborative, growth-minded' },
        { category: 'Availability', score: 92, details: 'Available within 2 weeks' }
      ],
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS'],
      education: 'BS Computer Science, UC Berkeley',
      availability: 'Available in 2 weeks',
      lastActive: '2 hours ago'
    },
    {
      id: '2',
      candidateName: 'Sarah Chen',
      currentRole: 'Frontend Developer',
      experience: '5 years',
      location: 'San Francisco, CA',
      expectedSalary: '$115,000 - $140,000',
      matchScore: 88,
      matchReasons: [
        { category: 'Skills Match', score: 92, details: 'Strong React and modern JS' },
        { category: 'Growth Potential', score: 88, details: 'Ready for senior role' },
        { category: 'Location', score: 95, details: 'Local candidate' },
        { category: 'Portfolio Quality', score: 85, details: 'Impressive project showcase' }
      ],
      skills: ['React', 'JavaScript', 'CSS', 'Python', 'Docker'],
      education: 'MS Software Engineering, Stanford',
      availability: 'Available immediately',
      lastActive: '1 day ago'
    },
    {
      id: '3',
      candidateName: 'Mike Rodriguez',
      currentRole: 'Full Stack Developer',
      experience: '4 years',
      location: 'Remote (PST)',
      expectedSalary: '$100,000 - $125,000',
      matchScore: 82,
      matchReasons: [
        { category: 'Skills Match', score: 85, details: 'Full-stack with React focus' },
        { category: 'Remote Experience', score: 90, details: '2 years remote work' },
        { category: 'Learning Agility', score: 88, details: 'Quick to adapt new technologies' },
        { category: 'Communication', score: 78, details: 'Strong written communication' }
      ],
      skills: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker'],
      education: 'BS Computer Science, UCLA',
      availability: 'Available in 4 weeks',
      lastActive: '3 hours ago'
    }
  ];

  const matches = userType === 'candidate' ? candidateMatches : recruiterMatches;

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 80) return 'bg-blue-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl mb-2 flex items-center gap-2">
            <Target className="h-8 w-8" />
            AI-Powered Matches
          </h1>
          <p className="text-muted-foreground">
            {userType === 'candidate' 
              ? 'Discover job opportunities perfectly matched to your skills and preferences.'
              : 'Find top-quality candidates that match your job requirements.'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Match List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl">
                {matches.length} High-Quality Matches Found
              </h2>
              <Button 
                variant="outline"
                onClick={() => onNavigate(userType === 'candidate' ? 'jobs' : 'recruiter-dashboard')}
              >
                {userType === 'candidate' ? 'Browse All Jobs' : 'Back to Dashboard'}
              </Button>
            </div>

            {matches.map((match) => (
              <Card 
                key={match.id} 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedMatch === match.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedMatch(match.id)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">
                        {userType === 'candidate' ? match.jobTitle : match.candidateName}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-4 mt-2">
                        {userType === 'candidate' ? (
                          <>
                            <span className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              {match.company}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {match.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {match.posted}
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              {match.currentRole}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {match.experience}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {match.location}
                            </span>
                          </>
                        )}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${getScoreColor(match.matchScore)}`}>
                        {match.matchScore}%
                      </div>
                      <div className="text-sm text-muted-foreground">Match Score</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-medium">Top Match Factors:</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {match.matchReasons.slice(0, 2).map((reason, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span>{reason.category}</span>
                          <Badge variant="secondary" className={getScoreBg(reason.score)}>
                            {reason.score}%
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  {userType === 'candidate' ? (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <DollarSign className="h-4 w-4" />
                      <span>{match.salary}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <DollarSign className="h-4 w-4" />
                      <span>Expected: {match.expectedSalary}</span>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button size="sm">
                      {userType === 'candidate' ? 'Apply Now' : 'Contact Candidate'}
                    </Button>
                    <Button size="sm" variant="outline">
                      {userType === 'candidate' ? 'Save Job' : 'Save Candidate'}
                    </Button>
                    <Button size="sm" variant="ghost">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Match Analysis Sidebar */}
          <div className="lg:col-span-1">
            {selectedMatch ? (
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Match Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {(() => {
                    const match = matches.find(m => m.id === selectedMatch);
                    if (!match) return null;

                    return (
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className={`text-3xl font-bold ${getScoreColor(match.matchScore)} mb-2`}>
                            {match.matchScore}%
                          </div>
                          <p className="text-sm text-muted-foreground">Overall Match Score</p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-medium">Match Breakdown:</h4>
                          {match.matchReasons.map((reason, index) => (
                            <div key={index} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm">{reason.category}</span>
                                <span className="text-sm font-medium">{reason.score}%</span>
                              </div>
                              <Progress value={reason.score} className="h-2" />
                              <p className="text-xs text-muted-foreground">{reason.details}</p>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 border-t">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm">High compatibility</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <AlertCircle className="h-4 w-4 text-yellow-500" />
                              <span className="text-sm">Review culture fit</span>
                            </div>
                          </div>
                        </div>

                        <Button className="w-full">
                          {userType === 'candidate' ? 'Apply to This Job' : 'Contact This Candidate'}
                        </Button>
                      </div>
                    );
                  })()}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>How We Match</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <Target className="h-3 w-3" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Skills Analysis</p>
                        <p className="text-xs text-muted-foreground">
                          AI analyzes technical skills and experience relevance
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <Star className="h-3 w-3" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Cultural Fit</p>
                        <p className="text-xs text-muted-foreground">
                          Evaluates work style and company culture alignment
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <TrendingUp className="h-3 w-3" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Growth Potential</p>
                        <p className="text-xs text-muted-foreground">
                          Assesses career progression and learning opportunities
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Click on any match to see detailed analysis and reasoning behind the score.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}