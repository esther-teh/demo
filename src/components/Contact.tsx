import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-6 text-gray-900">Let's Work Together</h2>
        <p className="mb-12 text-gray-600 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach
          out!
        </p>
        <a
          href="mailto:hello@sarahchen.design"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors mb-12"
        >
          <Mail className="w-5 h-5" />
          Get In Touch
        </a>
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-md transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-md transition-all"
            aria-label="Github"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-md transition-all"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
