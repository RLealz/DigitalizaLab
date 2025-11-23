import React from 'react';
import { Search, Code, Rocket, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const steps = [
    {
        icon: Search,
        title: 'Discovery',
        description: 'We analyze your business needs and identify opportunities where AI can drive growth and efficiency.',
    },
    {
        icon: Code,
        title: 'Development',
        description: 'Our team builds custom AI solutions tailored to your specific requirements using cutting-edge technology.',
    },
    {
        icon: Rocket,
        title: 'Deployment',
        description: 'We seamlessly integrate the solution into your existing workflow and ensure a smooth launch.',
    },
    {
        icon: BarChart,
        title: 'Optimization',
        description: 'Continuous monitoring and refinement to ensure your AI solution delivers maximum value over time.',
    },
];

const Process = () => {
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
                    <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">How It Works</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Our Process</h3>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-primary/10"
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                                <step.icon size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                            <p className="text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
