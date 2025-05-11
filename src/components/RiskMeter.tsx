
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface RiskMeterProps {
  riskScore: number;
  className?: string;
}

const RiskMeter = ({ riskScore, className }: RiskMeterProps) => {
  // Risk score should be between 0-100
  const score = Math.max(0, Math.min(100, riskScore));
  
  const getRiskLevel = (score: number) => {
    if (score < 30) return { label: 'Low Risk', class: 'risk-low' };
    if (score < 70) return { label: 'Medium Risk', class: 'risk-medium' };
    return { label: 'High Risk', class: 'risk-high' };
  };

  const risk = getRiskLevel(score);
  
  const getProgressColor = (score: number) => {
    if (score < 30) return 'bg-medical-success';
    if (score < 70) return 'bg-medical-warning';
    return 'bg-medical-accent';
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium">Readmission Risk</h3>
        <span className={`text-sm ${risk.class}`}>{risk.label}</span>
      </div>
      
      <Progress 
        value={score} 
        className={`h-2 ${getProgressColor(score)}`}
      />
      
      <div className="flex justify-between mt-1">
        <span className="text-xs text-muted-foreground">0%</span>
        <span className="text-xs font-medium">{score}%</span>
        <span className="text-xs text-muted-foreground">100%</span>
      </div>
    </div>
  );
};

export default RiskMeter;
