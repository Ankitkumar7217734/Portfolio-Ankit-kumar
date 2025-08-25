import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Code, Globe, ArrowLeft, ExternalLink, Github, Star, Calendar, Users, Zap, Eye, Clock, Target, Layers, CircuitBoard, Battery, Cpu } from "lucide-react";
import { projectsData } from "./Projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id || "1", 10);
  
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50/50 via-yellow-50/30 to-blue-50/50 dark:from-emerald-950/20 dark:via-yellow-950/10 dark:to-blue-950/20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse electrical-component"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000 electrical-component"></div>
          <div className="absolute top-20 left-20 w-32 h-1 bg-gradient-to-r from-emerald-500/30 to-transparent circuit-trace"></div>
          <div className="absolute bottom-32 right-24 w-24 h-1 bg-gradient-to-l from-yellow-500/30 to-transparent circuit-trace" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-xl p-6 lg:p-8 border border-white/30 dark:border-gray-700/30 shadow-lg text-center electrical-component">
            <div className="mb-6 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg electrical-component">
                <CircuitBoard className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-serif font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-3">
                Project Not Found
              </h1>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                Sorry, the engineering project you're looking for doesn't exist.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="default" className="project-button-enhanced">
                <Link to="/projects" className="flex items-center gap-2">
                  <ArrowLeft size={16} />
                  <span>Back to Projects</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="default">
                <Link to="/" className="flex items-center gap-2">
                  <Eye size={16} />
                  <span>Go Home</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Function to get project-specific features
  const getProjectFeatures = (project: typeof projectsData[0]) => {
    const features = [];
    
    if (project.tags.includes("Power Systems") || project.tags.includes("IoT")) {
      features.push({ icon: "⚡", text: "Power Control" });
    }
    if (project.tags.includes("Embedded Systems") || project.tags.includes("Microcontrollers")) {
      features.push({ icon: "�", text: "Embedded" });
    }
    if (project.tags.includes("MATLAB") || project.tags.includes("SPICE")) {
      features.push({ icon: "�", text: "Simulation" });
    }
    if (project.tags.includes("PLC") || project.tags.includes("Industrial Automation")) {
      features.push({ icon: "🏭", text: "Automation" });
    }
    if (project.tags.includes("Signal Processing")) {
      features.push({ icon: "�", text: "DSP" });
    }
    if (project.tags.includes("Motor Control")) {
      features.push({ icon: "⚙️", text: "Motor Control" });
    }
    
    // Default features if none match
    if (features.length === 0) {
      features.push(
        { icon: "🔧", text: "Engineering Design" },
        { icon: "⚡", text: "High Performance" }
      );
    }
    
    return features.slice(0, 4); // Limit to 4 features for compact layout
  };

  const projectFeatures = getProjectFeatures(project);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/50 via-yellow-50/30 to-blue-50/50 dark:from-emerald-950/20 dark:via-yellow-950/10 dark:to-blue-950/20 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-yellow-400/10 rounded-full blur-3xl electrical-component"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-blue-400/10 to-emerald-400/10 rounded-full blur-3xl electrical-component"></div>
        <div className="absolute top-16 left-16 w-40 h-1 bg-gradient-to-r from-emerald-500/20 to-transparent circuit-trace"></div>
        <div className="absolute bottom-20 right-20 w-32 h-1 bg-gradient-to-l from-yellow-500/20 to-transparent circuit-trace" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 py-6">
        {/* Compact Back Button */}
        <div className="mb-6 animate-fade-in">
          <Button asChild variant="outline" size="sm" className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-white/30 dark:border-gray-700/30 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300">
            <Link to="/projects" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              <span>Back</span>
            </Link>
          </Button>
        </div>

        {/* Compact Hero Section */}
        <div className="relative mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-xl p-4 lg:p-6 border border-white/30 dark:border-gray-700/30 shadow-lg electrical-component">
            
            <div className="grid lg:grid-cols-5 gap-6">
              {/* Compact Project Image */}
              <div className="lg:col-span-2">
                <div className="relative overflow-hidden rounded-lg group">
                  <AspectRatio ratio={4 / 3}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Compact Action Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {project.demoUrl && (
                        <Button asChild variant="secondary" size="sm" className="backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 shadow-lg">
                          <a href={project.demoUrl} target="_blank" rel="noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.codeUrl && (
                        <Button asChild variant="secondary" size="sm" className="backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 shadow-lg">
                          <a href={project.codeUrl} target="_blank" rel="noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </AspectRatio>
                </div>
              </div>

              {/* Project Header Info */}
              <div className="lg:col-span-3 space-y-4">
                {/* Title and Tags */}
                <div className="space-y-3">
                  <h1 className="text-2xl lg:text-3xl font-serif font-bold bg-gradient-to-r from-emerald-600 via-yellow-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                    {project.title}
                  </h1>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag, index) => (
                      <Badge 
                        key={tag} 
                        className="tag-enhanced px-2 py-1 text-xs"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="outline" className="px-2 py-1 text-xs">
                        +{project.tags.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                {/* Compact Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Quick Features */}
                <div className="grid grid-cols-2 gap-2">
                  {projectFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                      <span className="text-base">{feature.icon}</span>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  {project.demoUrl && (
                    <Button asChild size="sm" className="project-button-enhanced flex-1">
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
                        <Globe size={16} />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                  )}
                  {project.codeUrl && (
                    <Button asChild variant="outline" size="sm" className="flex-1 border-gray-200 dark:border-gray-700">
                      <a href={project.codeUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
                        <Code size={16} />
                        <span>Code</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Details Section */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Project Details */}
          <div className="lg:col-span-2 space-y-4">
            {/* Full Description */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-lg p-4 border border-white/30 dark:border-gray-700/30 shadow-sm electrical-component">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Zap className="h-4 w-4 text-emerald-500" />
                About This Project
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-gradient-to-br from-emerald-50/50 to-yellow-50/50 dark:from-emerald-950/30 dark:to-yellow-950/30 rounded-lg p-4 border border-emerald-200/30 dark:border-emerald-800/30 electrical-component">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-yellow-500" />
                Key Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {projectFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                    <span className="text-base">{feature.icon}</span>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Compact Sidebar */}
          <div className="space-y-4">
            {/* Project Info */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-lg p-4 border border-white/30 dark:border-gray-700/30 shadow-sm electrical-component">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Target className="h-4 w-4 text-emerald-500" />
                Info
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    Status
                  </span>
                  <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs">
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <Eye className="h-3 w-3" />
                    Type
                  </span>
                  <span className="font-medium">Engineering Project</span>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-gradient-to-br from-yellow-50/50 to-blue-50/50 dark:from-yellow-950/30 dark:to-blue-950/30 rounded-lg p-4 border border-yellow-200/30 dark:border-yellow-800/30 electrical-component">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Battery className="h-4 w-4 text-blue-500" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag, index) => (
                  <div 
                    key={tag} 
                    className="px-2 py-1 bg-white/70 dark:bg-gray-800/70 rounded text-xs font-medium border border-yellow-200/50 dark:border-yellow-700/50"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Compact More Projects */}
        <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-lg p-4 border border-white/30 dark:border-gray-700/30 shadow-sm text-center electrical-component">
            <h2 className="text-xl font-serif font-bold mb-3 flex items-center justify-center gap-2">
              <CircuitBoard className="h-5 w-5 text-emerald-500" />
              More Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Discover more engineering work
            </p>
            <Button asChild size="sm" className="project-button-enhanced">
              <Link to="/projects" className="flex items-center gap-2">
                <Eye size={16} />
                <span>View All Projects</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;