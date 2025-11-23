import React from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

const Hero = () => {
    return (
        <section className="relative bg-white overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-8 leading-tight">
                        We build intelligent <br className="hidden md:block" />
                        <span className="text-primary">AI Solutions</span> designed <br className="hidden md:block" />
                        for business growth.
                    </h1>
                    <motion.p
                        className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 mb-10"
                        variants={fadeInUp}
                    >
                        Unlock untapped potential with safe, responsible, and powerful AI solutions.
                    </motion.p>
                    <motion.div
                        className="flex justify-center gap-4"
                        variants={fadeInUp}
                    >
                        <Button variant="primary" className="px-8 py-4 text-lg">Get Started</Button>
                        <Button variant="secondary" className="px-8 py-4 text-lg">Learn More</Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                ></motion.div>
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-40 -left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
                ></motion.div>
            </div>
        </section>
    );
};

export default Hero;
