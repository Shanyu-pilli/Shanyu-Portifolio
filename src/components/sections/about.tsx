import { Code, Coffee, Lightbulb, Rocket } from "lucide-react"
import profilePhoto from "@/assets/profile-photo.jpg"

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass p-8 rounded-2xl animate-slide-in-right">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I'm a software engineer passionate about learning, building, and exploring emerging 
                technologies in my daily life. Every day brings new opportunities to discover 
                innovative solutions and push the boundaries of what's possible.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                My journey in technology is driven by curiosity and a desire to create 
                meaningful software that makes a difference. I believe in continuous learning 
                and staying at the forefront of technological advancement.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-xl text-center glow-hover transition-smooth">
                <Code className="h-8 w-8 text-electric-blue mx-auto mb-3" />
                <h3 className="font-semibold text-sm">Clean Code</h3>
              </div>
              <div className="glass p-6 rounded-xl text-center glow-hover transition-smooth">
                <Coffee className="h-8 w-8 text-neon-cyan mx-auto mb-3" />
                <h3 className="font-semibold text-sm">Problem Solving</h3>
              </div>
              <div className="glass p-6 rounded-xl text-center glow-hover transition-smooth">
                <Lightbulb className="h-8 w-8 text-neon-purple mx-auto mb-3" />
                <h3 className="font-semibold text-sm">Innovation</h3>
              </div>
              <div className="glass p-6 rounded-xl text-center glow-hover transition-smooth">
                <Rocket className="h-8 w-8 text-electric-blue mx-auto mb-3" />
                <h3 className="font-semibold text-sm">Growth</h3>  
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="glass-intense p-4 rounded-2xl animate-float">
                <img 
                  src={profilePhoto}
                  alt="Shanyu Pilli"
                  className="w-80 h-80 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-electric-blue to-neon-purple rounded-full opacity-20 animate-glow-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full opacity-30 animate-glow-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}