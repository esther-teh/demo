import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-gray-600">
            UX Designer
          </span>
        </div>
        <h1 className="mb-6 text-gray-900">
          Crafting intuitive digital experiences that users love
        </h1>
        <p className="mb-12 text-gray-600 max-w-2xl mx-auto">
          I'm Sarah Chen, a UX designer passionate about solving complex problems
          through user-centered design. With 5+ years of experience, I help
          businesses create products that are both beautiful and functional.
        </p>
        <button
          onClick={scrollToWork}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          View My Work
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
