
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";

type ThemeAwareChartProps = {
  children: React.ReactNode;
  className?: string;
  config?: Record<string, any>;
  height?: number | string;
};

const ThemeAwareChart: React.FC<ThemeAwareChartProps> = ({ 
  children, 
  className,
  config = {
    withPortfolio: { 
      label: "With Portfolio",
      theme: { light: "#0088FE", dark: "#4299e1" }
    },
    withoutPortfolio: { 
      label: "Without Portfolio",
      theme: { light: "#CCCCCC", dark: "#4a5568" } 
    }
  },
  height = 300
}) => {
  const { isDarkMode } = useTheme();
  
  // We need to handle the height prop correctly to avoid type errors
  // For number values, use template literal for height class
  // For string values, pass them directly
  const heightValue = typeof height === 'number' ? `${height}px` : height;
  
  return (
    <div className={`w-full h-[${heightValue}] ${className || ''}`}>
      <ChartContainer 
        className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 shadow-sm" 
        config={config}
      >
        {children}
      </ChartContainer>
    </div>
  );
};

// Export the ChartTooltipContent so it can be used in other files
export { ChartTooltipContent };
export default ThemeAwareChart;
