import { useState } from "react"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [status, setStatus] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("")
    try {
      const response = await fetch("https://formspree.io/f/xyzplvdv", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        setStatus("Message sent!")
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("Failed to send message.")
      }
    } catch {
      setStatus("Failed to send message.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or just say hello. I'm always excited to connect with fellow developers and innovators.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently open to new opportunities and exciting projects. 
                Whether you have a question, want to collaborate, or just want to chat about technology, feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="glass-intense p-3 rounded-xl mr-4 group-hover:bg-gradient-to-r group-hover:from-electric-blue group-hover:to-neon-cyan transition-smooth">
                    <Mail className="h-5 w-5 group-hover:text-white transition-smooth" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">shanyuseshu@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="glass-intense p-3 rounded-xl mr-4 group-hover:bg-gradient-to-r group-hover:from-neon-purple group-hover:to-electric-blue transition-smooth">
                    <MapPin className="h-5 w-5 group-hover:text-white transition-smooth" />
                  </div>
                  <div>
                    <p className="font-medium">Current Location</p>
                    <p className="text-muted-foreground">Razole, Andhra Pradesh</p>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="glass-intense p-3 rounded-xl mr-4 group-hover:bg-gradient-to-r group-hover:from-neon-cyan group-hover:to-neon-purple transition-smooth">
                    <Phone className="h-5 w-5 group-hover:text-white transition-smooth" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 9573622789</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-6 rounded-2xl">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Shanyu-pilli" 
                  className="glass-intense p-3 rounded-xl glow-hover transition-smooth hover:bg-gradient-to-r hover:from-electric-blue hover:to-neon-cyan hover:text-white"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/shanyu-pilli-889b1a287" 
                  className="glass-intense p-3 rounded-xl glow-hover transition-smooth hover:bg-gradient-to-r hover:from-neon-purple hover:to-electric-blue hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://x.com/ShanyuP21140" 
                  className="glass-intense p-3 rounded-xl glow-hover transition-smooth hover:bg-gradient-to-r hover:from-neon-cyan hover:to-neon-purple hover:text-white"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/shanyu.pilli/" 
                  className="glass-intense p-3 rounded-xl glow-hover transition-smooth hover:bg-gradient-to-r hover:from-neon-cyan hover:to-neon-purple hover:text-white"
                  aria-label="instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>  
                <a 
                  href="https://www.facebook.com/shanyu.pilli.1" 
                  className="glass-intense p-3 rounded-xl glow-hover transition-smooth hover:bg-gradient-to-r hover:from-neon-cyan hover:to-neon-purple hover:text-white"
                  aria-label="facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>              
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="glass-intense border-0 bg-transparent focus:ring-2 focus:ring-electric-blue/50"
                  required
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="glass-intense border-0 bg-transparent focus:ring-2 focus:ring-electric-blue/50"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="glass-intense border-0 bg-transparent focus:ring-2 focus:ring-electric-blue/50 resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-electric-blue to-neon-purple hover:from-electric-blue/80 hover:to-neon-purple/80 text-white py-3 text-lg font-semibold glow-hover transition-smooth"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
              {status && <p className="mt-4 text-center text-sm text-muted-foreground">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}