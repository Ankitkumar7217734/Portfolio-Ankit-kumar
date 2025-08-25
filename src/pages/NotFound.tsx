
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, CircuitBoard } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/50 via-yellow-50/30 to-blue-50/50 dark:from-emerald-950/20 dark:via-yellow-950/10 dark:to-blue-950/20 relative overflow-hidden">
      {/* Electrical Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-1 bg-gradient-to-r from-emerald-500/30 to-transparent circuit-trace"></div>
        <div className="absolute bottom-32 right-16 w-32 h-1 bg-gradient-to-l from-yellow-500/30 to-transparent circuit-trace" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/4 right-20 w-1 h-48 bg-gradient-to-b from-blue-500/30 to-transparent circuit-trace" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-yellow-400/20 rounded-full blur-2xl animate-pulse electrical-component"></div>
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 animate-in fade-in duration-500">
        <div className="mb-8 relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-yellow-500/20 to-blue-500/20 rounded-full blur-xl opacity-70 current-flow"></div>
          <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl p-8 rounded-full border border-white/30 dark:border-gray-700/30 shadow-2xl electrical-component">
            <Zap className="h-20 w-20 text-emerald-600 electric-spark" />
          </div>
        </div>
        
        <h1 className="font-serif text-8xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-yellow-600 to-blue-600 bg-clip-text text-transparent voltage-pulse">404</h1>
        <h2 className="text-4xl font-medium mb-6 text-gray-800 dark:text-gray-200">Circuit Not Found</h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
          Oops! The electrical pathway you're looking for seems to have been disconnected. 
          Let's get you back to the main circuit board.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-emerald-600 to-yellow-600 hover:from-emerald-700 hover:to-yellow-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 current-flow">
            <Link to="/" className="flex items-center gap-2">
              <CircuitBoard className="h-5 w-5" />
              Back to Main Board
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all duration-300 hover:scale-105">
            <Link to="/contact" className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Contact Engineer
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
