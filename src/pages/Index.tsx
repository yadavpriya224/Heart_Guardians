
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import StatCard from '@/components/StatCard';
import PatientList from '@/components/PatientList';
import FeatureImportanceChart from '@/components/FeatureImportanceChart';
import ReadmissionTrend from '@/components/ReadmissionTrend';
import DiagnosisCodeList from '@/components/DiagnosisCodeList';
import PatientPrediction from '@/components/PatientPrediction';
import { Users, Calendar, Hospital, Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Heart Failure Readmission Dashboard</h2>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard 
                title="Total Patients"
                value="1,248"
                icon={<Users className="h-5 w-5" />}
                trend={{ value: 12, positive: true }}
              />
              
              <StatCard 
                title="30-Day Readmissions"
                value="267"
                icon={<Calendar className="h-5 w-5" />}
                trend={{ value: 3, positive: false }}
              />
              
              <StatCard 
                title="Readmission Rate"
                value="21.4%"
                icon={<Hospital className="h-5 w-5" />}
                trend={{ value: 2.1, positive: false }}
              />
              
              <StatCard 
                title="High Risk Patients"
                value="158"
                icon={<Heart className="h-5 w-5" />}
                trend={{ value: 5, positive: true }}
              />
            </div>
            
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <PatientPrediction />
              <ReadmissionTrend />
            </div>
            
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <FeatureImportanceChart />
              <DiagnosisCodeList />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold tracking-tight mb-4">High Risk Patients</h3>
              <PatientList />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
