
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ThemeAwareChart, { ChartTooltipContent } from './ThemeAwareChart';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const monthlyReachData = [
  { month: 'Jan', recruiterViews: 42, directMessages: 12, savedProfiles: 18 },
  { month: 'Feb', recruiterViews: 58, directMessages: 16, savedProfiles: 24 },
  { month: 'Mar', recruiterViews: 75, directMessages: 21, savedProfiles: 32 },
  { month: 'Apr', recruiterViews: 92, directMessages: 28, savedProfiles: 38 },
  { month: 'May', recruiterViews: 108, directMessages: 33, savedProfiles: 44 },
  { month: 'Jun', recruiterViews: 125, directMessages: 42, savedProfiles: 52 },
  { month: 'Jul', recruiterViews: 142, directMessages: 48, savedProfiles: 58 },
  { month: 'Aug', recruiterViews: 159, directMessages: 54, savedProfiles: 65 },
];

const trafficSourcesData = [
  { name: 'LinkedIn', value: 38 },
  { name: 'Google', value: 24 },
  { name: 'Direct', value: 18 },
  { name: 'GitHub', value: 12 },
  { name: 'Twitter', value: 8 },
];

const visitorEngagementData = [
  { day: 1, casual: 15, engaged: 45, returning: 5 },
  { day: 2, casual: 12, engaged: 48, returning: 8 },
  { day: 3, casual: 18, engaged: 52, returning: 10 },
  { day: 4, casual: 10, engaged: 54, returning: 12 },
  { day: 5, casual: 14, engaged: 58, returning: 15 },
  { day: 6, casual: 12, engaged: 61, returning: 18 },
  { day: 7, casual: 16, engaged: 65, returning: 22 },
];

const recuiterActionData = [
  { action: 'View Profile', count: 245, growth: '+18%' },
  { action: 'Download Resume', count: 162, growth: '+32%' },
  { action: 'View Projects', count: 198, growth: '+24%' },
  { action: 'Contact', count: 76, growth: '+42%' },
  { action: 'Share Profile', count: 48, growth: '+15%' },
];

const ReachMetrics: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'weekly' | 'monthly' | 'quarterly'>('monthly');
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="lg:col-span-2 shadow-sm dark:border-gray-700">
        <CardHeader>
          <CardTitle>Portfolio Reach Metrics</CardTitle>
          <CardDescription>
            How your portfolio is being discovered by recruiters and hiring managers
          </CardDescription>
          <Tabs defaultValue="monthly" className="w-full">
            <TabsList className="grid w-full max-w-xs grid-cols-3">
              <TabsTrigger 
                value="weekly" 
                onClick={() => setTimeRange('weekly')}
              >
                Weekly
              </TabsTrigger>
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
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <ThemeAwareChart 
            height={350}
            config={{
              recruiterViews: { 
                label: "Recruiter Views",
                theme: { light: "#0088FE", dark: "#4299e1" }
              },
              directMessages: { 
                label: "Direct Messages",
                theme: { light: "#00C49F", dark: "#38b2ac" }
              },
              savedProfiles: { 
                label: "Saved Profiles",
                theme: { light: "#FFBB28", dark: "#ecc94b" }
              }
            }}
          >
            <AreaChart
              data={monthlyReachData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Area 
                type="monotone" 
                dataKey="recruiterViews"
                name="Recruiter Views"
                stroke="var(--color-recruiterViews)" 
                fill="var(--color-recruiterViews)" 
                fillOpacity={0.6}
              />
              <Area 
                type="monotone" 
                dataKey="directMessages"
                name="Direct Messages"
                stroke="var(--color-directMessages)" 
                fill="var(--color-directMessages)" 
                fillOpacity={0.6}
              />
              <Area 
                type="monotone" 
                dataKey="savedProfiles"
                name="Saved Profiles"
                stroke="var(--color-savedProfiles)" 
                fill="var(--color-savedProfiles)" 
                fillOpacity={0.6}
              />
              <Legend />
            </AreaChart>
          </ThemeAwareChart>
        </CardContent>
      </Card>

      <Card className="shadow-sm dark:border-gray-700">
        <CardHeader>
          <CardTitle>Visitor Engagement</CardTitle>
          <CardDescription>
            How visitors interact with your portfolio over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ThemeAwareChart 
            height={350}
            config={{
              casual: { 
                label: "Casual Visitors",
                theme: { light: "#E0E0E0", dark: "#4a5568" }
              },
              engaged: { 
                label: "Engaged Visitors",
                theme: { light: "#0088FE", dark: "#4299e1" }
              },
              returning: { 
                label: "Returning Visitors",
                theme: { light: "#00C49F", dark: "#38b2ac" }
              }
            }}
          >
            <LineChart
              data={visitorEngagementData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" label={{ value: 'Days', position: 'insideBottomRight', offset: 0 }} />
              <YAxis label={{ value: 'Visitors', angle: -90, position: 'insideLeft' }} />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="casual" 
                name="Casual Visitors"
                stroke="var(--color-casual)" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="engaged" 
                name="Engaged Visitors"
                stroke="var(--color-engaged)" 
                strokeWidth={2} 
                activeDot={{ r: 8 }}
              />
              <Line 
                type="monotone" 
                dataKey="returning" 
                name="Returning Visitors"
                stroke="var(--color-returning)" 
                strokeWidth={2}
              />
            </LineChart>
          </ThemeAwareChart>
        </CardContent>
      </Card>

      <Card className="shadow-sm dark:border-gray-700">
        <CardHeader>
          <CardTitle>Recruiter Actions</CardTitle>
          <CardDescription>
            Actions taken by recruiters on your portfolio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Action</TableHead>
                  <TableHead className="text-right">Count</TableHead>
                  <TableHead className="text-right">Growth</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recuiterActionData.map((item) => (
                  <TableRow key={item.action}>
                    <TableCell className="font-medium">{item.action}</TableCell>
                    <TableCell className="text-right">{item.count}</TableCell>
                    <TableCell className="text-right text-green-600 dark:text-green-400">{item.growth}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400">Insight:</h4>
            <p className="text-sm text-green-700/80 dark:text-green-400/80">
              Contact requests from recruiters increased by 42% after adding interactive projects to your portfolio.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReachMetrics;
