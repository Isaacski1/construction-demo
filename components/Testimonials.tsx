import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  { 
    id: 1, 
    name: 'John Doe', 
    role: 'CEO, RealEstate Co.', 
    content: 'BuildMax transformed our office space completely. Their attention to detail and adherence to timeline was impressive.', 
    avatar: 'https://picsum.photos/seed/user1/100/100' 
  },
  { 
    id: 2, 
    name: 'Sarah Smith', 
    role: 'Homeowner', 
    content: 'We hired them for our kitchen renovation. The team was professional, clean, and the result is stunning. Highly recommended!', 
    avatar: 'https://picsum.photos/seed/user2/100/100' 
  },
  { 
    id: 3, 
    name: 'Michael Brown', 
    role: 'Architect', 
    content: 'As an architect, I appreciate their structural integrity and ability to execute complex designs without cutting corners.', 
    avatar: 'https://picsum.photos/seed/user3/100/100' 
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-secondary text-white relative">
      <div className="absolute top-0 right-0 p-10 opacity-5">
        <Quote size={200} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-primary font-heading font-bold uppercase tracking-widest text-sm mb-2">Testimonials</h4>
          <h2 className="text-4xl font-heading font-bold">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-[#2A2A2A] p-8 rounded border-b-4 border-primary">
              <div className="flex text-primary mb-4">
                {[1, 2, 3, 4, 5].map(star => <span key={star}>★</span>)}
              </div>
              <p className="text-gray-300 italic mb-8 min-h-[80px]">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary" />
                <div>
                  <h5 className="font-heading font-bold text-lg">{t.name}</h5>
                  <p className="text-gray-500 text-xs uppercase">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
