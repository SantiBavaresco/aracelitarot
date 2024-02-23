"use client";
import React from "react";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { ThemeSwitch } from "@/components/theme-switch";

import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/navbar";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export const Navbar = () => {
    return (
        <NextUINavbar  isBordered className="w-full bg-orange-100 dark:bg-mid-orange pb-1 ">
            <NavbarBrand>
                {/* <AcmeLogo /> */}
				<Link color="foreground" href="/">
				<Image  src="../logo-tarot.png" className=" rounded-full border-1 border-black mt-2" alt="1" width={50} />
                <p className="font-bold text-inherit ml-4 dark:text-gray-800">Araceli TAROT</p>
				</Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/">
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#sobremi" aria-current="page">
                        Sobre Mí
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#cursos">
                        Cursos
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
				<ThemeSwitch />
                {/* <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>

                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem> */}
            </NavbarContent>
        </NextUINavbar>
    );
};
