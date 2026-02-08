import { Linkedin, Youtube } from 'lucide-react';

/**
 * Main navigation links used in Navbar and potentially mobile menu.
 * Update href values when pages/routes are created.
 */
export const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Docs', href: '#docs' },
];

/**
 * Footer link columns. Each object represents a column with a title and links array.
 */
export const footerLinks = [
    {
        title: 'Links',
        links: [
            { name: 'Home', href: '#hero' },
            { name: 'Services', href: '#services' },
            { name: 'Pricing', href: '#pricing' },
            { name: 'Contact us', href: '#contact' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { name: 'Docs', href: '#docs' },
            { name: "FAQ's", href: '#faq' },
        ],
    },
    {
        title: 'Company',
        links: [
            { name: 'About us', href: '#about' },
        ],
    },
];

/**
 * Social media links for footer. Each object includes a Lucide icon component.
 */
export const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
];
