import { Briefcase, Code, Github } from "lucide-react"

const experienceData = [
  {
    title: "Cyber Security and Technology Intern",
    company: "Meghalaya Police Cyber Crime Division",
    period: "June 1,2025–Present",
    icon: Briefcase,
    responsibilities: [
      "Developing a browser extension to detect fake websites, using Firebase for backend integration.",
      "Collaborating with law enforcement to monitor online activities and support cyber safety initiatives.",
      " Creating vulnerability reports for the Meghalaya Police website."
    ]
  },
  {
    title: "Web Developer Intern",
    company: "Dabotics India Private Limited",
    period: "Feb 1,2024–Feb 29,2024",
    icon: Code,
    responsibilities: [
      "Completed a 1-month remote internship in front-end web development, creating a Quiz Application with Timer and a Product Landing Page.",
      "Gained hands-on experience in responsive UI design, semantic HTML, CSS, and JavaScript for dynamic functionality.",
      "Strengthened skills in writing clean, structured, and reusable front-end code."
    ]
  } 
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>
        
        <div className="grid gap-6 md:gap-8">
          {experienceData.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className="glass p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-md hover:border-electric-blue/30 transition-smooth glow-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 border border-electric-blue/30">
                    <IconComponent className="h-6 w-6 text-electric-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 flex items-center">
                      {item.title}
                      {item.title === "Web Developer Intern" && (
                        <a
                          href="https://github.com/Shanyu-pilli/Quiz-Application-with-timer"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-electric-blue hover:text-neon-purple transition-smooth"
                          aria-label="GitHub Repo"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                    </h3>
                    <p className="text-lg text-electric-blue font-medium mb-1">
                      {item.company}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {item.period}
                    </p>
                    <ul className="space-y-2">
                      {item.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-electric-blue mt-2 flex-shrink-0" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}