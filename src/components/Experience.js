import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
	const ref = useRef(null);

	return (
		<li
			ref={ref}
			className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
		>
			<LiIcon reference={ref} />

			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: "spring" }}
			>
				<h3 className="capitalize font-semibold text-2xl pb-2 sm:text-xl xs:text-lg">
					{position} &nbsp;
					<a
						href={companyLink}
						target="_blank"
						className="text-primary capitalize dark:text-primaryDark"
					>
						@{company}
					</a>
				</h3>
				<span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
					{time} | {address}
				</span>
				<p className="font-medium w-full pt-2 md:text-sm">{work}</p>
			</motion.div>
		</li>
	);
};

const Experience = () => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
	});

	return (
		<div className="mt-40 sm:mt-16">
			<h2 className="font-bold text-7xl mb-16 w-full text-center md:text-6xl sm:text-5xl xs:text-4xl sm:mb-10">
				Experience
			</h2>

			<div ref={ref} className="w-[85%] mx-auto relative lg:w-[90%] md:w-full">
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
				/>

				<ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
					<Details
						position="Software Developer Intern"
						company="MyMotoCo AutoTech"
						companyLink="https://mymotoco.com/"
						time="Jan 2025 - May 2025"
						address="Jaipur, Rajasthan"
						work="Leveraging React, TypeScript, and Shadcn, I developed a custom admin panel inspired by WordPress. In this role, I contributed to designing reusable components and adhered to a component-driven development (CDD) approach. My primary focus was on key dashboard modules, including custom post types, a media manager, and settings configuration."
					/>

					<Details
						position="Software Developer"
						company="Pairroxz Technologies"
						companyLink="https://pairroxz.com/"
						time="Jan 2024 - Jan 2025"
						address="Jaipur, Rajasthan"
						work="Collaborated on a project management platform, developing interactive features using React.js and TypeScript. Contributed to a mobile application, enhancing functionality and user experience with React Native and TypeScript."
					/>

					<Details
						position="Wordpress Developer"
						company="Adreamjewel"
						companyLink="https://adreamjewel.com/"
						time="July 2023 - Present"
						address="Jaipur, Rajasthan"
						work="I developed a jewelry e-commerce website from scratch using WordPress. I designed a user-friendly interface, integrated a secure payment gateway, and implemented essential e-commerce features like product management, cart functionality, and order processing, creating a seamless shopping experience."
					/>
				</ul>
			</div>
		</div>
	);
};

export default Experience;
