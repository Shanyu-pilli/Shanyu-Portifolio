import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud,
  GitBranch,
  Brain,
  Terminal,
  Cpu,
  Users,
  MessageCircle,
  Target,
  Lightbulb,
  Palette,
  BookOpen
} from "lucide-react"
import { ParticlesBackground } from "../particles-background"

const technicalSkills = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "React", level: "", description: "Component-based UI development" },
      { name: "TypeScript", level: "", description: "Type-safe JavaScript development" },
      { name: "Tailwind CSS", level: "", description: "Utility-first CSS framework" },
      { name: "Next.js", level: "", description: "Full-stack React framework" }
    ],
    color: "coral"
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "LangChain", level: "", description: "LLM application development" },
      { name: "PyTorch", level: "", description: "Deep learning framework" },
      { name: "Transformers", level: "", description: "NLP model architecture" },
      { name: "RAG Systems", level: "", description: "Retrieval-augmented generation" }
    ],
    color: "golden-yellow"
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      { name: "Python", level: "", description: "Backend development & AI/ML" },
      { name: "Node.js", level: "", description: "JavaScript runtime environment" },
      { name: "PostgreSQL", level: "", description: "Relational database management" },
      { name: "API Development", level: "", description: "RESTful and GraphQL APIs" }
    ],
    color: "soft-pink"
  },
  {
    title: "Development Tools",
    icon: Terminal,
    skills: [
      { name: "Git", level: "", description: "Version control system" },
      { name: "Docker", level: "", description: "Containerization platform" },
      { name: "AWS", level: "", description: "Cloud computing services" },
      { name: "Linux", level: "", description: "Unix-like operating system" }
    ],
    color: "coral"
  }
]

const softSkills = [
  {
    title: "Communication",
    icon: MessageCircle,
    skills: [
      { name: "Technical Writing", description: "Clear documentation and explanations" },
      { name: "Presentation", description: "Effective project demos and pitches" },
      { name: "Cross-functional Collaboration", description: "Working with diverse teams" }
    ],
    color: "golden-yellow"
  },
  {
    title: "Problem Solving",
    icon: Lightbulb,
    skills: [
      { name: "Analytical Thinking", description: "Breaking down complex problems" },
      { name: "Creative Solutions", description: "Innovative approaches to challenges" },
      { name: "Research & Learning", description: "Quick adaptation to new technologies" }
    ],
    color: "soft-pink"
  },
  {
    title: "Leadership",
    icon: Users,
    skills: [
      { name: "Project Management", description: "End-to-end project delivery" },
      { name: "Mentoring", description: "Guiding junior developers" },
      { name: "Initiative", description: "Self-directed learning and improvement" }
    ],
    color: "coral"
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <ParticlesBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Capabilities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I love blending coding skills with clear communication to turn ideas into real solutions that work for both people and technology
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((category, index) => (
              <div 
                key={category.title}
                className="glass glow-hover p-6 rounded-xl border border-white/10 backdrop-blur-md hover:border-electric-blue/30 transition-smooth group relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
                <div className="flex items-center mb-4 relative z-10">
                  <div className={`p-3 rounded-lg bg-${category.color}/10 border border-${category.color}/20 text-${category.color} mr-3 group/icon`}>
                      <category.icon className="h-5 w-5 text-blue-500 transition-colors duration-300 group-hover:text-red-500" />
                  </div>
                  <h4 className="font-bold text-foreground group-hover:text-${category.color} transition-colors">{category.title}</h4>
                </div>
                <div className="space-y-3 relative z-10">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-sm text-foreground">{skill.name}</span>
                        <span className={`text-xs px-2 py-1 rounded bg-${category.color}/10 text-${category.color} font-medium`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Soft Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {softSkills.map((category, index) => (
              <div 
                key={category.title}
                className="glass glow-hover p-6 rounded-xl border border-white/10 backdrop-blur-md hover:border-electric-blue/30 transition-smooth group relative overflow-hidden"
                style={{ animationDelay: `${(index + technicalSkills.length) * 100}ms` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
                <div className="flex items-center mb-4 relative z-10">
                  <div className={`p-3 rounded-lg bg-${category.color}/10 border border-${category.color}/20 text-${category.color} mr-3 group/icon`}>
                    <category.icon className="h-5 w-5 text-blue-500 transition-colors duration-300 group-hover:text-red-500" />
                  </div>
                  <h4 className="font-bold text-foreground group-hover:text-${category.color} transition-colors">{category.title}</h4>
                </div>
                <div className="space-y-3 relative z-10">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <span className="font-semibold text-sm text-foreground block">{skill.name}</span>
                      <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Technologies - Minimalist Tags */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Streamlit", "Mistral AI", "Hono", "Gemini API", 
              "RandomForest", "News API", "Vectorization", "RAG", "NLP"
            ].map((tech, idx) => (
              <div key={tech} className="glass glow-hover rounded-full border border-white/10 backdrop-blur-md hover:border-electric-blue/30 transition-smooth group relative overflow-hidden px-3 py-1">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                <span className="relative z-10 text-muted-foreground group-hover:text-red-500 text-sm font-medium cursor-default hover:scale-105 transition-all duration-200">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    )
  }
// ...existing code...