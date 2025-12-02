import {
  Palette,
  Users,
  Lightbulb,
  BarChart3,
  Figma,
  Smartphone,
} from "lucide-react";

const skills = [
  {
    icon: Palette,
    title: "UI Design",
    description: "Creating beautiful, cohesive visual designs",
  },
  {
    icon: Users,
    title: "User Research",
    description: "Understanding user needs through interviews and testing",
  },
  {
    icon: Lightbulb,
    title: "Ideation",
    description: "Brainstorming creative solutions to design challenges",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Using metrics to inform design decisions",
  },
  {
    icon: Figma,
    title: "Prototyping",
    description: "Building interactive prototypes for validation",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Designing for all devices and screen sizes",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive skill set developed through years of experience in UX
            design and collaboration with cross-functional teams.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-2 text-gray-900">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
