import {
	Box,
	useColorModeValue,
	Flex,
	Text,
	Heading,
	keyframes,
	Link,
	useColorMode,
} from "@chakra-ui/react";
import BouncyTextAnim from "../BouncyTextAnimation";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ayoMikun from "../../assets/myface.png";
import { Tangerine } from "@next/font/google";
import { sectionHeadingDark, sectionHeadingLight } from "./style";
import { TbExternalLink } from "react-icons/tb";

const tangerine = Tangerine({ weight: "400", subsets: ["latin"], preload: true });
const animate = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 50% 0%;
	}`;

const About = () => {
	const { colorMode } = useColorMode();
	const bgColor = useColorModeValue("white", "black");
	const heading = "Get to know me".split("");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const headingAnimation = `3s ${animate} infinite linear`;

	return (
		<Box
			id="about"
			bg={bgColor}
			px={8}
			pt={{ base: 8, sm: 4, md: 8 }}
			position="relative"
			borderBottom={"1px"}
			borderStyle="dashed"
			borderColor={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
		>
			<Text
				className={tangerine.className}
				color={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
				fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "1.65rem" }}
			>
				&lt;section&gt;
			</Text>
			<Flex direction={{ base: "column", md: "row" }} px={{ base: 4, lg: 6 }} py={4} gap={4}>
				<Flex direction={"column"} w={{ base: "100%", md: "50%" }}>
					<Text
						className={tangerine.className}
						color={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
						fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "1.65rem" }}
					>
						&lt;h2&gt;
					</Text>
					<Heading
						as="h2"
						pl={2}
						mb={1}
						sx={useColorModeValue(sectionHeadingLight, sectionHeadingDark)}
					>
						{heading.map((letter, index) => (
							<BouncyTextAnim
								key={index}
								className="section-heading"
								//animation={headingAnimation}
							>
								{letter === " " ? "\u00A0" : letter}
							</BouncyTextAnim>
						))}
						👋🏾
					</Heading>
					<Text
						className={tangerine.className}
						fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "1.65rem" }}
						color={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
					>
						&lt;&#47;h2&gt;
					</Text>
					<Text
						className={tangerine.className}
						color={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
						fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "1.65rem" }}
					>
						&lt;p&gt;
					</Text>
					<Text
						px={4}
						py={1}
						letterSpacing={"1px"}
						fontSize={{ base: "sm", md: "md" }}
						textIndent="1rem"
					>
						Hi there! My name is Mikun and I am a web developer with experience interning at a
						startup company called{" "}
						<Link
							href="https://weixeltech.com/"
							textDecoration={"none !important"}
							className={colorMode === "light" ? "link-light" : "link-dark"}
							isExternal
						>
							Weixel Tech
						</Link>{" "}
						and volunteering for a technical community called
						<Link
							href="https://empowerher.community/"
							ml="3px"
							textDecoration={"none !important"}
							className={colorMode === "light" ? "link-light" : "link-dark"}
							isExternal
						>
							EmpowerHer Community.
						</Link>
					</Text>
					<Text
						px={4}
						py={1}
						letterSpacing={"1px"}
						fontSize={{ base: "sm", md: "md" }}
						textIndent="1rem"
					>
						I am passionate about building impactful applications and am eager to work with talented
						people in the field to continue learning and growing my skills. I am self-motivated,
						highly resilient, and always open to learning and unlearning new technologies and
						techniques in order to stay up-to-date and flexible.
					</Text>
					<Text
						px={4}
						py={1}
						letterSpacing={"1px"}
						fontSize={{ base: "sm", md: "md" }}
						textIndent="1rem"
					>
						I believe that this is key to success in this field and am always looking for new
						challenges and opportunities to grow. With my skills and determination, I am confident
						that I can make a positive impact in any team I join.
					</Text>
					<Text
						className={tangerine.className}
						fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "1.65rem" }}
						color={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
					>
						&lt;&#47;p&gt;
					</Text>
				</Flex>
				<Flex direction={"column"} w={{ md: "50%" }}>
					<Text
						className={tangerine.className}
						color={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
						fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "1.65rem" }}
					>
						&lt;div class=&quot;mikun-face&quot;&gt;
					</Text>
					<Box
						w={"100%"}
						as={motion.div}
						ref={ref}
						style={{
							opacity: isInView ? 1 : 0,
							transition: "all 1.5s 0.5s",
						}}
						display="flex"
						justifyContent={"center"}
						alignItems="center"
						h="100%"
					>
						<Box
							bg={useColorModeValue("blackAlpha.900", "whiteAlpha.900")}
							border={"2px"}
							borderStyle="solid"
							borderRadius={"2rem"}
							w={{ base: "250px", sm: "300px", md: "300px", lg: "400px" }}
							my={4}
						>
							<Image src={ayoMikun} alt="A picture of Mikun" priority className="about-img" />
						</Box>
					</Box>
					<Text
						className={tangerine.className}
						fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "1.65rem" }}
						color={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
					>
						&lt;&#47;div&gt;
					</Text>
				</Flex>
			</Flex>
			<Text
				variant="htmlTags"
				fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "1.65rem" }}
				color={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
			>
				&lt;&#47;section&gt;
			</Text>
		</Box>
	);
};

export default About;
