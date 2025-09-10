import { GraduationCap, School, MapPin, Calendar } from "lucide-react"

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institute: "National Institute of Technology Meghalaya",
    location: "Sohra, Meghalaya",
    duration: "2022–2026",
    achievement: "Final year",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary Certificate - BIEAP - MPC",
    institute: "Sri chaitanya Junior College", 
    location: "Vijayawada, Andra Pradesh",
    duration: "2020–2022",
    achievement: "",
    icon: School,
  },
  {
    degree: "Secondary School Certificate - BSEAP",
    institute: "Akshara Public School", 
    location: "Razole, Andra Pradesh",
    duration: "2019–2020",
    achievement: "",
    icon: School,
  }
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>
        
        <div className="grid gap-6 md:gap-8">
          {educationData.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                 className="glass p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-md hover:border-electric-blue/30 transition-smooth glow-hover animate-fade-in group"
              >
                <div className="flex items-start gap-4">
                   <div className="p-3 rounded-xl bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 border border-electric-blue/30">
                     <IconComponent className="h-6 w-6 text-blue-500 transition-colors duration-300 group-hover:text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-lg text-electric-blue font-medium mb-3">
                      {item.institute}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                    {item.achievement && (
                      <p className="text-muted-foreground italic">
                        {item.achievement}
                      </p>
                    )}
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