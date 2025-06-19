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
        <div className="w-3/4 mx-auto bg-white/40 border border-gray-300 rounded-lg p-8 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6">
                {current?.label}
            </h2>
            {children}
        </div>
    );
}