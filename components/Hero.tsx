import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-[800px] md:h-[750px] w-full bg-secondary overflow-hidden">
      {/* Background Image with Parallax-ish feel */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/736x/66/d2/e7/66d2e7bffa2751d19edbd9ba0e8557e0.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-secondary/30"></div>{" "}
        {/* Dark Overlay */}
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-start text-white">
        <div className="animate-fade-in-up">
          <p className="text-primary font-heading font-bold uppercase tracking-[0.2em] mb-4 text-sm md:text-base">
            Since 1985
          </p>
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6 max-w-3xl">
            BUILDING YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              VISION
            </span>{" "}
            INTO REALITY
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mb-10 leading-relaxed">
            We are a leading construction company delivering top-tier projects
            with a commitment to quality, safety, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="bg-primary text-secondary px-8 py-4 font-heading font-bold uppercase text-sm tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 group"
            >
              Our Services
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 font-heading font-bold uppercase text-sm tracking-widest hover:bg-white hover:text-secondary transition-colors text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Bottom shape */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white clip-path-slant"></div>
    </section>
  );
};

export default Hero;
