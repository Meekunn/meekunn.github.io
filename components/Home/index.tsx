import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import BouncyTextAnim from "../BouncyTextAnimation";
import { useRef } from "react";
import { useInView } from "framer-motion";

const HomeSection = () => {
	const bgColor = useColorModeValue("white", "black");
	const intro_line1 = "Hola,".split("");
	const intro_line2 = "I'm ".split("");
	const intro_line3 = "a front-end developer.".split("");
	const ref = useRef(null);
	const ref2 = useRef(null);
	const isInView = useInView(ref, { once: false });
	return (
		<Box bg={bgColor} top={16} position="relative">
			<Flex direction={"row"} px={6} py={8}>
				<Flex direction={"column"}>
					<Text
						fontFamily="'Tangerine', cursive !important"
						color={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
						fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "1.65rem" }}
					>
						&lt;h1&gt;
					</Text>
					<Heading ref={ref} as="h1" pl={2} mb={1}>
						{intro_line1.map((letter, index) => (
							<BouncyTextAnim
								key={index}
								style={{
									transform: isInView ? "none" : "translateX(-200px)",
									opacity: isInView ? 1 : 0,
									filter: isInView ? "blur(0)" : "blur(5px)",
									transition: "all 1.5s 0.5s",
								}}
							>
								{letter === " " ? "\u00A0" : letter}
							</BouncyTextAnim>
						))}
					</Heading>
					<Heading ref={ref2} as="h1" pl={2} mb={1}>
						{intro_line2.map((letter, index) => (
							<BouncyTextAnim
								key={index}
								style={{
									transform: isInView ? "none" : "translateX(-200px)",
									opacity: isInView ? 1 : 0,
									transition: "all 1.5s 0.5s",
								}}
							>
								{letter === " " ? "\u00A0" : letter}
							</BouncyTextAnim>
						))}
						<Box
							ref={ref}
							className="my_name"
							display="inline-block"
							fontSize={{ base: "2rem", sm: "4xl", md: "2.7rem", lg: "5xl" }}
							style={{
								transform: isInView ? "none" : "translateY(-200px)",
								opacity: isInView ? 1 : 0,
								transition: "all 1.8s 0.8s",
							}}
						>
							Ayomikun,
						</Box>
					</Heading>
					<Heading ref={ref} as="h1" pl={2} mb={1}>
						{intro_line3.map((letter, index) => (
							<BouncyTextAnim
								key={index}
								style={{
									transform: isInView ? "none" : "translateX(-200px)",
									opacity: isInView ? 1 : 0,
									transition: "all 1.5s 0.5s",
								}}
							>
								{letter === " " ? "\u00A0" : letter}
							</BouncyTextAnim>
						))}
					</Heading>
					<Text
						fontFamily="'Tangerine', cursive !important"
						fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "1.65rem" }}
						color={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
					>
						&lt;&#47;h1&gt;
					</Text>
					<Text
						fontFamily="'Tangerine', cursive !important"
						fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "1.65rem" }}
						color={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
					>
						&lt;span&gt;
					</Text>
					<Box pl={2} fontSize={{ base: "sm", sm: "md", md: "xl", lg: "2xl" }}>
						<Typewriter
							options={{
								strings: [
									"Translating Design into Functionality",
									"Bringing Designs to Life Through Code",
									"Transforming Ideas into User Experiences",
									"Turning Imagination into Interactive Reality",
								],
								autoStart: true,
								loop: true,
								delay: 75,
								deleteSpeed: 50,
								cursorClassName: "cursor-typewriter",
								wrapperClassName: "typewriter",
							}}
						/>
					</Box>
					<Text
						fontFamily="'Tangerine', cursive !important"
						fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "1.65rem" }}
						color={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
					>
						&lt;&#47;span&gt;
					</Text>
				</Flex>
			</Flex>
		</Box>
	);
};

export default HomeSection;

//<a href="https://storyset.com/technology">Technology illustrations by Storyset</a>

//<a href="https://storyset.com/technology">Technology illustrations by Storyset</a>
