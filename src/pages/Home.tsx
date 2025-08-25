import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
  Code,
  Palette,
  Zap,
  Star,
  ArrowRight,
  Sparkles,
  Download,
  Brain,
  Cpu,
  Database,
  Terminal,
  Network,
  Bot,
  Monitor,
  CircuitBoard,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";

const Home = () => {
  const featuredProjects = useMemo(
    () => [
      {
        id: 1,
        title: "AI-Powered Code Assistant",
        description:
          "An intelligent coding companion that analyzes code patterns, suggests optimizations, and provides real-time debugging assistance using machine learning.",
        image: "/project_1.png",
        tags: [
          "Machine Learning",
          "Python",
          "React",
          "Natural Language Processing",
        ],
      },
      {
        id: 2,
        title: "Neural Network Visualizer",
        description:
          "A comprehensive visualization tool for understanding neural network architectures, training processes, and model performance with interactive 3D graphics.",
        image: "/project_2.png",
        tags: ["Deep Learning", "Data Visualization", "TensorFlow", "WebGL"],
      },
      {
        id: 3,
        title: "Smart Code Review Bot",
        description:
          "An AI-driven code review system that automatically detects bugs, security vulnerabilities, and suggests code improvements using advanced pattern recognition.",
        image: "/project_3.png",
        tags: ["AI", "Code Analysis", "DevOps", "Automation"],
      },
    ],
    []
  );

  const skills = [
    { icon: Brain, name: "AI Development", color: "text-blue-500" },
    { icon: Code, name: "Full Stack Development", color: "text-purple-600" },
    { icon: Database, name: "Data Science", color: "text-cyan-500" },
  ];

  // Add state to control the rendering and prevent flickering
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted state to true after initial render
    setMounted(true);

    // Create an Intersection Observer for scroll animations
    const observerOptions = {
      root: null, // viewport as root
      rootMargin: "0px 0px -100px 0px", // trigger a bit earlier before element is fully in view
      threshold: 0.1, // 10% of the element visible is enough to trigger
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          // Once animation is triggered, no need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Observe sections that should animate on scroll
    const featuredHeader = document.getElementById("featured-projects-header");
    const exploreSection = document.getElementById("explore-projects-section");

    // Observe all project cards
    const projectCards = [];
    featuredProjects.forEach((project) => {
      const card = document.getElementById(`project-card-${project.id}`);
      if (card) {
        observer.observe(card);
        projectCards.push(card);
      }
    });

    if (featuredHeader) observer.observe(featuredHeader);
    if (exploreSection) observer.observe(exploreSection);

    return () => {
      if (featuredHeader) observer.unobserve(featuredHeader);
      if (exploreSection) observer.unobserve(exploreSection);

      // Cleanup project card observers
      projectCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, [featuredProjects]);

  return (
    <div className="page-section active space-y-0 relative overflow-hidden min-h-screen">
      {/* Enhanced Animated Background Elements - Circuit Board Theme */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Circuit board pattern with flowing current */}
          <div
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-400/10 to-blue-600/10 rounded-full blur-3xl opacity-0 animate-fade-in"
            style={{
              animationDuration: "2s",
              animationDelay: "100ms",
              animationFillMode: "forwards",
            }}
          ></div>
          <div
            className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-600/10 rounded-full blur-3xl opacity-0 animate-fade-in"
            style={{
              animationDuration: "2s",
              animationDelay: "300ms",
              animationFillMode: "forwards",
            }}
          ></div>
          <div
            className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-cyan-600/10 rounded-full blur-3xl opacity-0 animate-fade-in"
            style={{
              animationDuration: "2s",
              animationDelay: "500ms",
              animationFillMode: "forwards",
            }}
          ></div>

          {/* Circuit trace lines */}
          <div
            className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-emerald-400/5 to-green-500/5 rounded-lg blur-2xl animate-float opacity-0 animate-fade-in"
            style={{
              animationDuration: "2s",
              animationDelay: "700ms",
              animationFillMode: "forwards",
            }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-yellow-400/5 to-amber-500/5 rounded-lg blur-2xl animate-float opacity-0 animate-fade-in"
            style={{
              animationDuration: "2s",
              animationDelay: "900ms",
              animationFillMode: "forwards",
            }}
          ></div>

          {/* Animated current flow lines */}
          <div
            className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent opacity-0 animate-fade-in electrical-wire"
            style={{
              animationDuration: "2s",
              animationDelay: "1100ms",
              animationFillMode: "forwards",
            }}
          >
            <div className="absolute top-0 w-2 h-2 bg-emerald-500 rounded-full animate-current-flow-vertical"></div>
            <div
              className="absolute top-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-current-flow-vertical"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute top-1/2 w-1 h-1 bg-blue-400 rounded-full animate-current-flow-vertical"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-3/4 w-1 h-1 bg-cyan-400 rounded-full animate-current-flow-vertical"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
          <div
            className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent opacity-0 animate-fade-in electrical-wire"
            style={{
              animationDuration: "2s",
              animationDelay: "1300ms",
              animationFillMode: "forwards",
            }}
          >
            <div className="absolute left-0 w-2 h-2 bg-yellow-500 rounded-full animate-current-flow"></div>
            <div
              className="absolute left-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-current-flow"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="absolute left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-current-flow"
              style={{ animationDelay: "0.6s" }}
            ></div>
            <div
              className="absolute left-3/4 w-1 h-1 bg-cyan-400 rounded-full animate-current-flow"
              style={{ animationDelay: "0.9s" }}
            ></div>
          </div>

          {/* Additional circuit elements */}
          <div
            className="absolute top-1/4 right-1/3 w-4 h-4 border-2 border-emerald-400/50 rounded-full opacity-0 animate-fade-in electrical-component"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-6 h-6 border-2 border-yellow-400/50 rounded-sm opacity-0 animate-fade-in electrical-component"
            style={{ animationDelay: "1.7s" }}
          ></div>
          <div
            className="absolute top-2/3 right-1/4 w-3 h-3 border-2 border-blue-400/50 rounded-full opacity-0 animate-fade-in electrical-component"
            style={{ animationDelay: "1.9s" }}
          ></div>
        </div>
      )}

      {/* Hero Section - Optimized to prevent flickering */}
      <section className="relative flex flex-col items-center text-center space-y-8 py-20 md:py-32">
        {/* Enhanced Floating AI Elements */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Brain
              className="absolute top-20 left-20 w-4 h-4 text-blue-400 animate-bounce-slow opacity-0 animate-fade-in"
              style={{ animationDelay: "1s" }}
            />
            <Code
              className="absolute top-32 right-32 w-3 h-3 text-purple-400 animate-float opacity-0 animate-fade-in"
              style={{ animationDelay: "1.2s" }}
            />
            <Cpu
              className="absolute bottom-40 left-1/4 w-5 h-5 text-cyan-400 animate-float-reverse opacity-0 animate-fade-in"
              style={{ animationDelay: "1.4s" }}
            />
            <Database
              className="absolute bottom-20 right-1/4 w-4 h-4 text-blue-400 animate-bounce-slow opacity-0 animate-fade-in"
              style={{ animationDelay: "1.6s" }}
            />
            <Terminal
              className="absolute top-1/2 left-10 w-3 h-3 text-purple-400 animate-float opacity-0 animate-fade-in"
              style={{ animationDelay: "1.8s" }}
            />
            <Network
              className="absolute top-3/4 right-20 w-4 h-4 text-cyan-400 animate-float-reverse opacity-0 animate-fade-in"
              style={{ animationDelay: "2s" }}
            />
          </div>
        )}

        <div className="relative z-10 space-y-6">
          <div
            className="animate-fade-in"
            style={{ animationDuration: "500ms" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight">
              <span className="block">Hello, I'm</span>
              <span className="block ai-text-gradient">Ankit Kumar</span>
            </h1>
          </div>

          <div
            className="animate-fade-in"
            style={{ animationDuration: "800ms", animationDelay: "200ms" }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px] leading-relaxed">
              An{" "}
              <span className="text-blue-500 font-semibold">AI Developer</span>,{" "}
              <span className="text-purple-600 font-semibold">
                Full Stack Engineer
              </span>
              , and{" "}
              <span className="text-cyan-500 font-semibold">
                Innovation Architect
              </span>{" "}
              passionate about building intelligent software solutions.
            </p>
          </div>

          {/* Enhanced Skills Icons - Optimized to prevent flickering */}
          {mounted && (
            <div
              className="flex justify-center space-x-8 py-8 opacity-0 animate-fade-in"
              style={{
                animationDuration: "1s",
                animationDelay: "400ms",
                animationFillMode: "forwards",
              }}
            >
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center space-y-3 group cursor-pointer"
                >
                  <div className="relative p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                    {/* Circuit glow effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
                        skill.color === "text-emerald-500"
                          ? "from-emerald-500/20"
                          : skill.color === "text-yellow-500"
                          ? "from-yellow-500/20"
                          : "from-blue-500/20"
                      } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                    <skill.icon
                      className={`w-7 h-7 ${skill.color} relative z-10 group-hover:scale-110 transition-transform duration-300`}
                    />
                    {/* Electric spark effect */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-current rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-pulse"></div>
                  </div>
                  <div className="text-center">
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 block">
                      {skill.name.split(" ")[0]}
                    </span>
                    <span className="text-xs text-muted-foreground/70 group-hover:text-muted-foreground transition-colors duration-300">
                      {skill.name.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
            style={{
              animationDuration: "1s",
              animationDelay: "600ms",
              animationFillMode: "forwards",
            }}
          >
            <Button
              asChild
              size="lg"
              className="ai-button-primary rounded-full px-8 ai-hover-effect group"
            >
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="ai-button-secondary rounded-full px-8"
            >
              <Link to="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        className="py-20 animate-fade-in relative"
        style={{ animationDelay: "200ms" }}
      >
        {/* Enhanced AI Elements for featured section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Brain
            className="absolute top-10 left-1/4 w-6 h-6 text-blue-400/30 animate-float hover:text-blue-400/50 transition-colors duration-300"
            style={{ animationDelay: "1s" }}
          />
          <Code
            className="absolute top-20 right-1/3 w-4 h-4 text-purple-400/30 animate-bounce-slow hover:text-purple-400/50 transition-colors duration-300"
            style={{ animationDelay: "2s" }}
          />
          <Cpu
            className="absolute bottom-20 left-1/3 w-5 h-5 text-cyan-400/30 animate-float-reverse hover:text-cyan-400/50 transition-colors duration-300"
            style={{ animationDelay: "3s" }}
          />
          <Database
            className="absolute top-1/2 right-10 w-4 h-4 text-blue-400/30 animate-float hover:text-blue-400/50 transition-colors duration-300"
            style={{ animationDelay: "4s" }}
          />

          {/* Neural network traces */}
          <div
            className="absolute top-1/4 left-1/2 w-2 h-2 bg-blue-500/20 rounded-full animate-gentle-pulse"
            style={{ animationDelay: "2.5s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-purple-500/20 rounded-full animate-gentle-pulse"
            style={{ animationDelay: "3.5s" }}
          ></div>
        </div>

        <div
          className="text-center mb-16 relative z-10 opacity-0 translate-y-12"
          style={{
            transition: "opacity 1s ease-out, transform 1s ease-out",
            transitionDelay: "100ms",
          }}
          id="featured-projects-header"
        >
          <div className="featured-section-badge inline-flex items-center gap-2 mb-6">
            <Brain className="w-5 h-5 text-blue-500 animate-gentle-pulse" />
            <span className="text-sm font-medium ai-text-gradient">
              AI Development Portfolio
            </span>
          </div>
          <h2 className="ai-text-gradient text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[700px] mx-auto leading-relaxed">
            Discover my latest AI and software development innovations where
            artificial intelligence meets creative problem-solving, designed
            with precision and powered by cutting-edge technology
          </p>

          {/* Enhanced decorative elements */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 ai-gradient-primary rounded-full"></div>
        </div>

        <div className="projects-grid px-4">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.id}
              id={`project-card-${project.id}`}
              className="project-card-enhanced project-card-electrical group text-card-foreground opacity-0 translate-y-12"
              style={{
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                transitionDelay: `${300 + index * 200}ms`,
              }}
            >
              <div className="project-image-container rounded-t-xl">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image-enhanced object-cover w-full h-full"
                  />
                </AspectRatio>

                {/* Enhanced overlay with gradient and effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 via-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {" "}
                    <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                      <CircuitBoard className="w-4 h-4" />
                      <span>View Details</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 relative z-10 space-y-4">
                {/* Enhanced tags section */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tag}
                      className="ai-badge ai-hover-effect"
                      style={{
                        animationDelay: `${
                          700 + index * 150 + tagIndex * 50
                        }ms`,
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Enhanced title with better typography */}
                <h3 className="project-title-enhanced font-serif text-xl md:text-2xl font-bold leading-tight">
                  {project.title}
                </h3>

                {/* Enhanced description */}
                <p className="project-description-enhanced text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </CardContent>

              <CardFooter className="p-6 pt-0 relative z-10">
                <Button asChild className="ai-button-primary w-full group/btn">
                  <Link
                    to={`/projects/${project.id}`}
                    className="flex items-center justify-center gap-2"
                  >
                    <Code className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    <span className="font-medium">View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div
          className="mt-16 text-center opacity-0 translate-y-12"
          style={{
            transition: "opacity 1s ease-out, transform 1s ease-out",
            transitionDelay: "200ms",
          }}
          id="explore-projects-section"
        >
          <div className="inline-flex flex-col items-center gap-4">
            {/* Decorative line */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

            <Button
              asChild
              size="lg"
              className="ai-button-primary rounded-full px-8 py-3 text-base font-medium group ai-hover-effect"
            >
              <Link to="/projects" className="flex items-center gap-3">
                <div className="relative">
                  <Brain className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 animate-ping">
                    <Brain className="w-5 h-5 opacity-20" />
                  </div>
                </div>
                <span>Explore All Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>

            {/* Enhanced stats or additional info */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground mt-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>15+ Projects</span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center gap-1">
                <div
                  className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <span>AI Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog section removed as requested */}
    </div>
  );
};

export default Home;
