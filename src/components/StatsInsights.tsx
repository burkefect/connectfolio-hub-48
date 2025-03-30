
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ThemeAwareChart from './ThemeAwareChart';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const industryHiringRates = [
  { name: 'Tech', withPortfolio: 72, withoutPortfolio: 38 },
  { name: 'Finance', withPortfolio: 68, withoutPortfolio: 42 },
  { name: 'Healthcare', withPortfolio: 65, withoutPortfolio: 35 },
  { name: 'Marketing', withPortfolio: 82, withoutPortfolio: 45 },
  { name: 'Design', withPortfolio: 89, withoutPortfolio: 39 },
  { name: 'Education', withPortfolio: 61, withoutPortfolio: 34 },
];

const employerData = [
  { name: 'Initial Interest', value: 75 },
  { name: 'Read Portfolio', value: 85 },
  { name: 'View Projects', value: 92 },
  { name: 'Contact', value: 62 },
  { name: 'Interview', value: 45 },
  { name: 'Offer', value: 30 },
];

const applicationOutcomes = [
  { name: 'Interviews', withPortfolio: 38, withoutPortfolio: 12 },
  { name: 'Technical Screens', withPortfolio: 32, withoutPortfolio: 10 },
  { name: 'Offers', withPortfolio: 15, withoutPortfolio: 5 },
  { name: 'Salary (%)', withPortfolio: 12, withoutPortfolio: 0 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
const DARK_COLORS = ['#4299e1', '#38b2ac', '#ecc94b', '#ed8936', '#9f7aea', '#9ae6b4'];

const StatsInsights: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 shadow-sm dark:border-gray-700">
        <CardHeader>
          <CardTitle>Industry Hiring Rate Comparison</CardTitle>
          <CardDescription>
            Percentage of candidates who received job offers by industry
          </CardDescription>
          <Tabs defaultValue="monthly" className="w-full">
            <TabsList className="grid w-full max-w-xs grid-cols-3">
              <TabsTrigger 
                value="monthly" 
                onClick={() => setTimeRange('monthly')}
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger 
                value="quarterly" 
                onClick={() => setTimeRange('quarterly')}
              >
                Quarterly
              </TabsTrigger>
              <TabsTrigger 
                value="yearly" 
                onClick={() => setTimeRange('yearly')}
              >
                Yearly
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <ThemeAwareChart height={350}>
            <BarChart
              data={industryHiringRates}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="withPortfolio" name="With Portfolio" fill="var(--color-withPortfolio)" />
              <Bar dataKey="withoutPortfolio" name="Without Portfolio" fill="var(--color-withoutPortfolio)" />
            </BarChart>
          </ThemeAwareChart>
        </CardContent>
      </Card>

      <Card className="shadow-sm dark:border-gray-700">
        <CardHeader>
          <CardTitle>Employer Engagement Funnel</CardTitle>
          <CardDescription>
            How employers interact with candidates who have portfolios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ThemeAwareChart 
            height={350}
            config={{
              'Initial Interest': { 
                label: "Initial Interest",
                theme: { light: COLORS[0], dark: DARK_COLORS[0] }
              },
              'Read Portfolio': { 
                label: "Read Portfolio",
                theme: { light: COLORS[1], dark: DARK_COLORS[1] }
              },
              'View Projects': { 
                label: "View Projects",
                theme: { light: COLORS[2], dark: DARK_COLORS[2] }
              },
              'Contact': { 
                label: "Contact",
                theme: { light: COLORS[3], dark: DARK_COLORS[3] }
              },
              'Interview': { 
                label: "Interview",
                theme: { light: COLORS[4], dark: DARK_COLORS[4] }
              },
              'Offer': { 
                label: "Offer",
                theme: { light: COLORS[5], dark: DARK_COLORS[5] }
              },
            }}
          >
            <PieChart>
              <Pie
                data={employerData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {employerData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`var(--color-${entry.name.replace(' ', '')})`} />
                ))}
              </Pie>
              <Tooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ThemeAwareChart>
        </CardContent>
      </Card>

      <Card className="lg:col-span-3 shadow-sm dark:border-gray-700">
        <CardHeader>
          <CardTitle>Application Outcomes Comparison</CardTitle>
          <CardDescription>
            Key metrics for job applications with and without a professional portfolio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ThemeAwareChart height={350}>
            <BarChart
              data={applicationOutcomes}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis type="category" dataKey="name" width={120} />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="withPortfolio" name="With Portfolio" fill="var(--color-withPortfolio)" />
              <Bar dataKey="withoutPortfolio" name="Without Portfolio" fill="var(--color-withoutPortfolio)" />
            </BarChart>
          </ThemeAwareChart>
          
          <div className="mt-6 p-4 bg-secondary/20 dark:bg-gray-800/30 rounded-lg">
            <h4 className="font-semibold mb-2">Key Insights:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
              <li>Portfolios increase interview rates by an average of <span className="font-semibold text-primary">215%</span></li>
              <li>Technical screenings are <span className="font-semibold text-primary">3.2x more likely</span> when you have a portfolio</li>
              <li>Job offers are <span className="font-semibold text-primary">200% higher</span> for candidates with portfolios</li>
              <li>Salary offers average <span className="font-semibold text-primary">12% higher</span> for candidates with portfolios</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsInsights;
