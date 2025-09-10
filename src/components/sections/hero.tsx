import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="flex flex-col items-center justify-center">
              <img src="/favicon.png" alt="Favicon Logo" className="h-56 w-56 mb-10 mt-[-40px] rounded-full shadow" />
              <span className="text-gradient">Shanyu Pilli</span>
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
            Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about exploring new technologies every day
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProjects}
              className="glow-hover bg-gradient-to-r from-electric-blue to-neon-purple hover:from-electric-blue/80 hover:to-neon-purple/80 text-white px-8 py-3 text-lg font-semibold"
              size="lg"
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
           {/*
           <Button 
                variant="outline"
                 asChild  // This allows the Button to render as a link
                >
  <a 
    href="public/resume.pdf" 
    download="Shanyu_Pilli_Resume.pdf"
    target="_blank"
  >
    <Download className="mr-2 h-5 w-5" />
    Download Resume
  </a>
</Button>
           */}

          </div>

          <div className="flex justify-center space-x-6">
<a 
  href="https://github.com/Shanyu-pilli" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="glass hover:glass-intense p-3 rounded-full glow-hover transition-smooth"
  aria-label="GitHub"
>
  <Github className="h-6 w-6" />
</a>

<a 
  href="http://www.linkedin.com/in/shanyu-pilli-889b1a287" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="glass hover:glass-intense p-3 rounded-full glow-hover transition-smooth"
  aria-label="LinkedIn"
>
  <Linkedin className="h-6 w-6" />
</a>

<a 
  href="shanyuseshu@gmail.com" 
  className="glass hover:glass-intense p-3 rounded-full glow-hover transition-smooth"
  aria-label="Email"
>
  <Mail className="h-6 w-6" />
</a>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="glass p-2 rounded-full">
          <ArrowDown className="h-6 w-6 text-electric-blue" />
        </div>
      </button>
    </section>
  )
}