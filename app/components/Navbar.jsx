import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconHome,
} from "@tabler/icons-react";

const Navbar = () => {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];
    return (
        <div className="flex items-center justify-center h-fit  w-full">
            <FloatingDock
                items={links} />
        </div>
    );
}
export default Navbar
