import React from 'react';
import Button from '../ui/Button';
import { Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
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

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-primary">Home</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-primary">Contact us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-primary">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-primary">Docs</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-primary">FAQ's</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-primary">About us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} DigitalizaLab. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-primary">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary">
                            <Youtube size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
