import { ExternalLink, Github, Zap, Globe, Smartphone, Database, Brain, ShoppingCart,Code } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Parkinson disease prediction using Advance Deep Learning Models",
    description: "Deep learning-based system leveraging Siamese BiLSTM networks on gait signals (vGRF) for early and accurate Parkinson's disease prediction, outperforming traditional ML methods.",
    tech: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas"],
    icon: Brain,
    gradient: "from-blue-500 to-indigo-600",
    github: "#",
    demo: "#"
  },
  {
    title: "Quiz Application with Timer",
  description: "A responsive, lightweight web-based quiz app built with HTML, CSS, and JavaScript that presents multiple-choice questions with a countdown timer and displays the final score.",
  tech: ["HTML", "CSS", "JavaScript"],
  icon: Zap,
  gradient: "from-neon-cyan to-neon-purple",
  github: "https://github.com/Shanyu-pilli/Quiz-Application-with-timer",
  demo: "#"
  },
  {
    title: "Python Projects Portfolio",
  description: "A curated collection of hands-on Python mini-projects—from games to utilities—showcasing console-based simulations, generators, and interactive apps.",
  tech: ["Python 3.x"],
  icon: Code,
  gradient: "from-green-300 to-teal-500",
  github: "https://github.com/Shanyu-pilli/python-projects",
  demo: "#"
  },


  

  /*
  {
    title: "AI-Powered Task Manager",
    description: "A smart productivity app that uses machine learning to prioritize tasks and optimize your workflow. Features intelligent scheduling and progress tracking.",
    tech: ["React", "TypeScript", "OpenAI API", "Node.js", "PostgreSQL"],
    icon: Brain,
    gradient: "from-electric-blue to-neon-cyan",
    github: "#",
    demo: "#"
  },*/
  /*
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard.",
    tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Tailwind CSS"],
    icon: ShoppingCart,
    gradient: "from-neon-purple to-electric-blue",
    github: "#",
    demo: "#"
  },*/
  /*
  {
    title: "Real-Time Chat Application",
    description: "Scalable messaging platform with end-to-end encryption, file sharing, and real-time notifications using WebSocket technology.",
    tech: ["React", "Socket.io", "Express", "MongoDB", "Redis"],
    icon: Zap,
    gradient: "from-neon-cyan to-neon-purple",
    github: "#",
    demo: "#"
  },*/
  /*
  {
    title: "Portfolio Website Builder",
    description: "Drag-and-drop website builder specifically designed for developers and creators to showcase their work with beautiful templates.",
    tech: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Supabase", "Vercel"],
    icon: Globe,
    gradient: "from-electric-blue to-neon-purple",
    github: "#",
    demo: "#"
  },*/
/*  {
    title: "Fitness Tracking Mobile App",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features and progress analytics.",
    tech: ["React Native", "Expo", "Firebase", "TypeScript", "Zustand"],
    icon: Smartphone,
    gradient: "from-neon-purple to-neon-cyan",
    github: "#",
    demo: "#"
  },
  */
/*  {
    title: "Fitness Tracking Mobile App",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features and progress analytics.",
    tech: ["React Native", "Expo", "Firebase", "TypeScript", "Zustand"],
    icon: Database,
    gradient: "from-neon-purple to-neon-cyan",
    github: "#",
    demo: "#"
  }*/
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work, featuring innovative solutions and cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass p-6 rounded-2xl glow-hover transition-smooth group relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white mr-4`}>
                    <project.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-gradient transition-smooth">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="glass-intense px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="glass hover:glass-intense border-electric-blue/30 hover:border-electric-blue/50 transition-smooth"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white transition-smooth`}
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="glass hover:glass-intense border-electric-blue/30 hover:border-electric-blue/50 px-8 py-3 transition-smooth"
            asChild
          >
            <a href="https://github.com/Shanyu-pilli" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
      
    </section>
  )
}