
import React from 'react';
import { Hospital, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="border-b border-border bg-card py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Hospital className="h-6 w-6 text-medical-blue" />
          <h1 className="text-xl font-semibold text-medical-dark">Heart Failure Readmission Predictor</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search patients..." 
              className="pl-8 pr-4" 
            />
          </div>
          <Button variant="outline">Help</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
