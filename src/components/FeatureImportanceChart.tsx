
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const mockFeatureData = [
  { name: 'Previous HF Admission', value: 85 },
  { name: 'BNP Level', value: 72 },
  { name: 'Ejection Fraction', value: 68 },
  { name: 'Age', value: 61 },
  { name: 'Renal Function', value: 58 },
  { name: 'Sodium Level', value: 45 },
  { name: 'Medication Adherence', value: 42 },
  { name: 'Length of Stay', value: 37 },
];

const FeatureImportanceChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feature Importance</CardTitle>
        <CardDescription>
          Key factors in readmission prediction model
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={mockFeatureData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis type="number" domain={[0, 100]} />
              <YAxis type="category" dataKey="name" width={150} />
              <Tooltip 
                formatter={(value: number) => [`${value}%`, 'Importance']}
                cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
              />
              <Bar dataKey="value" fill="#2B6CB0" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureImportanceChart;
