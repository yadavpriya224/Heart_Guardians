
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const heartFailureCodes = [
  { code: '39891', description: 'Rheumatic heart failure' },
  { code: '40201', description: 'Malignant hypertensive heart disease with heart failure' },
  { code: '40211', description: 'Benign hypertensive heart disease with heart failure' },
  { code: '40291', description: 'Unspecified hypertensive heart disease with heart failure' },
  { code: '40401', description: 'Hypertensive heart and chronic kidney disease with heart failure' },
  { code: '40403', description: 'Hypertensive heart and chronic kidney disease with heart failure and CKD stage 5 or ESRD' },
  { code: '40411', description: 'Hypertensive heart and chronic kidney disease with heart failure and CKD stage 1-4' },
  { code: '40413', description: 'Hypertensive heart and chronic kidney disease with heart failure and CKD stage 5 or ESRD' },
  { code: '40491', description: 'Unspecified hypertensive heart and chronic kidney disease with heart failure' },
  { code: '40493', description: 'Unspecified hypertensive heart and chronic kidney disease with heart failure and CKD stage 5 or ESRD' },
  { code: '4280', description: 'Congestive heart failure, unspecified' },
  { code: '4281', description: 'Left heart failure' },
];

const DiagnosisCodeList = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Heart Failure ICD-9 Codes</CardTitle>
        <CardDescription>
          Diagnosis codes used for heart failure classification
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="max-h-[300px] overflow-y-auto pr-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {heartFailureCodes.map((item) => (
                <TableRow key={item.code}>
                  <TableCell className="font-mono font-medium">{item.code}</TableCell>
                  <TableCell>{item.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default DiagnosisCodeList;
