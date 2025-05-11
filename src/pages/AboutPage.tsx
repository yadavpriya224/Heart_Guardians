
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Heart, Database, Cpu, Users, RefreshCw } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">About This Project</h2>
            
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="pt-4">
                <div className="flex justify-center mb-6">
                  <div className="inline-flex items-center rounded-full bg-medical-blue/10 p-4">
                    <Heart className="h-10 w-10 text-medical-blue" />
                  </div>
                </div>
                
                <h3 className="text-center text-2xl font-bold mb-4">Heart Failure Readmission Predictor</h3>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                  This tool uses machine learning to predict the risk of 30-day readmission for heart failure patients.
                  By identifying high-risk patients early, healthcare providers can implement targeted interventions
                  that reduce morbidity, mortality, and healthcare costs.
                </p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                  <CardDescription>Key information about this tool</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="mt-0.5">
                      <RefreshCw className="h-5 w-5 text-medical-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">Problem Statement</h4>
                      <p className="text-sm text-muted-foreground">
                        Heart failure is a common ailment leading to high mortality rates. 
                        Hospital readmissions result in significant risks and financial burdens.
                        Predicting at-risk patients allows for targeted interventions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="mt-0.5">
                      <Cpu className="h-5 w-5 text-medical-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">Machine Learning Model</h4>
                      <p className="text-sm text-muted-foreground">
                        Our model analyzes multiple patient factors including demographics, 
                        diagnoses, medications, lab values, and prior utilization to predict 
                        30-day readmission risk with high accuracy.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="mt-0.5">
                      <Database className="h-5 w-5 text-medical-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">Data Sources</h4>
                      <p className="text-sm text-muted-foreground">
                        This tool utilizes MIMIC-III, a freely accessible critical care database.
                        Key tables include patient demographics, admissions, diagnoses, and procedures.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="mt-0.5">
                      <Users className="h-5 w-5 text-medical-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">Target Users</h4>
                      <p className="text-sm text-muted-foreground">
                        Healthcare providers, care coordinators, and clinical staff working 
                        with heart failure patients to improve post-discharge outcomes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Common questions about the system</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How accurate is the prediction model?</AccordionTrigger>
                      <AccordionContent>
                        Our model achieves approximately 85% accuracy in predicting 30-day 
                        readmissions, with a balanced precision and recall. The model is 
                        continuously validated and updated to maintain high performance.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger>What patient data is required for predictions?</AccordionTrigger>
                      <AccordionContent>
                        The model requires demographic information, clinical variables, 
                        laboratory results, medication data, and historical utilization 
                        patterns to generate accurate risk scores.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How should risk scores be interpreted?</AccordionTrigger>
                      <AccordionContent>
                        Risk scores are categorized as low (0-30%), medium (30-70%), 
                        and high (70-100%). High-risk patients are recommended for 
                        intensive post-discharge interventions and close monitoring.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Can this tool integrate with electronic health records?</AccordionTrigger>
                      <AccordionContent>
                        Yes, the system is designed with standard API endpoints that can 
                        integrate with major EHR systems to facilitate seamless data exchange 
                        and incorporation into clinical workflows.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-5">
                      <AccordionTrigger>How often is the model updated?</AccordionTrigger>
                      <AccordionContent>
                        The predictive model undergoes quarterly retraining with new data 
                        to ensure it remains accurate and accounts for evolving clinical 
                        practices and patient populations.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Heart Failure Diagnosis Codes</CardTitle>
                <CardDescription>ICD-9 codes representing heart failure conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  {[
                    '39891', '40201', '40211', '40291', '40401', '40403', '40411', '40413', 
                    '40491', '40493', '4280', '4281', '42820', '42821', '42822', '42823', 
                    '42830', '42831', '42832', '42833', '42840', '42841', '42842', '42843', '4289'
                  ].map((code) => (
                    <div key={code} className="flex items-center justify-center p-2 border rounded-md text-sm">
                      {code}
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

export default AboutPage;
