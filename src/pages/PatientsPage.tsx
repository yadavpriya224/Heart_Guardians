
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, ChevronDown } from 'lucide-react';
import RiskMeter from '@/components/RiskMeter';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PatientsPage = () => {
  // Sample patient data - in a real app this would come from an API
  const patients = [
    { id: 'P-1001', name: 'John Smith', age: 67, gender: 'M', admissionDate: '2023-04-12', dischargeDate: '2023-04-18', diagnosis: 'HF with reduced EF', riskScore: 76 },
    { id: 'P-1002', name: 'Sarah Johnson', age: 58, gender: 'F', admissionDate: '2023-04-15', dischargeDate: '2023-04-25', diagnosis: 'Acute HF', riskScore: 42 },
    { id: 'P-1003', name: 'Robert Davis', age: 72, gender: 'M', admissionDate: '2023-04-10', dischargeDate: '2023-04-22', diagnosis: 'Diastolic HF', riskScore: 63 },
    { id: 'P-1004', name: 'Maria Garcia', age: 61, gender: 'F', admissionDate: '2023-04-18', dischargeDate: '2023-04-26', diagnosis: 'HF with preserved EF', riskScore: 28 },
    { id: 'P-1005', name: 'James Wilson', age: 70, gender: 'M', admissionDate: '2023-04-20', dischargeDate: '2023-04-30', diagnosis: 'Acute decompensated HF', riskScore: 81 },
  ];

  return (
    <div className="flex h-screen flex-col">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Patients</h2>
            
            <div className="flex items-center justify-between">
              <div className="relative w-72">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search patients..." className="pl-8 pr-4" />
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  Sort by
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Age/Gender</TableHead>
                    <TableHead>Admission Date</TableHead>
                    <TableHead>Discharge Date</TableHead>
                    <TableHead>Primary Diagnosis</TableHead>
                    <TableHead>Readmission Risk</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {patients.map((patient) => (
                    <TableRow key={patient.id}>
                      <TableCell>{patient.id}</TableCell>
                      <TableCell>{patient.name}</TableCell>
                      <TableCell>{patient.age}/{patient.gender}</TableCell>
                      <TableCell>{patient.admissionDate}</TableCell>
                      <TableCell>{patient.dischargeDate}</TableCell>
                      <TableCell>{patient.diagnosis}</TableCell>
                      <TableCell>
                        <RiskMeter riskScore={patient.riskScore} className="w-36" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="flex items-center justify-end space-x-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm" className="px-4">1</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PatientsPage;
