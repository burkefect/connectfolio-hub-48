
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ThemeAwareChart, { ChartTooltipContent } from './ThemeAwareChart';
import { AreaChart, Area, LineChart, Line, BarChart, Bar, Cell, CartesianGrid, Tooltip, Legend, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const responseData = [
  { month: 'Jan', withPortfolio: 68, withoutPortfolio: 42 },
  { month: 'Feb', withPortfolio: 72, withoutPortfolio: 38 },
  { month: 'Mar', withPortfolio: 65, withoutPortfolio: 41 },
  { month: 'Apr', withPortfolio: 74, withoutPortfolio: 44 },
  { month: 'May', withPortfolio: 78, withoutPortfolio: 45 },
  { month: 'Jun', withPortfolio: 82, withoutPortfolio: 43 },
  { month: 'Jul', withPortfolio: 85, withoutPortfolio: 47 },
  { month: 'Aug', withPortfolio: 76, withoutPortfolio: 40 },
];

const interviewStats = [
  { name: 'With Portfolio', value: 68 },
  { name: 'Without Portfolio', value: 32 },
];

const responseTimeData = [
  { name: 'Day 1', withPortfolio: 35, withoutPortfolio: 15 },
  { name: 'Day 3', withPortfolio: 65, withoutPortfolio: 28 },
  { name: 'Day 7', withPortfolio: 78, withoutPortfolio: 42 },
  { name: 'Day 14', withPortfolio: 85, withoutPortfolio: 58 },
];

const salaryIncreaseData = [
  { experience: '0-2 yrs', withPortfolio: 8, withoutPortfolio: 3 },
  { experience: '3-5 yrs', withPortfolio: 12, withoutPortfolio: 5 },
  { experience: '6-8 yrs', withPortfolio: 15, withoutPortfolio: 7 },
  { experience: '9+ yrs', withPortfolio: 18, withoutPortfolio: 8 },
];

const COLORS = ['#0088FE', '#E0E0E0'];

const StatsDashboard: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Response Rate Chart */}
          <div className="col-span-1 lg:col-span-2">
            <Card className="shadow-sm border-0 dark:border dark:border-gray-700">
              <CardHeader>
                <CardTitle>Job Response Rates</CardTitle>
                <CardDescription>
                  Average percentage of job applications that received a response
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ThemeAwareChart height={350}>
                  <AreaChart
                    data={responseData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Area 
                      type="monotone" 
                      dataKey="withPortfolio" 
                      name="With Portfolio"
                      stroke="var(--color-withPortfolio)" 
                      fill="var(--color-withPortfolio)" 
                      fillOpacity={0.6}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="withoutPortfolio" 
                      name="Without Portfolio"
                      stroke="var(--color-withoutPortfolio)" 
                      fill="var(--color-withoutPortfolio)" 
                      fillOpacity={0.6}
                    />
                    <Legend />
                  </AreaChart>
                </ThemeAwareChart>
              </CardContent>
            </Card>
          </div>
          
          {/* Interview Rate */}
          <div className="col-span-1">
            <Card className="shadow-sm border-0 dark:border dark:border-gray-700">
              <CardHeader>
                <CardTitle>Interview Success Rate</CardTitle>
                <CardDescription>
                  Percentage of applications that led to interviews
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ThemeAwareChart height={300}>
                  <BarChart
                    data={interviewStats}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip content={<ChartTooltipContent />} formatter={(value) => [`${value}%`, 'Interview Rate']} />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                      {interviewStats.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={index === 0 ? 'var(--color-withPortfolio)' : 'var(--color-withoutPortfolio)'} 
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ThemeAwareChart>
              </CardContent>
            </Card>
          </div>
          
          {/* Response Time */}
          <div className="col-span-1 md:col-span-2">
            <Card className="shadow-sm border-0 dark:border dark:border-gray-700">
              <CardHeader>
                <CardTitle>Response Timeline</CardTitle>
                <CardDescription>
                  Cumulative percentage of responses received over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ThemeAwareChart height={300}>
                  <LineChart
                    data={responseTimeData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip content={<ChartTooltipContent />} formatter={(value) => [`${value}%`, 'Response Rate']} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="withPortfolio" 
                      name="With Portfolio"
                      stroke="var(--color-withPortfolio)" 
                      strokeWidth={3}
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="withoutPortfolio" 
                      name="Without Portfolio"
                      stroke="var(--color-withoutPortfolio)"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ThemeAwareChart>
              </CardContent>
            </Card>
          </div>
          
          {/* Salary Increase */}
          <div className="col-span-1">
            <Card className="shadow-sm border-0 dark:border dark:border-gray-700">
              <CardHeader>
                <CardTitle>Salary Increase</CardTitle>
                <CardDescription>
                  Average percentage increase in salary offers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ThemeAwareChart height={300}>
                  <BarChart
                    data={salaryIncreaseData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="experience" />
                    <YAxis label={{ value: '% Increase', angle: -90, position: 'insideLeft' }} />
                    <Tooltip content={<ChartTooltipContent />} formatter={(value) => [`${value}%`, 'Salary Increase']} />
                    <Legend />
                    <Bar dataKey="withPortfolio" name="With Portfolio" fill="var(--color-withPortfolio)" />
                    <Bar dataKey="withoutPortfolio" name="Without Portfolio" fill="var(--color-withoutPortfolio)" />
                  </BarChart>
                </ThemeAwareChart>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="p-6 bg-primary/5 dark:bg-primary/10 rounded-xl max-w-3xl mx-auto">
            <p className="italic text-lg font-medium text-foreground/80">
              "Candidates with portfolio websites receive <span className="font-bold text-primary">3.5x more interview 
              invitations</span> and <span className="font-bold text-primary">75% faster responses</span> than those without. 
              Additionally, they command salary offers that are <span className="font-bold text-primary">12-18% higher</span> 
              than industry averages."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsDashboard;
