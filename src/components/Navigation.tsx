import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Users, Briefcase, Target } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'jobs' | 'candidate-dashboard' | 'recruiter-dashboard' | 'matches') => void;
  userType: 'candidate' | 'recruiter' | null;
  onUserTypeSelect: (type: 'candidate' | 'recruiter') => void;
}

export function Navigation({ currentPage, onNavigate, userType, onUserTypeSelect }: NavigationProps) {
  return (
    <nav className="border-b bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Target className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold">TalentMatch</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant={currentPage === 'home' ? 'default' : 'ghost'}
              onClick={() => onNavigate('home')}
            >
              Home
            </Button>
            
            <Button
              variant={currentPage === 'jobs' ? 'default' : 'ghost'}
              onClick={() => onNavigate('jobs')}
            >
              Browse Jobs
            </Button>

            {userType && (
              <Button
                variant={currentPage === 'matches' ? 'default' : 'ghost'}
                onClick={() => onNavigate('matches')}
              >
                Matches
              </Button>
            )}

            {userType ? (
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  {userType === 'candidate' ? <Users className="h-3 w-3" /> : <Briefcase className="h-3 w-3" />}
                  {userType === 'candidate' ? 'Candidate' : 'Recruiter'}
                </Badge>
                <Button
                  variant={currentPage.includes('dashboard') ? 'default' : 'outline'}
                  onClick={() => onNavigate(userType === 'candidate' ? 'candidate-dashboard' : 'recruiter-dashboard')}
                >
                  Dashboard
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => onUserTypeSelect('candidate')}
                >
                  I'm a Candidate
                </Button>
                <Button
                  variant="default"
                  onClick={() => onUserTypeSelect('recruiter')}
                >
                  I'm a Recruiter
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}