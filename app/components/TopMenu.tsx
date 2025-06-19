'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/app/constants/navLinks";

export default function TopMenu() {
    const pathname = usePathname();
    const navItemClass = "hover:text-gray-400 dark:hover:text-gray-400 hover:underline transition-all underline-offset-4 duration-300 cursor-pointer";

    return (
        <nav className="text-gray-800 bg-gray-100 shadow">
            <ul className="flex gap-8 justify-center py-4">
                {navLinks.map(link => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={navItemClass}
                            style={
                                pathname === link.href
                                    ? { color: "var(--highlight)" }
                                    : undefined
                            }
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}