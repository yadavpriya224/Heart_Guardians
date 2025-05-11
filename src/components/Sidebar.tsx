
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Users, ChartBar, FileText, Calendar, Info, Heart 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: ChartBar, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Patients', path: '/patients' },
  { icon: Heart, label: 'Risk Analysis', path: '/risk-analysis' },
  { icon: Calendar, label: 'Follow-ups', path: '/follow-ups' },
  { icon: FileText, label: 'Reports', path: '/reports' },
  { icon: Info, label: 'About', path: '/about' },
];

const Sidebar = () => {
  return (
    <div className="h-[calc(100vh-4rem)] w-56 border-r border-border bg-card">
      <div className="flex h-full flex-col">
        <div className="space-y-1 p-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                'flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium',
                isActive 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-foreground hover:bg-muted'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
        
        <div className="mt-auto p-4 border-t border-border">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-medical-blue text-white flex items-center justify-center font-semibold">
              MD
            </div>
            <div className="ml-2">
              <p className="text-sm font-medium">Dr. Kim</p>
              <p className="text-xs text-muted-foreground">Cardiologist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
