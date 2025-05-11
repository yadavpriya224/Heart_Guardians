
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockTrendData = [
  { month: 'Jan', rate: 24 },
  { month: 'Feb', rate: 22 },
  { month: 'Mar', rate: 25 },
  { month: 'Apr', rate: 23 },
  { month: 'May', rate: 21 },
  { month: 'Jun', rate: 18 },
  { month: 'Jul', rate: 16 },
  { month: 'Aug', rate: 17 },
  { month: 'Sep', rate: 19 },
  { month: 'Oct', rate: 20 },
  { month: 'Nov', rate: 22 },
  { month: 'Dec', rate: 24 },
];

const ReadmissionTrend = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>30-Day Readmission Trend</CardTitle>
        <CardDescription>
          Historical readmission rates for heart failure patients
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={mockTrendData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.4} />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 30]} />
              <Tooltip 
                formatter={(value: number) => [`${value}%`, 'Readmission Rate']}
                cursor={{ stroke: '#2B6CB0', strokeWidth: 1, strokeDasharray: '5 5' }}
              />
              <Line 
                type="monotone" 
                dataKey="rate" 
                stroke="#2B6CB0" 
                strokeWidth={2} 
                dot={{ r: 3, stroke: '#2B6CB0', fill: '#fff' }} 
                activeDot={{ r: 5, stroke: '#2B6CB0', fill: '#2B6CB0' }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReadmissionTrend;
