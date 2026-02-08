import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const VARIANT_STYLES = {
    primary: "bg-primary text-white hover:bg-primary-hover focus:ring-primary",
    secondary: "bg-white text-primary border border-primary hover:bg-gray-50 focus:ring-primary",
    outline: "bg-transparent text-white border border-white hover:bg-white/10 focus:ring-white",
    ghost: "bg-transparent text-primary hover:bg-primary/10",
};

const BASE_STYLES = "px-6 py-2 rounded-full font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

const Button = ({ children, variant = 'primary', className = '', type = 'button', disabled = false, ...props }) => {
    return (
        <motion.button
            type={type}
            disabled={disabled}
            className={`${BASE_STYLES} ${VARIANT_STYLES[variant] || VARIANT_STYLES.primary} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
            whileHover={disabled ? {} : { scale: 1.05 }}
            whileTap={disabled ? {} : { scale: 0.95 }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
    className: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;
