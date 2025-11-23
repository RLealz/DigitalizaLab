import React from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

const CTA = () => {
    return (
        <section className="py-24 bg-white">
            <motion.div
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                    Unlock hidden potential <br /> within your business.
                </h2>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                    Ready to transform your operations with AI? Let's build something extraordinary together.
                </p>
                <Button variant="primary" className="px-10 py-4 text-lg shadow-lg shadow-primary/20">
                    Get Started
                </Button>
            </motion.div>
        </section>
    );
};

export default CTA;
