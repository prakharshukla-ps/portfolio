import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-2.png";

const AnimatedNumber = ({ value }) => {
	const ref = useRef(null);

	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { duration: 3000 });
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [isInView, value, motionValue]);

	useEffect(() => {
		springValue.on("change", (latest) => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0);
			}
		});
	}, [springValue, value]);

	return <span ref={ref}></span>;
};

const about = () => {
	return (
		<>
			<Head>
				<title>Prakhar Shukla | About</title>
				<meta
					name="description"
					content="Learn more about Prakhar Shukla, a passionate Software Developer. Discover my journey, skills in React.js, React Native, and modern web development technologies, and my dedication to building innovative solutions."
				/>
			</Head>

			<TransitionEffect />

			<main className="flex w-full flex-col items-center justify-center dark:text-light">
				<Layout classname="pt-16 sm:pt-20">
					<AnimatedText
						text="Passion Fuels Purpose!"
						className="!text-7xl !mb-16 lg:!text-6xl sm:!text-5xl xs:!text-3xl sm:!mb-12"
					/>

					<div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
						<div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
							<h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
								Biography
							</h2>

							<p className="font-medium">
								Hi, I&apos;m Prakhar Shukla, a web and software developer
								passionate about building beautiful, functional, and
								user-centric digital experiences. With over 1 year of experience
								in the field, I constantly strive to explore innovative
								approaches to bring creative visions to life.
							</p>
							<p className="my-4 font-medium">
								I believe design goes beyond aesthetics - it&apos;s about
								solving problems and crafting intuitive, enjoyable experiences
								that resonate with users.
							</p>
							<p className="font-medium">
								Whether it&apos;s a website, mobile app, or any other digital
								product, I bring a deep commitment to design excellence and
								user-focused thinking to every project I undertake. I&apos;m
								excited about the opportunity to contribute my skills and
								passion to your next project!
							</p>
						</div>

						<div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
							<div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
							<Image
								src={profilePic}
								alt="Prakhar Shukla"
								className="w-full h-auto rounded-2xl"
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>

						<div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
							<div className="flex flex-col items-end justify-center xl:items-center">
								<span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
									<AnimatedNumber value={2} />
								</span>
								<h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
									company projects
								</h2>
							</div>

							<div className="flex flex-col items-end justify-center xl:items-center">
								<span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
									<AnimatedNumber value={6} />
								</span>
								<h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
									personal projects
								</h2>
							</div>

							<div className="flex flex-col items-end justify-center xl:items-center">
								<span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
									<AnimatedNumber value={1} />+
								</span>
								<h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
									year of experience
								</h2>
							</div>
						</div>
					</div>

					<Skills />

					<Experience />

					<Education />
				</Layout>
			</main>
		</>
	);
};

export default about;
