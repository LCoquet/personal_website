'use client';

import { usePathname } from "next/navigation";
import { navLinks } from "@/app/constants/navLinks";

type MainContainerProps = {
    children: React.ReactNode;
}

export default function MainContainer({children}: MainContainerProps ) {
    const pathname = usePathname();
    const current = navLinks.find(link => link.href === pathname);

    return (
        // bg-white/30 border border-gray-300 rounded-lg 
        <div className="w-3/4 mx-auto p-8 text-center relative z-10">
            <h2 className="text-5xl font-bold mb-6">
                {current?.label}
            </h2>
            {children}
        </div>
    );
}