
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const RiskAnalysisPage = () => {
  // Sample data for feature importance
  const featureData = [
    { name: 'Age', importance: 84, fill: '#0284c7' },
    { name: 'Length of Stay', importance: 76, fill: '#0284c7' },
    { name: 'Comorbidities', importance: 67, fill: '#0284c7' },
    { name: 'Ejection Fraction', importance: 62, fill: '#0284c7' },
    { name: 'Prior Admissions', importance: 58, fill: '#0284c7' },
    { name: 'Medication Adherence', importance: 52, fill: '#0284c7' },
  ];

  // Sample data for risk distribution
  const riskDistribution = [
    { name: 'Low Risk', value: 44, fill: '#22c55e' },
    { name: 'Medium Risk', value: 34, fill: '#eab308' },
    { name: 'High Risk', value: 22, fill: '#ef4444' },
  ];

  // Sample data for readmission factors
  const readmissionFactors = [
    { factor: 'Medication non-compliance', percentage: 24 },
    { factor: 'Dietary non-compliance', percentage: 18 },
    { factor: 'Delayed follow-up', percentage: 15 },
    { factor: 'Inadequate discharge planning', percentage: 13 },
    { factor: 'Comorbid psychiatric illness', percentage: 10 },
    { factor: 'Other factors', percentage: 20 },
  ];

  return (
    <div className="flex h-screen flex-col">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Risk Analysis</h2>
            
            <Tabs defaultValue="factors">
              <TabsList className="mb-4">
                <TabsTrigger value="factors">Risk Factors</TabsTrigger>
                <TabsTrigger value="distribution">Risk Distribution</TabsTrigger>
                <TabsTrigger value="readmission">Readmission Causes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="factors">
                <Card>
                  <CardHeader>
                    <CardTitle>Feature Importance for Risk Prediction</CardTitle>
                    <CardDescription>Key factors that contribute to readmission risk prediction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={featureData}
                          layout="vertical"
                          margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" domain={[0, 100]} />
                          <YAxis dataKey="name" type="category" />
                          <Tooltip 
                            formatter={(value) => [`${value}%`, 'Importance']}
                          />
                          <Bar dataKey="importance" fill="#0284c7" radius={[0, 4, 4, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="distribution">
                <Card>
                  <CardHeader>
                    <CardTitle>Patient Risk Distribution</CardTitle>
                    <CardDescription>Percentage of patients in each risk category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={riskDistribution}
                            cx="50%"
                            cy="50%"
                            outerRadius={130}
                            innerRadius={70}
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {riskDistribution.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                          </Pie>
                          <Legend />
                          <Tooltip formatter={(value) => [`${value}%`, 'Patients']} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="readmission">
                <Card>
                  <CardHeader>
                    <CardTitle>Common Causes of Readmission</CardTitle>
                    <CardDescription>Most frequent factors leading to patient readmission</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {readmissionFactors.map((item) => (
                        <div key={item.factor} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{item.factor}</span>
                            <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-secondary">
                            <div
                              className="h-full rounded-full bg-medical-blue"
                              style={{ width: `${item.percentage * 4}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RiskAnalysisPage;
