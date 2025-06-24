import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "SOFTWARE-HUB KENYA transformed our digital presence with a stunning website that perfectly represents our brand. Their team was responsive, creative, and delivered beyond our expectations.",
    author: "Sarah Kamau",
    position: "CEO",
    company: "Savanna Innovations",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    text: "The data analytics solution provided by SOFTWARE-HUB KENYA helped us uncover valuable insights that significantly improved our decision-making process. Their expertise in data science is unmatched.",
    author: "David Mwangi",
    position: "Operations Director",
    company: "East African Traders",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    text: "Working with SOFTWARE-HUB KENYA on our AI implementation was a game-changer. Their team took the time to understand our unique challenges and delivered a solution that automated key processes, saving us countless hours.",
    author: "Michelle Omondi",
    position: "Technology Director",
    company: "Health Solutions Ltd",
    image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute top-0 left-0 text-teal-400/20">
          <Quote className="h-24 w-24" />
        </div>
        
        <div className="transition-opacity duration-500">
          <div className="relative z-10 pt-10 px-6 md:px-0">
            <p className="text-slate-300 text-xl leading-relaxed text-center mb-8">
              {testimonials[currentIndex].text}
            </p>
            
            <div className="flex flex-col items-center">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].author} 
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <div className="text-center">
                <h4 className="font-semibold text-white">{testimonials[currentIndex].author}</h4>
                <p className="text-teal-400 text-sm">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-10 space-x-2">
        {testimonials.map((_, index) => (
          <button 
            key={index} 
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-teal-500' : 'bg-slate-600'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          ></button>
        ))}
      </div>
      
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button 
          onClick={prevTestimonial} 
          className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>
      
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button 
          onClick={nextTestimonial} 
          className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;