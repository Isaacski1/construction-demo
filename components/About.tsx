import React from 'react';
import { CheckCircle2, Trophy, Users, HardHat } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/seed/worker1/400/500" 
                alt="Construction Worker" 
                className="rounded shadow-lg w-full h-full object-cover translate-y-8"
              />
              <img 
                src="https://picsum.photos/seed/architect/400/500" 
                alt="Architect Plan" 
                className="rounded shadow-lg w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-6 md:p-10 rounded-full shadow-xl flex flex-col items-center justify-center text-center w-40 h-40 md:w-56 md:h-56 z-10 border-8 border-white">
              <span className="text-4xl md:text-6xl font-heading font-bold text-secondary">35+</span>
              <span className="text-secondary font-medium text-xs md:text-sm uppercase tracking-wider mt-1">Years of<br/>Experience</span>
            </div>
          </div>

          {/* Right Column: Content */}
          <div>
            <h4 className="text-primary font-heading font-bold uppercase tracking-widest text-sm mb-2">About Our Company</h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary leading-tight mb-6">
              We Are the Leader in <br/> Construction Industry
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              At BuildMax, we don't just build structures; we build trust. With over three decades of excellence, our team of certified engineers and skilled workers is dedicated to transforming your blueprints into enduring landmarks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1 shrink-0" />
                <div>
                  <h5 className="font-heading font-bold text-secondary text-lg">Quality Assurance</h5>
                  <p className="text-gray-500 text-sm">ISO certified processes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-primary mt-1 shrink-0" />
                <div>
                  <h5 className="font-heading font-bold text-secondary text-lg">Expert Team</h5>
                  <p className="text-gray-500 text-sm">Certified professionals.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Trophy className="text-primary mt-1 shrink-0" />
                <div>
                  <h5 className="font-heading font-bold text-secondary text-lg">Award Winning</h5>
                  <p className="text-gray-500 text-sm">Recognized globally.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HardHat className="text-primary mt-1 shrink-0" />
                <div>
                  <h5 className="font-heading font-bold text-secondary text-lg">Safety First</h5>
                  <p className="text-gray-500 text-sm">Zero accident policy.</p>
                </div>
              </div>
            </div>

            <a href="#about" className="inline-block bg-secondary text-white px-8 py-4 font-heading font-bold uppercase text-sm tracking-widest hover:bg-primary hover:text-secondary transition-colors">
              Read More
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
