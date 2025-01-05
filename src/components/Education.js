import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place }) => {
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
					{type}
				</h3>
				<span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
					{time} | {place}
				</span>
			</motion.div>
		</li>
	);
};

const Education = () => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "start start"],
	});

	return (
		<div className="mt-40 sm:mt-20 mb-48 sm:mb-40">
			<h2 className="font-bold text-7xl mb-16 w-full text-center md:text-6xl sm:text-5xl xs:text-4xl sm:mb-10">
				Education
			</h2>

			<div ref={ref} className="w-[85%] mx-auto relative lg:w-[90%] md:w-full">
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
				/>
				<ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
					<Details
						type="Bachelor Of Technology In Computer Science"
						time="2015 - 2019"
						place="Global Institute Of Technology"
					/>

					<Details
						type="Senior Secondary Education"
						time="2014 - 2015"
						place="Tilak Public School"
					/>

					<Details
						type="Higher Secondary Education"
						time="2012 - 2013"
						place="Tilak Public School"
					/>
				</ul>
			</div>
		</div>
	);
};

export default Education;
