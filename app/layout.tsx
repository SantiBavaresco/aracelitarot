import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import SimpleSlider from "@/components/imageSlider";
import Footer from "@/components/footer";
import {Divider} from "@nextui-org/divider";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "../logo-tarot.png",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html style={{scrollbarColor: "#fecb58 #ffedd5", scrollbarWidth: "thin", }} lang="en" suppressHydrationWarning >
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased ",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
				<Navbar />
				
					<div className="relative flex flex-col bg-gray-100 px-4 dark:bg-gray-800 " id="home">
						
						<main className="container max-w-7xl pt-8 px-6 flex-grow m-auto" >
							{children}
						</main>
						<footer className="w-full flex flex-col items-center justify-center mt-4 py-3">
							<Divider className="my-4" />
							<Footer autoplay={1}/>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
