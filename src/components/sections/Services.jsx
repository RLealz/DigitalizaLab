import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { services } from '../../data/services';

const Services = () => {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">
                        What We Do
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Our Services
                    </h3>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        End-to-end AI solutions from design to deployment, fully managed by our team.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-primary/10"
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                                <service.icon size={24} aria-hidden="true" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
