
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Code, Globe, Rocket, ExternalLink, Github, CircuitBoard, Filter, Zap, Cpu, Battery, Cable } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  demoUrl?: string;
  codeUrl?: string;
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Smart Power Distribution System",
    description: "An intelligent power distribution system with real-time monitoring and automated load balancing. Features circuit protection, energy optimization algorithms, and remote control capabilities for residential and commercial applications.",
    image: "/src/pages/project_1.png",
    tags: ["Power Systems", "IoT", "Embedded Systems", "SCADA"],
    url: "/projects/1",
    demoUrl: "https://smart-power-system.netlify.app/",
    codeUrl: "https://github.com/Ankitkumar72177/Smart-Power-System",
  },
  {
    id: 2,
    title: "Digital Signal Processing Module",
    description: "A comprehensive DSP module for real-time signal analysis and filtering. Implements FFT algorithms, digital filters, and signal conditioning circuits with MATLAB integration and hardware implementation.",
    image: "/src/pages/project_2.png",
    tags: ["Signal Processing", "MATLAB", "C++", "FPGA"],
    url: "/projects/2",
    demoUrl: "",
    codeUrl: "",
  },
  {
    id: 3,
    title: "Motor Control System",
    description: "Advanced motor control system with variable frequency drive (VFD) implementation. Features speed control, torque regulation, and protection circuits for three-phase induction motors in industrial applications.",
    image: "/src/pages/project_3.png",
    tags: ["Motor Control", "PLC", "Power Electronics", "HMI"],
    url: "/projects/3",
    demoUrl: "https://ankitkumar72177.github.io/MotorControl/",
    codeUrl: "https://github.com/Ankitkumar72177/MotorControl",
  },
  {
    id: 4,
    title: "Circuit Analysis Simulator",
    description: "A comprehensive circuit simulation tool for analyzing DC and AC circuits. Features component modeling, transient analysis, and frequency response calculations with graphical output visualization.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    tags: ["Circuit Analysis", "SPICE", "Simulation"],
    url: "/projects/4",
    demoUrl: "https://circuit-analyzer.example.com",
  },
  {
    id: 5,
    title: "IoT Energy Monitoring System",
    description: "An IoT-based energy monitoring system for smart buildings. Tracks power consumption, identifies energy wastage patterns, and provides optimization recommendations through mobile app integration.",
    image: "https://images.unsplash.com/photo-1581091870621-54c69424031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    tags: ["IoT", "Energy Management", "Mobile App", "Sensors"],
    url: "/projects/5",
    codeUrl: "https://github.com/username/energy-monitor",
  },
  {
    id: 6,
    title: "Industrial Automation Dashboard",
    description: "A comprehensive control dashboard for industrial automation systems. Features real-time monitoring, alarm management, data logging, and remote control capabilities for manufacturing processes.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    tags: ["Industrial Automation", "SCADA", "PLC Programming"],
    url: "/projects/6",
    demoUrl: "https://automation-dashboard.example.com",
    codeUrl: "https://github.com/username/automation-dashboard",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const allTags = Array.from(new Set(projectsData.flatMap(project => project.tags)));
  
  const filteredProjects = filter 
    ? projectsData.filter(project => project.tags.includes(filter))
    : projectsData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-blue-100/30 to-blue-200/50 dark:from-slate-900/90 dark:via-blue-950/30 dark:to-blue-800/40 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse electrical-component"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-blue-700/20 rounded-full blur-3xl animate-pulse delay-1000 electrical-component"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500 electrical-wire"></div>
        {/* Circuit trace effects */}
        <div className="absolute top-10 left-10 w-32 h-1 bg-gradient-to-r from-emerald-500/30 to-transparent circuit-trace"></div>
        <div className="absolute bottom-20 right-20 w-24 h-1 bg-gradient-to-l from-yellow-500/30 to-transparent circuit-trace" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-10 w-1 h-40 bg-gradient-to-b from-blue-500/30 to-transparent circuit-trace" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12">
        
        {/* Hero Section */}
        <div className="relative mb-12 sm:mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-yellow-600/10 to-blue-600/10 rounded-2xl sm:rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/30 dark:border-emerald-700/30 shadow-2xl text-center group hover:shadow-3xl transition-all duration-500 electrical-component">
            <div className="flex justify-center mb-6">
              <div className="relative group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-yellow-600 to-blue-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500 current-flow"></div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-emerald-600 via-yellow-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg electrical-component">
                  <CircuitBoard className="h-8 w-8 sm:h-10 sm:w-10 text-white group-hover:animate-pulse" />
                </div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-emerald-600 via-yellow-600 to-blue-600 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
              Engineering Projects
            </h1>
            <div className="relative">
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A comprehensive portfolio of electrical engineering projects spanning power systems, control circuits, 
                embedded systems, and industrial automation solutions.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/20 to-transparent dark:via-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg circuit-trace"></div>
            </div>
          </div>
        </div>
        
        {/* Filter Section */}
        <div className="relative mb-8 sm:mb-12">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/30 dark:border-blue-700/30 shadow-xl electrical-component">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center electrical-component">
                <Filter className="h-4 w-4 text-white" />
              </div>
              <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Filter Projects</h2>
            </div>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <Button 
                variant={filter === null ? "default" : "outline"} 
                size="sm" 
                onClick={() => setFilter(null)}
                className={cn(
                  "rounded-full transition-all duration-300 hover:scale-105",
                  filter === null 
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg current-flow" 
                    : "hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:border-blue-300 dark:hover:border-blue-700"
                )}
              >
                All Projects
              </Button>
              {allTags.map(tag => (
                <Button 
                  key={tag}
                  variant={filter === tag ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setFilter(tag)}
                  className={cn(
                    "rounded-full transition-all duration-300 hover:scale-105",
                    filter === tag 
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg current-flow" 
                      : "hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:border-blue-300 dark:hover:border-blue-700"
                  )}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>
      
        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="project-card-compact group text-card-foreground"
              style={{
                animationDelay: `${index * 80}ms`
              }}
            >
              {/* Project Image */}
              <div className="project-image-compact rounded-t-xl overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay with quick actions */}
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.demoUrl && (
                    <Button asChild variant="secondary" size="sm" className="backdrop-blur-sm bg-white/90 dark:bg-slate-800/90 shadow-lg hover:scale-110 transition-transform duration-200">
                      <a href={project.demoUrl} target="_blank" rel="noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.codeUrl && (
                    <Button asChild variant="secondary" size="sm" className="backdrop-blur-sm bg-white/90 dark:bg-slate-800/90 shadow-lg hover:scale-110 transition-transform duration-200">
                      <a href={project.codeUrl} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              {/* Card Content */}
              <CardContent className="project-content-compact relative z-10 space-y-3">
                {/* Enhanced tags section */}
                <div className="project-tags-compact flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tag} 
                      className={cn(
                        "project-tag-compact transition-all duration-300 hover:scale-105 text-xs",
                        filter === tag 
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md current-flow" 
                          : "hover:bg-blue-200/80 dark:hover:bg-blue-900/50"
                      )}
                      style={{ animationDelay: `${index * 80 + tagIndex * 40}ms` }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Enhanced title with better typography */}
                <h3 className="project-title-compact font-serif text-lg md:text-xl font-bold leading-tight">
                  {project.title}
                </h3>
                
                {/* Enhanced description */}
                <p className="project-description-compact text-muted-foreground text-xs md:text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </CardContent>
              
              {/* Card Footer */}
              <CardFooter className="project-footer-compact relative z-10 flex flex-wrap gap-2">
                <Button 
                  asChild 
                  className="project-button-compact flex-1"
                  size="sm"
                >
                  <Link to={project.url} className="flex items-center justify-center gap-1.5">
                    <Rocket className="h-3.5 w-3.5" />
                    <span className="font-medium text-xs">View Details</span>
                  </Link>
                </Button>
                
                {project.demoUrl && (
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm" 
                    className="border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:scale-105 text-xs"
                  >
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      <Globe className="h-3.5 w-3.5 mr-1" />
                      Demo
                    </a>
                  </Button>
                )}
                
                {project.codeUrl && (
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm" 
                    className="border-yellow-200 dark:border-yellow-800 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-950/50 hover:border-yellow-300 dark:hover:border-yellow-700 transition-all duration-300 hover:scale-105 text-xs"
                  >
                    <a href={project.codeUrl} target="_blank" rel="noreferrer">
                      <Code className="h-3.5 w-3.5 mr-1" />
                      Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
