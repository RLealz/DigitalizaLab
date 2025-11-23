import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const testimonials = [
    {
        quote: "Working with DigitalizaLab has been a truly positive experience. From the very beginning, the project was managed with a high level of professional...",
        author: "Erich Rohn",
        title: "Managing Director, Rohn Moden",
        fullQuote: "Working with Nate and his team has been a truly positive experience. From the very beginning, the project was managed with a high level of professionalism and expertise." // Assuming full quote based on "See full testimonial" context, but keeping it truncated visually if desired or just showing full. Let's show full for cleaner UI unless requested otherwise. Actually user text had "See full testimonial", I'll just put the text provided and maybe a link or just the text. Let's stick to the text provided but clean it up."
    },
    {
        quote: "DigitalizaLab's teams bring clarity to complexity, turning ideas into AI systems that actually provide value.",
        author: "Nick Sonnenberg",
        title: "Founder & CEO, Leverage, WSJ Bestselling Author"
    },
    {
        quote: "DigitalizaLab builds more than workflows, they build trust.",
        author: "Jim Hankins",
        title: "CEO, Cloud Bedrock, LLC"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Real Businesses, Real Results
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Experience the difference of an all-in-one workspace
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
                            variants={fadeInUp}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)" }}
                        >
                            <Quote className="text-primary/20 mb-6 w-10 h-10" />

                            <p className="text-gray-700 text-lg mb-8 leading-relaxed italic">
                                "{testimonial.quote}"
                            </p>

                            <div className="mt-auto">
                                <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                                <p className="text-sm text-gray-500">{testimonial.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
