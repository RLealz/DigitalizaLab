import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-2 rounded-full font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-hover focus:ring-primary",
        secondary: "bg-white text-primary border border-primary hover:bg-gray-50 focus:ring-primary",
        outline: "bg-transparent text-white border border-white hover:bg-white/10 focus:ring-white",
        ghost: "bg-transparent text-primary hover:bg-primary/10",
    };

    return (
        <motion.button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
