
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Download, FileText, Printer } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ReportsPage = () => {
  // Sample data for readmission trend
  const trendData = [
    { month: 'Jan', readmissions: 23, average: 25 },
    { month: 'Feb', readmissions: 28, average: 25 },
    { month: 'Mar', readmissions: 25, average: 25 },
    { month: 'Apr', readmissions: 32, average: 25 },
    { month: 'May', readmissions: 29, average: 25 },
    { month: 'Jun', readmissions: 24, average: 25 },
    { month: 'Jul', readmissions: 22, average: 25 },
    { month: 'Aug', readmissions: 26, average: 25 },
    { month: 'Sep', readmissions: 30, average: 25 },
    { month: 'Oct', readmissions: 27, average: 25 },
    { month: 'Nov', readmissions: 24, average: 25 },
    { month: 'Dec', readmissions: 21, average: 25 },
  ];

  // Sample data for department comparison
  const departmentData = [
    { name: 'Cardiology', readmissionRate: 21.4, nationalAvg: 24.3 },
    { name: 'Internal Medicine', readmissionRate: 19.8, nationalAvg: 22.1 },
    { name: 'Geriatrics', readmissionRate: 26.5, nationalAvg: 25.2 },
    { name: 'Pulmonology', readmissionRate: 23.2, nationalAvg: 23.8 },
    { name: 'Nephrology', readmissionRate: 24.7, nationalAvg: 24.5 },
  ];

  return (
    <div className="flex h-screen flex-col">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold tracking-tight">Reports</h2>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Printer className="mr-2 h-4 w-4" />
                  Print
                </Button>
                <Button size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">267</div>
                  <p className="text-xs text-muted-foreground">30-Day Readmissions</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">21.4%</div>
                  <p className="text-xs text-muted-foreground">Readmission Rate</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">6.2 days</div>
                  <p className="text-xs text-muted-foreground">Avg. Length of Stay</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">$8,734</div>
                  <p className="text-xs text-muted-foreground">Avg. Cost per Patient</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Readmission Trend</CardTitle>
                  <CardDescription>30-day readmission rate over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-end space-x-2 mb-4">
                    <Select defaultValue="year">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="month">Last 30 Days</SelectItem>
                        <SelectItem value="quarter">Last Quarter</SelectItem>
                        <SelectItem value="year">Last Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={trendData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="readmissions" stroke="#0284c7" fill="#0284c7" fillOpacity={0.2} />
                        <Area type="monotone" dataKey="average" stroke="#888888" strokeDasharray="5 5" fill="none" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Department Comparison</CardTitle>
                  <CardDescription>Readmission rates by department vs. national average</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={departmentData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar name="Hospital Rate" dataKey="readmissionRate" fill="#0284c7" />
                        <Bar name="National Average" dataKey="nationalAvg" fill="#888888" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Generated Reports</CardTitle>
                <CardDescription>Previously generated reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: 'Monthly Readmission Summary - April 2023', date: '2023-05-01', type: 'PDF' },
                    { title: 'Quarterly Performance Report - Q1 2023', date: '2023-04-15', type: 'Excel' },
                    { title: 'Annual Readmission Analysis - 2022', date: '2023-01-30', type: 'PDF' }
                  ].map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 mr-3 text-medical-blue" />
                        <div>
                          <p className="font-medium">{report.title}</p>
                          <p className="text-sm text-muted-foreground">Generated on {report.date}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Download {report.type}</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReportsPage;
