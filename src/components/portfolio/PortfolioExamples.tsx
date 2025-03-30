
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const PortfolioExamples: React.FC = () => {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold">Real User Examples</h3>
        <Button variant="outline" asChild>
          <Link to="/portfolio-templates">View Gallery</Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example 1 */}
        <div className="rounded-xl overflow-hidden shadow-md group relative">
          <div className="aspect-[4/3] overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
            <h3 className="font-serif text-3xl font-semibold text-center">Professional</h3>
          </div>
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button asChild>
              <Link to="/templates/professional">View Site</Link>
            </Button>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900">
            <h4 className="font-medium">Sarah's UX Portfolio</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">UX Designer • Professional Template</p>
          </div>
        </div>
        
        {/* Example 2 */}
        <div className="rounded-xl overflow-hidden shadow-md group relative">
          <div className="aspect-[4/3] overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
            <h3 className="font-light tracking-widest uppercase text-3xl">Minimalist</h3>
          </div>
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button asChild>
              <Link to="/templates/minimalist">View Site</Link>
            </Button>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900">
            <h4 className="font-medium">David's Dev Portfolio</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Full-Stack Developer • Minimalist Template</p>
          </div>
        </div>
        
        {/* Example 3 */}
        <div className="rounded-xl overflow-hidden shadow-md group relative">
          <div className="aspect-[4/3] overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
            <h3 className="font-bold italic text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Creative</h3>
          </div>
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button asChild>
              <Link to="/templates/creative">View Site</Link>
            </Button>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900">
            <h4 className="font-medium">Jessica's Architecture Portfolio</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Architect • Creative Template</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioExamples;
