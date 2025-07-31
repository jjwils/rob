import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Users, Briefcase, Zap, Star, TrendingUp } from 'lucide-react';

interface LandingPageProps {
  onUserTypeSelect: (type: 'candidate' | 'recruiter') => void;
  onNavigate: (page: 'jobs') => void;
}

export function LandingPage({ onUserTypeSelect, onNavigate }: LandingPageProps) {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI-Powered Matching",
      description: "Advanced algorithms match candidates with perfect job opportunities based on skills, experience, and preferences."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Quality Over Quantity",
      description: "We focus on meaningful connections between top talent and great companies, not just volume."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Career Growth",
      description: "Track your career progression and get personalized recommendations for skill development."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Jobs" },
    { number: "50,000+", label: "Candidates" },
    { number: "95%", label: "Match Success Rate" },
    { number: "500+", label: "Companies" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              🚀 The Future of Recruitment
            </Badge>
            <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Find Your Perfect Match
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              TalentMatch uses advanced AI to connect the right candidates with the right opportunities. 
              Whether you're looking for talent or your next career move, we make perfect matches.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="px-8 py-3"
              onClick={() => onUserTypeSelect('candidate')}
            >
              <Users className="mr-2 h-5 w-5" />
              I'm Looking for a Job
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-3"
              onClick={() => onUserTypeSelect('recruiter')}
            >
              <Briefcase className="mr-2 h-5 w-5" />
              I'm Hiring Talent
            </Button>
          </div>

          <Button 
            variant="ghost" 
            onClick={() => onNavigate('jobs')}
            className="text-muted-foreground hover:text-foreground"
          >
            Browse Available Positions →
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl text-primary">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose TalentMatch?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're revolutionizing recruitment with cutting-edge technology and human insight.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Find Your Match?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of professionals who have found their perfect career opportunity through TalentMatch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => onUserTypeSelect('candidate')}
            >
              Start as Candidate
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onUserTypeSelect('recruiter')}
            >
              Start as Recruiter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}