import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h4 className="text-primary font-heading font-bold uppercase tracking-widest text-sm mb-2">
              Contact Us
            </h4>
            <h2 className="text-4xl font-heading font-bold text-secondary mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-600 mb-8">
              Reach out to us for a free consultation. Our team is ready to
              discuss your requirements and provide tailored solutions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white p-6 shadow-sm rounded">
                <div className="bg-primary/10 p-3 rounded text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">
                    Call Us
                  </p>
                  <p className="text-secondary font-bold text-lg">
                    +233 123 456 789
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-6 shadow-sm rounded">
                <div className="bg-primary/10 p-3 rounded text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">
                    Email Us
                  </p>
                  <p className="text-secondary font-bold text-lg">
                    projects@buildmax.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-6 shadow-sm rounded">
                <div className="bg-primary/10 p-3 rounded text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">
                    Visit Office
                  </p>
                  <p className="text-secondary font-bold text-lg">
                    East Legon, Accra Ghana
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            id="quote"
            className="bg-white p-8 md:p-12 shadow-lg rounded border-t-4 border-primary"
          >
            <h3 className="text-2xl font-heading font-bold text-secondary mb-6">
              Get A Free Quote
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-100 border-none p-4 rounded focus:ring-2 focus:ring-primary outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-100 border-none p-4 rounded focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Subject / Project Type"
                className="w-full bg-gray-100 border-none p-4 rounded focus:ring-2 focus:ring-primary outline-none"
              />
              <textarea
                rows={4}
                placeholder="Project Details"
                className="w-full bg-gray-100 border-none p-4 rounded focus:ring-2 focus:ring-primary outline-none"
              ></textarea>
              <button className="w-full bg-primary text-secondary font-bold uppercase py-4 tracking-widest hover:bg-secondary hover:text-white transition-colors">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
