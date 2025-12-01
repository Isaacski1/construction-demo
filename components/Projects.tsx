import React, { useState } from 'react';
import { Project } from '../types';

const projectsData: Project[] = [
  { 
    id: 1, 
    title: 'Accra-Kumasi Highway Expansion', 
    category: 'Infrastructure', 
    imageUrl: 'https://i.pinimg.com/736x/65/1d/26/651d2673dc1238faa5133dba76e89528.jpg' 
  },
  { 
    id: 2, 
    title: 'Airport City Office Complex', 
    category: 'Commercial', 
    imageUrl: 'https://i.pinimg.com/1200x/a3/2d/d7/a32dd7d9982ca378a38f5d2bbeacbe08.jpg' 
  },
  { 
    id: 3, 
    title: 'East Legon Executive Villa', 
    category: 'Residential', 
    imageUrl: 'https://i.pinimg.com/736x/e1/2d/9c/e12d9c118ab200f989ab8833a1865b3f.jpg' 
  },
  { 
    id: 4, 
    title: 'Cantonments Family Residence', 
    category: 'Residential', 
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 5, 
    title: 'Tema Foundation Project', 
    category: 'Industrial', 
    imageUrl: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 6, 
    title: 'Spintex Concrete Works', 
    category: 'Industrial', 
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop' 
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered on mobile, aligned left/right on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12">
          <div className="text-center md:text-left">
            <h4 className="text-primary font-heading font-bold uppercase tracking-widest text-sm mb-2">Our Portfolio</h4>
            <h2 className="text-4xl font-heading font-bold text-secondary">Latest Projects</h2>
          </div>
          
          <div className="flex gap-2 mt-6 md:mt-0 flex-wrap justify-center md:justify-start">
            {['All', 'Residential', 'Commercial', 'Industrial', 'Infrastructure'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${
                  filter === cat 
                    ? 'text-primary border-primary' 
                    : 'text-gray-500 border-transparent hover:text-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <span className="text-primary font-bold uppercase text-xs tracking-wider mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-heading font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;