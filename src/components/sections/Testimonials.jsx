import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { testimonials } from '../../data/testimonials';

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
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.author}
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
