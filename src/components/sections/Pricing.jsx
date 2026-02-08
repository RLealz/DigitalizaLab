import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { pricingPlans } from '../../data/pricing';
import Button from '../ui/Button';

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">
                        Pricing
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Simple, Transparent Pricing
                    </h3>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose the plan that fits your business. Scale up anytime as your needs grow.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {pricingPlans.map((plan) => (
                        <motion.div
                            key={plan.name}
                            className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col ${
                                plan.isPopular
                                    ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20 scale-[1.02]'
                                    : 'bg-white border-gray-200 hover:border-primary/20 shadow-sm hover:shadow-xl'
                            }`}
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                        >
                            {/* Popular badge */}
                            {plan.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-white text-primary text-sm font-bold px-4 py-1 rounded-full shadow-md">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Plan header */}
                            <div className="mb-6">
                                <h4 className={`text-xl font-bold mb-2 ${
                                    plan.isPopular ? 'text-white' : 'text-gray-900'
                                }`}>
                                    {plan.name}
                                </h4>
                                <p className={`text-sm ${
                                    plan.isPopular ? 'text-blue-100' : 'text-gray-500'
                                }`}>
                                    {plan.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-8">
                                <span className={`text-4xl font-bold ${
                                    plan.isPopular ? 'text-white' : 'text-gray-900'
                                }`}>
                                    {plan.price}
                                </span>
                                {plan.period && (
                                    <span className={`text-lg ${
                                        plan.isPopular ? 'text-blue-100' : 'text-gray-500'
                                    }`}>
                                        {plan.period}
                                    </span>
                                )}
                            </div>

                            {/* Features list */}
                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <Check
                                            size={20}
                                            className={`flex-shrink-0 mt-0.5 ${
                                                plan.isPopular ? 'text-blue-200' : 'text-primary'
                                            }`}
                                            aria-hidden="true"
                                        />
                                        <span className={`${
                                            plan.isPopular ? 'text-blue-50' : 'text-gray-600'
                                        }`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Button
                                variant={plan.isPopular ? 'outline' : 'primary'}
                                className="w-full py-3 text-base"
                            >
                                {plan.cta}
                            </Button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
