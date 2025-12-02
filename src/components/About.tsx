import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-gray-900">About Me</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a UX designer based in San Francisco, specializing in
                creating meaningful digital experiences. My journey in design
                started with a curiosity about how people interact with
                technology and has evolved into a passion for creating products
                that make a difference.
              </p>
              <p>
                I believe great design is invisible—it just works. My approach
                combines user research, data-driven insights, and creative
                problem-solving to deliver solutions that are both innovative
                and practical.
              </p>
              <p>
                When I'm not designing, you can find me exploring local coffee
                shops, sketching in my notebook, or experimenting with new design
                tools and techniques.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1716703432522-d6d2aab1c993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ2NTE0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
