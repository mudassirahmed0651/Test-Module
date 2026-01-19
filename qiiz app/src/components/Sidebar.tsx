import React, { useState } from 'react';
import {
    LayoutDashboard,
    BookOpen,
    FileText,
    Award,
    BarChart3,
    ChevronLeft,
    ChevronDown
} from 'lucide-react';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', active: true },
        { icon: BookOpen, label: 'My Courses' },
        { icon: FileText, label: 'Exam', hasSubmenu: true },
        { icon: Award, label: 'Credentials' },
        { icon: BarChart3, label: 'Analytics' },
    ];

    return (
        <div className={`h-screen bg-teal-600 text-white transition-all duration-300 flex flex-col ${isCollapsed ? 'w-20' : 'w-64'}`}>
            {/* Logo Section */}
            <div className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <img src="/src/assets/react.svg" alt="logo" className="w-8 h-8" />
                </div>
                {!isCollapsed && <span className="font-semibold text-lg truncate">karachipublicschool</span>}
            </div>

            {/* Toggle Button */}
            <div className="px-4 mb-6">
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="w-full bg-teal-500/50 hover:bg-teal-500 py-1 rounded flex items-center justify-center transition-colors"
                >
                    <ChevronLeft className={`w-5 h-5 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} />
                </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 space-y-2">
                {menuItems.map((item, index) => (
                    <div key={index} className="group">
                        <a
                            href="#"
                            className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${item.active ? 'bg-teal-700' : 'hover:bg-teal-500/30'}`}
                        >
                            <item.icon className="w-5 h-5 min-w-[20px]" />
                            {!isCollapsed && (
                                <div className="flex-1 flex items-center justify-between overflow-hidden">
                                    <span className="truncate">{item.label}</span>
                                    {item.hasSubmenu && <ChevronDown className="w-4 h-4" />}
                                </div>
                            )}
                        </a>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
