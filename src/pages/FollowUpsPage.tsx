
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import RiskMeter from '@/components/RiskMeter';
import { Calendar as CalendarIcon, Check, Clock, Phone } from 'lucide-react';

const FollowUpsPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  // Sample follow-up data - in a real app this would come from an API
  const followUps = [
    { id: 1, patientId: 'P-1001', patientName: 'John Smith', date: new Date('2023-05-15T10:00:00'), status: 'scheduled', riskScore: 76, notes: 'Review medication compliance' },
    { id: 2, patientId: 'P-1005', patientName: 'James Wilson', date: new Date('2023-05-15T11:30:00'), status: 'scheduled', riskScore: 81, notes: 'Post-discharge evaluation' },
    { id: 3, patientId: 'P-1002', patientName: 'Sarah Johnson', date: new Date('2023-05-16T09:15:00'), status: 'scheduled', riskScore: 42, notes: 'Follow-up on new medication' },
  ];

  const todayFollowUps = followUps.filter(
    f => f.date.toDateString() === new Date().toDateString()
  );
  
  const upcomingFollowUps = followUps
    .filter(f => f.date > new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  // Functions to render badges for different statuses
  const renderStatusBadge = (status: string) => {
    switch(status) {
      case 'completed':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Completed</Badge>;
      case 'scheduled':
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Scheduled</Badge>;
      case 'missed':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Missed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Follow-ups</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="col-span-1">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Calendar</h3>
                    <Button variant="outline" size="sm">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Today
                    </Button>
                  </div>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>
              
              <Card className="col-span-1 lg:col-span-2">
                <CardContent className="p-4">
                  <Tabs defaultValue="today">
                    <TabsList className="mb-4">
                      <TabsTrigger value="today">Today's Follow-ups</TabsTrigger>
                      <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                      <TabsTrigger value="all">All Follow-ups</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="today" className="space-y-4">
                      {todayFollowUps.length > 0 ? (
                        todayFollowUps.map(followUp => (
                          <div key={followUp.id} className="flex items-start justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{followUp.patientName}</span>
                                <span className="text-sm text-muted-foreground">({followUp.patientId})</span>
                                {renderStatusBadge(followUp.status)}
                              </div>
                              
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Clock className="mr-2 h-3 w-3" /> 
                                {followUp.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                              </div>
                              
                              <p className="text-sm">{followUp.notes}</p>
                            </div>
                            
                            <div className="flex flex-col items-end gap-2">
                              <RiskMeter riskScore={followUp.riskScore} className="w-32" />
                              <div className="flex gap-1">
                                <Button size="sm" variant="outline">
                                  <Phone className="h-3 w-3 mr-1" />
                                  Call
                                </Button>
                                <Button size="sm" variant="default">
                                  <Check className="h-3 w-3 mr-1" />
                                  Complete
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8 text-muted-foreground">
                          No follow-ups scheduled for today
                        </div>
                      )}
                    </TabsContent>
                    
                    <TabsContent value="upcoming" className="space-y-4">
                      {upcomingFollowUps.map(followUp => (
                        <div key={followUp.id} className="flex items-start justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{followUp.patientName}</span>
                              <span className="text-sm text-muted-foreground">({followUp.patientId})</span>
                              {renderStatusBadge(followUp.status)}
                            </div>
                            
                            <div className="flex items-center text-sm text-muted-foreground">
                              <CalendarIcon className="mr-2 h-3 w-3" /> 
                              {followUp.date.toLocaleDateString()} - {followUp.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </div>
                            
                            <p className="text-sm">{followUp.notes}</p>
                          </div>
                          
                          <div>
                            <RiskMeter riskScore={followUp.riskScore} className="w-32" />
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                    
                    <TabsContent value="all">
                      <div className="text-center py-8 text-muted-foreground">
                        All follow-ups will be displayed here
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FollowUpsPage;
