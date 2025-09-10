import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid md:grid-cols-3 gap-4 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-2">
              Shanyu Pilli
            </h3>
            <p className="text-muted-foreground text-sm">
              Software Engineer passionate about exploring new technologies
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex justify-center space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-electric-blue transition-smooth text-sm">About</a>
              <a href="#skills" className="text-muted-foreground hover:text-electric-blue transition-smooth text-sm">Skills</a>
              <a href="#projects" className="text-muted-foreground hover:text-electric-blue transition-smooth text-sm">Projects</a>
              <a href="#contact" className="text-muted-foreground hover:text-electric-blue transition-smooth text-sm">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a 
              href="https://github.com/Shanyu-pilli" 
              className="glass p-3 rounded-full glow-hover transition-smooth hover:bg-gradient-to-r hover:from-electric-blue hover:to-neon-cyan hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shanyu-pilli-889b1a287" 
              className="glass p-3 rounded-full glow-hover transition-smooth hover:bg-gradient-to-r hover:from-neon-purple hover:to-electric-blue hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shanyuseshu@gmail.com&su=Hello%20Shanyu&body=I%20want%20to%20connect%20with%20you" 
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-full glow-hover transition-smooth hover:bg-gradient-to-r hover:from-neon-cyan hover:to-neon-purple hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

  <div className="border-t border-border/30 mt-3 pt-3 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center">
            © {currentYear} Shanyu Pilli. Made with{" "}
            <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />{" "}
            and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  )
}