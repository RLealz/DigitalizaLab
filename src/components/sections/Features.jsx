import React from 'react';
import { Bot, Workflow, LineChart, ShieldCheck, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const features = [
    {
        title: 'Custom AI agent engineering',
        description: 'We design, deploy, and maintain custom AI agents specifically tailored to your business growth goals.',
        icon: Bot,
        hasArrow: true,
        span: 'col-span-1 md:col-span-2 lg:col-span-2', // Make the first one wider if desired, or just keep uniform. Let's try uniform first but highlight it.
        // User input: "Custom AI agent engineering →"
    },
    {
        title: 'Fully Managed automation pipelines',
        description: 'Robust data infrastructure and ingestion processes are a critical component in how we build out our systems.',
        icon: Workflow,
    },
    {
        title: 'Performance analytic dashboard',
        description: 'Easily track ROI and efficiency gains with custom metrics on your AI agent\'s performance.',
        icon: LineChart,
    },
    {
        title: 'Intelligent access control',
        description: 'Manage agent permissions with your teams to ensure secure operations across your organization.',
        icon: ShieldCheck,
    },
    {
        title: 'Secure and compliant protocols',
        description: 'Technology architecture that is fully hosted in the cloud, ensuring compliance with SOC-2, ISO, and other industry standards.',
        icon: Lock,
    },
];

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
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all duration-300 group ${index === 0 ? 'md:col-span-2 lg:col-span-2 bg-primary text-white' : ''}`}
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${index === 0 ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>
                                    <feature.icon size={24} />
                                </div>
                                {feature.hasArrow && (
                                    <ArrowRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                                )}
                            </div>

                            <h3 className={`text-xl font-bold mb-3 ${index === 0 ? 'text-white' : 'text-gray-900'}`}>
                                {feature.title}
                            </h3>
                            <p className={`leading-relaxed ${index === 0 ? 'text-blue-100' : 'text-gray-600'}`}>
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
