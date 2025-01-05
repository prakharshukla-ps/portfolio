import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
	return (
		<motion.div
			className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
			whileHover={{ scale: 1.05 }}
			initial={{ s: 0, y: 0 }}
			whileInView={{ x, y, transition: { duration: 1.5 } }}
			viewport={{ once: true }}
		>
			{name}
		</motion.div>
	);
};

const Skills = () => {
	return (
		<>
			<h2 className="font-bold text-7xl mt-40 mb-16 w-full text-center md:text-6xl md:mt-32 md:mb-8 sm:text-5xl xs:text-4xl sm:mt-20 sm:mb-4">
				Skills
			</h2>

			<div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
				<motion.div
					className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
					whileHover={{ scale: 1.05 }}
				>
					Web
				</motion.div>

				<Skill name="HTML" x="-20.5vw" y="2vw" />
				<Skill name="CSS" x="-11vw" y="-10vw" />
				<Skill name="JavaScript" x="18vw" y="6vw" />
				<Skill name="React Js" x="0vw" y="12vw" />
				<Skill name="React Native" x="-23vw" y="-15vw" />
				<Skill name="Redux" x="18vw" y="-12vw" />
				<Skill name="TypeScript" x="33.5vw" y="-5vw" />
				<Skill name="Firebase" x="0vw" y="-20vw" />
				<Skill name="Tailwind CSS" x="-25vw" y="19vw" />
				<Skill name="Mantine UI" x="17vw" y="18vw" />
			</div>
		</>
	);
};

export default Skills;
