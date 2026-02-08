import React from 'react';
import Button from '../ui/Button';
import { Linkedin, Youtube } from 'lucide-react';
import { footerLinks, socialLinks } from '../../data/navigation';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand & CTA */}
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold text-primary block mb-4">DigitalizaLab</span>
                        <p className="text-gray-600 mb-6">
                            Unlock hidden potential within your business with our AI solutions.
                        </p>
                        <Button variant="primary">Get Started</Button>
                    </div>

                    {/* Dynamic Footer Link Columns */}
                    {footerLinks.map((column) => (
                        <div key={column.title}>
                            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                                {column.title}
                            </h3>
                            <ul className="space-y-3">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-gray-600 hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} DigitalizaLab. All rights reserved.
                    </p>
                    <nav aria-label="Social media links" className="flex space-x-6 mt-4 md:mt-0">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                className="text-gray-400 hover:text-primary transition-colors"
                                aria-label={`Follow us on ${social.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <social.icon size={20} aria-hidden="true" />
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
