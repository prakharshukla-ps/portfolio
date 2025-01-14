import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/developer.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
	return (
		<>
			<Head>
				<title>Prakhar Shukla</title>
				<meta
					name="description"
					content="Welcome to Prakhar Shukla's portfolio! Explore my projects, skills, and achievements in web development and technology."
				/>
			</Head>

			<TransitionEffect />

			<main className="flex items-center text-dark w-full min-h-screen dark:text-light">
				<Layout classname="pt-0 md:pt-16 sm:pt-8">
					<div className="flex items-center justify-between w-full lg:flex-col">
						<div className="w-1/2 md:w-full md:flex md:justify-center md:pt-4">
							<Image
								src={profilePic}
								alt="Prakhar Shukla"
								className="w-10/12 h-auto rounded-full lg:hidden md:inline-block"
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
							/>
						</div>

						<div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center md:py-10">
							<AnimatedText
								text="Turning Vision Into Reality With Code And Design."
								className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-5xl md:!text-5xl sm:!text-3xl"
							/>

							<p className="my-4 text-base font-medium md:text-sm sm:text-xs">
								As a skilled software developer, I am dedicated about
								transforming ideas into innovative web and mobile applications.
								Explore my latest projects, showcasing my expertise in React.js,
								React Native and modern development practices.
							</p>

							<div className="flex items-center self-start mt-2 lg:self-center">
								<Link
									href="/Resume_Prakhar_Shukla.pdf"
									target="_blank"
									className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
									download={true}
								>
									Resume <LinkArrow className="w-6 ml-1" />
								</Link>

								<Link
									href="mailto:pshukla650@gmail.com"
									target="_blank"
									className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
								>
									Contact
								</Link>
							</div>
						</div>
					</div>
				</Layout>

				<HireMe />

				<div className="absolute right-8 bottom-8 inline-block w-24 xl:-bottom-16 lg:-bottom-10 md:hidden">
					<Image
						src={lightBulb}
						alt="Prakhar Shukla"
						className="w-full h-auto"
					/>
				</div>
			</main>
		</>
	);
}
