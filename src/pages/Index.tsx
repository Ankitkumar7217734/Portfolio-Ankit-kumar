import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CircuitBoard, Briefcase, User, Zap, Cpu } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/50 via-yellow-50/30 to-blue-50/50 dark:from-emerald-950/20 dark:via-yellow-950/10 dark:to-blue-950/20 relative overflow-hidden">
      {/* Electrical Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-16 w-48 h-1 bg-gradient-to-r from-emerald-500/30 to-transparent circuit-trace"></div>
        <div className="absolute bottom-24 right-20 w-40 h-1 bg-gradient-to-l from-yellow-500/30 to-transparent circuit-trace" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-12 w-1 h-56 bg-gradient-to-b from-blue-500/30 to-transparent circuit-trace" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-20 left-1/3 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse electrical-component"></div>
        <div className="absolute bottom-32 right-1/4 w-24 h-24 bg-gradient-to-tl from-blue-400/20 to-emerald-400/20 rounded-full blur-2xl animate-pulse delay-1000 electrical-component"></div>
      </div>

      <div className="relative page-section active space-y-16 min-h-screen">
        <section className="flex flex-col items-center text-center space-y-8 py-16 md:py-24">
          <div className="relative group mb-6">
            <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/20 via-yellow-500/20 to-blue-500/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 current-flow"></div>
            <div className="relative h-28 w-28 rounded-full bg-gradient-to-r from-emerald-600 via-yellow-600 to-blue-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 electrical-component">
              <CircuitBoard className="h-14 w-14 text-white group-hover:animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight bg-gradient-to-r from-emerald-600 via-yellow-600 to-blue-600 bg-clip-text text-transparent voltage-pulse">
            <span>Ankit Kumar</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-[800px] leading-relaxed font-medium">
            Electrical Engineer & Circuit Designer
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-4xl w-full">
            <Button asChild variant="outline" className="h-36 flex flex-col items-center justify-center gap-3 p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-emerald-200/50 dark:border-emerald-800/50 hover:bg-emerald-50/80 dark:hover:bg-emerald-950/50 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:scale-105 electrical-component">
              <Link to="/about">
                <User className="h-10 w-10 mb-2 text-emerald-600" />
                <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">About Me</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Background & Skills</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-36 flex flex-col items-center justify-center gap-3 p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-yellow-200/50 dark:border-yellow-800/50 hover:bg-yellow-50/80 dark:hover:bg-yellow-950/50 hover:border-yellow-300 dark:hover:border-yellow-700 transition-all duration-300 hover:scale-105 electrical-component">
              <Link to="/projects">
                <Cpu className="h-10 w-10 mb-2 text-yellow-600" />
                <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">Projects</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Engineering Work</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="h-36 flex flex-col items-center justify-center gap-3 p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-blue-200/50 dark:border-blue-800/50 hover:bg-blue-50/80 dark:hover:bg-blue-950/50 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:scale-105 electrical-component">
              <Link to="/contact">
                <Briefcase className="h-10 w-10 mb-2 text-blue-600" />
                <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">Contact</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Get In Touch</span>
              </Link>
            </Button>
          </div>
          
          <Button asChild size="lg" className="rounded-full px-10 py-6 mt-12 bg-gradient-to-r from-emerald-600 to-yellow-600 hover:from-emerald-700 hover:to-yellow-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 text-lg current-flow">
            <Link to="/" className="flex items-center gap-3">
              <Zap className="h-5 w-5" />
              <span>Enter Portfolio</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Index;
