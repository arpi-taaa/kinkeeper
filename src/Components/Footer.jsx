import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#1B4332] text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                
                <div className="mb-3">
                    <img 
                        src="/logo-xl.png" 
                        alt="KeenKeeper Logo" 
                        className="h-12 w-auto object-contain mx-auto"
                    />
                </div>

                <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed mb-6">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="flex flex-col items-center gap-3 mb-10">
                    <span className="text-sm font-medium tracking-wide text-gray-200">Social Links</span>
                    <div className="flex items-center gap-3">
                        <a 
                            href="https://instagram.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#1B4332] hover:bg-gray-100 transition-colors shadow-sm"
                        >
                            <FaInstagram className="text-lg" />
                        </a>
                        <a 
                            href="https://facebook.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#1B4332] hover:bg-gray-100 transition-colors shadow-sm"
                        >
                            <FaFacebookF className="text-base" />
                        </a>
                        <a 
                            href="https://twitter.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#1B4332] hover:bg-gray-100 transition-colors shadow-sm"
                        >
                            <FaXTwitter className="text-base" />
                        </a>
                    </div>
                </div>

                <div className="w-full border-t border-[#2d5a45] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                    <div>
                        &copy; 2026 KeenKeeper. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;