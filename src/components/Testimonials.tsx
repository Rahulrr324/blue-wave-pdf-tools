
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "BlueWave PDF has completely transformed how I handle documents at work. The tools are intuitive and save me hours of manual work every week.",
      author: "Sarah Johnson",
      role: "Marketing Manager"
    },
    {
      quote: "As a student, I needed a reliable tool to manage my research papers and assignments. BlueWave PDF exceeded my expectations with its speed and ease of use.",
      author: "Michael Chen",
      role: "Graduate Student"
    },
    {
      quote: "The ability to quickly convert between file formats has been invaluable for our team. BlueWave PDF is now an essential part of our document workflow.",
      author: "David Rodriguez",
      role: "Project Coordinator"
    }
  ];

  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-3">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1667 16.6667C14.1667 10.8333 18.8333 10 18.8333 10C18.8333 10 18 10.8333 18 16.6667C18 22.5 21.8333 22.5 21.8333 22.5C19.6667 22.5 14.1667 22.5 14.1667 16.6667Z" fill="#E0EFFE"/>
                  <path d="M25.8333 16.6667C25.8333 10.8333 30.5 10 30.5 10C30.5 10 29.6667 10.8333 29.6667 16.6667C29.6667 22.5 33.5 22.5 33.5 22.5C31.3333 22.5 25.8333 22.5 25.8333 16.6667Z" fill="#E0EFFE"/>
                </svg>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-medium">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
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
