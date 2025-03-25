
import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { LineChart, Line, BarChart, Bar, Cell, CartesianGrid, Legend } from 'recharts';

const data = [
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

const COLORS = ['#0088FE', '#E0E0E0'];

const StatsDashboard: React.FC = () => {
  return (
    <section id="statistics" className="py-20 bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Data-Driven Career Advancement
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Our data shows that candidates with professional portfolio websites consistently outperform 
            those without, receiving more responses, interviews, and job offers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Response Rate Chart */}
          <div className="col-span-1 lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm animate-slide-up">
            <h3 className="text-xl font-semibold mb-2">Job Response Rates</h3>
            <p className="text-sm text-foreground/70 mb-6">
              Average percentage of job applications that received a response
            </p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip contentStyle={{ borderRadius: '0.5rem' }} />
                  <Area 
                    type="monotone" 
                    dataKey="withPortfolio" 
                    stackId="1"
                    stroke="#0088FE" 
                    fill="#0088FE" 
                    fillOpacity={0.6}
                    name="With Portfolio"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="withoutPortfolio" 
                    stackId="1"
                    stroke="#CCCCCC" 
                    fill="#CCCCCC" 
                    fillOpacity={0.6}
                    name="Without Portfolio"
                  />
                  <Legend />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Interview Rate */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm animate-slide-up animation-delay-200">
            <h3 className="text-xl font-semibold mb-2">Interview Success Rate</h3>
            <p className="text-sm text-foreground/70 mb-6">
              Percentage of applications that led to interviews
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
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
                  <Tooltip formatter={(value) => [`${value}%`, 'Interview Rate']} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {interviewStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Response Time */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm animate-slide-up animation-delay-400">
            <h3 className="text-xl font-semibold mb-2">Response Timeline</h3>
            <p className="text-sm text-foreground/70 mb-6">
              Cumulative percentage of responses received over time
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
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
                  <Tooltip formatter={(value) => [`${value}%`, 'Response Rate']} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="withPortfolio" 
                    stroke="#0088FE" 
                    strokeWidth={3}
                    activeDot={{ r: 8 }}
                    name="With Portfolio"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="withoutPortfolio" 
                    stroke="#CCCCCC"
                    strokeWidth={3}
                    name="Without Portfolio"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center animate-fade-in animation-delay-600">
          <p className="italic text-foreground/70 max-w-2xl mx-auto">
            "The data is clear: candidates with portfolio websites receive 3.5x more interview 
            invitations and 75% faster responses than those without."
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsDashboard;
