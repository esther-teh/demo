import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ProjectCard } from "./components/ProjectCard";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

const projects = [
  {
    title: "HealthHub Mobile App",
    description:
      "Redesigned the patient experience for a telehealth platform, increasing user engagement by 45%",
    category: "Mobile App Design",
    imageUrl:
      "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0NTgzNDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["UX Research", "Mobile Design", "Prototyping"],
  },
  {
    title: "E-commerce Dashboard",
    description:
      "Created an analytics dashboard for merchants to track sales, inventory, and customer insights",
    category: "Web Application",
    imageUrl:
      "https://images.unsplash.com/photo-1634807010323-4309f645e5a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0NTkyNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Data Visualization", "Web Design", "UI Design"],
  },
  {
    title: "Banking App Redesign",
    description:
      "Simplified complex financial processes with a focus on accessibility and user trust",
    category: "Mobile App Design",
    imageUrl:
      "https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzY0NjExOTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Financial UX", "Accessibility", "User Testing"],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />

      {/* Work Section */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900">Selected Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A collection of projects that showcase my approach to solving
              design challenges and creating impactful user experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2025 Sarah Chen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
