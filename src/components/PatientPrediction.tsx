
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import RiskMeter from './RiskMeter';

const PatientPrediction = () => {
  const [riskScore, setRiskScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = () => {
    setLoading(true);
    // Simulating ML prediction API call
    setTimeout(() => {
      // Random score between 10 and 90
      const score = Math.floor(Math.random() * 80) + 10;
      setRiskScore(score);
      setLoading(false);
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Readmission Prediction</CardTitle>
        <CardDescription>
          Predict 30-day readmission risk for heart failure patients
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="patient-id">Patient ID</Label>
            <Input id="patient-id" placeholder="Enter patient ID" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input id="age" type="number" placeholder="Enter age" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="diagnosis">Primary Diagnosis</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select diagnosis code" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="4280">4280 - Congestive Heart Failure</SelectItem>
                <SelectItem value="4281">4281 - Left Heart Failure</SelectItem>
                <SelectItem value="42820">42820 - Systolic Heart Failure, Unspecified</SelectItem>
                <SelectItem value="42821">42821 - Acute Systolic Heart Failure</SelectItem>
                <SelectItem value="42823">42823 - Acute on Chronic Systolic Heart Failure</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="previous-admission">Prior HF Admission</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {riskScore !== null && (
          <div className="mt-6">
            <RiskMeter riskScore={riskScore} className="py-4" />
            <p className="text-sm text-muted-foreground mt-2">
              This patient has a {riskScore}% probability of readmission within 30 days of discharge.
              {riskScore >= 70 && (
                <span className="block mt-2 text-medical-accent font-medium">
                  Recommend intensive follow-up and intervention.
                </span>
              )}
              {riskScore >= 30 && riskScore < 70 && (
                <span className="block mt-2 text-medical-warning font-medium">
                  Consider enhanced monitoring and follow-up.
                </span>
              )}
              {riskScore < 30 && (
                <span className="block mt-2 text-medical-success font-medium">
                  Standard follow-up protocol recommended.
                </span>
              )}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handlePredict} 
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Calculating Risk...' : 'Predict Readmission Risk'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PatientPrediction;
