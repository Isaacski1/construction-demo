import React from 'react';
import { Home, Hammer, PaintBucket, Truck, Ruler, Wrench, ArrowRight } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  { id: 1, title: 'Building Construction', description: 'From foundations to finishing, we handle complete new builds.', icon: <Home size={40} /> },
  { id: 2, title: 'House Renovation', description: 'Modernize your living space with our expert renovation team.', icon: <Hammer size={40} /> },
  { id: 3, title: 'Architecture Design', description: 'Innovative blueprints and 3D modeling for your dream project.', icon: <Ruler size={40} /> },
  { id: 4, title: 'Material Supply', description: 'High-quality construction materials delivered to your site.', icon: <Truck size={40} /> },
  { id: 5, title: 'Interior Design', description: 'Creating functional and aesthetic interior spaces.', icon: <PaintBucket size={40} /> },
  { id: 6, title: 'Maintenance', description: 'Ongoing support and repair for commercial and residential units.', icon: <Wrench size={40} /> },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-primary font-heading font-bold uppercase tracking-widest text-sm mb-2">What We Do</h4>
          <h2 className="text-4xl font-heading font-bold text-secondary">Our Premium Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 group hover:bg-secondary transition-all duration-300 shadow-sm border-b-4 border-transparent hover:border-primary">
              <div className="text-primary mb-6 group-hover:text-primary transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary group-hover:text-white mb-4 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-400 mb-6 transition-colors">
                {service.description}
              </p>
              <a href="#" className="flex items-center gap-2 font-heading font-bold text-sm uppercase text-secondary group-hover:text-primary transition-colors">
                Read More <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
