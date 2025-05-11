
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import RiskMeter from './RiskMeter';

interface Patient {
  id: string;
  name: string;
  age: number;
  admissionDate: string;
  dischargeDate: string;
  primaryDiagnosis: string;
  riskScore: number;
}

const mockPatients: Patient[] = [
  {
    id: 'P-1001',
    name: 'James Wilson',
    age: 67,
    admissionDate: '2023-04-10',
    dischargeDate: '2023-04-20',
    primaryDiagnosis: 'Heart Failure (428.0)',
    riskScore: 78,
  },
  {
    id: 'P-1002',
    name: 'Maria Garcia',
    age: 72,
    admissionDate: '2023-04-12',
    dischargeDate: '2023-04-25',
    primaryDiagnosis: 'Heart Failure (428.0)',
    riskScore: 45,
  },
  {
    id: 'P-1003',
    name: 'Robert Chen',
    age: 58,
    admissionDate: '2023-04-15',
    dischargeDate: '2023-04-22',
    primaryDiagnosis: 'Heart Failure (428.23)',
    riskScore: 22,
  },
  {
    id: 'P-1004',
    name: 'Sarah Johnson',
    age: 61,
    admissionDate: '2023-04-18',
    dischargeDate: '2023-04-28',
    primaryDiagnosis: 'Heart Failure (428.9)',
    riskScore: 86,
  },
  {
    id: 'P-1005',
    name: 'Michael Smith',
    age: 69,
    admissionDate: '2023-04-20',
    dischargeDate: '2023-05-01',
    primaryDiagnosis: 'Heart Failure (428.1)',
    riskScore: 35,
  },
];

const PatientList = () => {
  return (
    <div className="rounded-lg border border-border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Discharge Date</TableHead>
            <TableHead>Primary Diagnosis</TableHead>
            <TableHead>Readmission Risk</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockPatients.map((patient) => (
            <TableRow 
              key={patient.id} 
              className="cursor-pointer hover:bg-muted/50"
            >
              <TableCell className="font-medium">{patient.id}</TableCell>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell>{patient.dischargeDate}</TableCell>
              <TableCell>{patient.primaryDiagnosis}</TableCell>
              <TableCell>
                <RiskMeter riskScore={patient.riskScore} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PatientList;
