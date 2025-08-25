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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500 electrical-wire"></div>
          <div className="absolute top-20 left-20 w-32 h-1 bg-gradient-to-r from-emerald-500/30 to-transparent circuit-trace"></div>
          <div className="absolute bottom-32 right-24 w-24 h-1 bg-gradient-to-l from-yellow-500/30 to-transparent circuit-trace" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 py-20">
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl p-8 lg:p-12 border border-white/30 dark:border-gray-700/30 shadow-2xl text-center electrical-component">
            <div className="mb-8 animate-fade-in">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 electrical-component">
                <CircuitBoard className="h-10 w-10 text-white animate-pulse" />
              </div>
              <h1 className="text-4xl font-serif font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Project Not Found
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-[600px] mx-auto leading-relaxed">
                Sorry, the engineering project you're looking for doesn't exist or has been moved. Explore our other amazing projects instead!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Button asChild size="lg" className="project-button-enhanced">
                <Link to="/projects" className="flex items-center gap-2">
                  <ArrowLeft size={18} />
                  <span>Back to Projects</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-white/30 dark:border-gray-700/30 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                <Link to="/" className="flex items-center gap-2">
                  <Eye size={18} />
                  <span>Go Home</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Function to get project-specific features based on tags and content
  const getProjectFeatures = (project: typeof projectsData[0]) => {
    const features = [];
    
    if (project.tags.includes("Power Systems") || project.tags.includes("IoT")) {
      features.push({ icon: "⚡", text: "Power Control Systems" });
    }
    if (project.tags.includes("Embedded Systems") || project.tags.includes("Microcontrollers")) {
      features.push({ icon: "�", text: "Embedded Programming" });
    }
    if (project.tags.includes("MATLAB") || project.tags.includes("SPICE")) {
      features.push({ icon: "�", text: "Circuit Simulation" });
    }
    if (project.tags.includes("PLC") || project.tags.includes("Industrial Automation")) {
      features.push({ icon: "🏭", text: "Industrial Automation" });
    }
    if (project.tags.includes("Signal Processing")) {
      features.push({ icon: "�", text: "Digital Signal Processing" });
    }
    
    // Default features if none match
    if (features.length === 0) {
      features.push(
        { icon: "🔧", text: "Engineering Design" },
        { icon: "⚡", text: "High Performance" },
        { icon: "🔌", text: "Electrical Systems" },
        { icon: "📊", text: "Technical Analysis" }
      );
    }
    
    return features;
  };

  // Get project metrics
  const getProjectMetrics = (project: typeof projectsData[0]) => {
    return {
      complexity: project.tags.length > 4 ? "Advanced" : project.tags.length > 2 ? "Intermediate" : "Beginner",
      duration: project.tags.includes("Industrial Automation") ? "8-12 weeks" : project.tags.includes("Power Systems") ? "6-10 weeks" : "4-8 weeks",
      category: project.tags.includes("PLC") ? "Industrial System" : project.tags.includes("IoT") ? "Smart System" : "Engineering Project"
    };
  };

  const projectFeatures = getProjectFeatures(project);
  const projectMetrics = getProjectMetrics(project);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/50 via-yellow-50/30 to-blue-50/50 dark:from-emerald-950/20 dark:via-yellow-950/10 dark:to-blue-950/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse electrical-component"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000 electrical-component"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500 electrical-wire"></div>
        <div className="absolute top-20 left-20 w-32 h-1 bg-gradient-to-r from-emerald-500/30 to-transparent circuit-trace"></div>
        <div className="absolute bottom-32 right-24 w-24 h-1 bg-gradient-to-l from-yellow-500/30 to-transparent circuit-trace" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8 animate-fade-in">
          <Button asChild variant="outline" className="backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-white/30 dark:border-gray-700/30 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 project-action-button">
            <Link to="/projects" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              <span className="font-medium">Back to Projects</span>
            </Link>
          </Button>
        </div>

        {/* Compact Hero Section */}
        <div className="relative mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="project-detail-card relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-xl p-4 lg:p-6 border border-white/30 dark:border-gray-700/30 shadow-lg">
            
            <div className="grid lg:grid-cols-5 gap-6">
              {/* Compact Project Image */}
              <div className="lg:col-span-2">
                <div className="relative overflow-hidden rounded-lg group">
                  <AspectRatio ratio={4 / 3}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-detail-image object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Compact Action Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {project.demoUrl && (
                        <Button asChild variant="secondary" size="sm" className="project-action-button backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 shadow-lg hover:scale-105 transition-transform duration-200">
                          <a href={project.demoUrl} target="_blank" rel="noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.codeUrl && (
                        <Button asChild variant="secondary" size="sm" className="project-action-button backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 shadow-lg hover:scale-105 transition-transform duration-200">
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
              <div className="lg:col-span-3 space-y-6">
                {/* Title and Tags */}
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-emerald-600 via-yellow-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                    {project.title}
                  </h1>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge 
                        key={tag} 
                        className="tag-enhanced px-3 py-1.5 text-sm"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Description */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Project Details Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mt-8">
              {/* Main Content */}
              <div className="project-detail-content lg:col-span-2 space-y-6">
                
                {/* Description */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Enhanced Features Section */}
                <div className="project-info-card bg-gradient-to-br from-emerald-50/50 to-yellow-50/50 dark:from-emerald-950/30 dark:to-yellow-950/30 rounded-xl p-6 border border-emerald-200/30 dark:border-emerald-800/30">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-emerald-500" />
                    Key Features
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {projectFeatures.map((feature, index) => (
                      <div key={index} className="project-feature-item flex items-center gap-3 text-gray-600 dark:text-gray-300">
                        <span className="text-lg">{feature.icon}</span>
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Highlights */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-emerald-50/50 to-yellow-50/50 dark:from-emerald-950/30 dark:to-yellow-950/30 rounded-xl p-4 border border-emerald-200/30 dark:border-emerald-800/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-5 w-5 text-emerald-500" />
                      <h4 className="font-semibold text-emerald-700 dark:text-emerald-400">Purpose</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {project.title.includes("Manager") ? "Productivity & Organization" :
                       project.title.includes("Dashboard") ? "Data Visualization & Analytics" :
                       project.title.includes("Portfolio") ? "Professional Showcase" :
                       "User Experience & Innovation"}
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50/50 to-blue-50/50 dark:from-yellow-950/30 dark:to-blue-950/30 rounded-xl p-4 border border-yellow-200/30 dark:border-yellow-800/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="h-5 w-5 text-yellow-500" />
                      <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Complexity</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {projectMetrics.complexity} Level Project
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Sidebar */}
              <div className="project-detail-sidebar">
                {/* Project Stats */}
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-white/30 dark:border-gray-700/30 shadow-lg">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Project Info
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Status
                      </span>
                      <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800">
                        Completed
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Duration
                      </span>
                      <span className="font-medium">{projectMetrics.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        Type
                      </span>
                      <span className="font-medium">{projectMetrics.category}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {project.demoUrl && (
                    <Button asChild size="lg" className="w-full project-button-enhanced">
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
                        <Globe size={18} />
                        <span className="font-medium">Live Demo</span>
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  )}
                  {project.codeUrl && (
                    <Button asChild variant="outline" size="lg" className="w-full border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
                      <a href={project.codeUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
                        <Code size={18} />
                        <span className="font-medium">Source Code</span>
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  )}
                </div>

                {/* Enhanced Technology Stack */}
                <div className="bg-gradient-to-br from-blue-50/50 to-emerald-50/50 dark:from-blue-950/30 dark:to-emerald-950/30 rounded-xl p-6 border border-blue-200/30 dark:border-blue-800/30">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5 text-blue-500" />
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <div 
                        key={tag} 
                        className="tech-stack-item px-3 py-1.5 bg-white/70 dark:bg-gray-800/70 rounded-lg text-sm font-medium border border-blue-200/50 dark:border-blue-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Insights */}
                <div className="bg-gradient-to-br from-blue-50/50 to-yellow-50/50 dark:from-blue-950/30 dark:to-yellow-950/30 rounded-xl p-6 border border-blue-200/30 dark:border-blue-800/30">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <CircuitBoard className="h-5 w-5 text-emerald-500" />
                    Highlights
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Production Ready</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Mobile Optimized</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>Modern Architecture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl p-6 lg:p-8 border border-white/30 dark:border-gray-700/30 shadow-lg">
            <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500" />
              More Projects
            </h2>
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Discover more of my work and creative solutions
              </p>
              <Button asChild size="lg" className="project-button-enhanced">
                <Link to="/projects" className="flex items-center gap-2">
                  <Eye size={18} />
                  <span className="font-medium">View All Projects</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
