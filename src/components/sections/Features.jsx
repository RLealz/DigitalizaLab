import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { features } from '../../data/features';

const Features = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Everything You Need In One Place
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Powerful features designed to make your business seamless.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => {
                        const isHighlighted = index === 0;
                        return (
                            <motion.div
                                key={feature.title}
                                className={`p-8 rounded-2xl border transition-all duration-300 group ${
                                    isHighlighted
                                        ? 'md:col-span-2 lg:col-span-2 bg-primary text-white border-primary'
                                        : 'bg-gray-50 border-gray-100 hover:border-primary/20'
                                }`}
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                        isHighlighted ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
                                    }`}>
                                        <feature.icon size={24} aria-hidden="true" />
                                    </div>
                                    {feature.hasArrow && (
                                        <ArrowRight
                                            className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1"
                                            aria-hidden="true"
                                        />
                                    )}
                                </div>

                                <h3 className={`text-xl font-bold mb-3 ${isHighlighted ? 'text-white' : 'text-gray-900'}`}>
                                    {feature.title}
                                </h3>
                                <p className={`leading-relaxed ${isHighlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
