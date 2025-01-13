import { Box, useColorModeValue, Flex, Text, Heading, useColorMode } from "@chakra-ui/react";
import { Tangerine } from "@next/font/google";
import { tagCloudDark, tagCloudLight } from "./style";
import { sectionHeadingDark, sectionHeadingLight } from "../style";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";

const tangerine = Tangerine({ weight: "400", subsets: ["latin"], preload: true });

const About = () => {
	const { colorMode } = useColorMode();
	const bgColor = useColorModeValue("white", "black");
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
						fontSize={{ base: "2rem", sm: "4xl", md: "2.7rem", lg: "5xl" }}
						sx={useColorModeValue(sectionHeadingLight, sectionHeadingDark)}
					>
						<span>Get to know me</span> 😄
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
						Hi there! I&apos;m Mikun, a web enthusiast known for infusing a touch of magic into
						code. My passion lies in building exceptional applications, and I&apos;m eager to
						collaborate with brilliant minds in the field to foster my continual growth.
					</Text>
					<Text
						px={4}
						py={1}
						letterSpacing={"1px"}
						fontSize={{ base: "sm", md: "md" }}
						textIndent="1rem"
					>
						In the dynamic world of web development, I firmly believe that adaptability is the
						secret to staying ahead. I&apos;m a self-motivated dynamo, always on the lookout to
						learn new technologies and embrace evolving trends. Thriving on challenges, I actively
						seek opportunities to broaden my expertise.
					</Text>
					<Text
						px={4}
						py={1}
						letterSpacing={"1px"}
						fontSize={{ base: "sm", md: "md" }}
						textIndent="1rem"
					>
						I expanded my technical expertise through internships at WeixelTech and Doprax, mastering tools and frameworks like Django, Docker, and Vue.js while discovering a deep passion for Artificial Intelligence and Computer Vision. Detail-oriented, organized, and driven by a commitment to growth, I thrive in collaborative environments and enjoy pushing boundaries to deliver innovative solutions.
					</Text>
					<Text
						px={4}
						py={1}
						letterSpacing={"1px"}
						fontSize={{ base: "sm", md: "md" }}
						textIndent="1rem"
					>
						Armed with a strong coding background and an unwavering spirit, I&apos;m confident in my ability to contribute positively to any team. I am eager to explore opportunities that blend my web development skills with my interest in AI and Computer Vision. Let&apos;s come together and create something truly extraordinary!
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
						&lt;div class=&quot;skills&quot;&gt;
					</Text>
					<Box
						display="flex"
						justifyContent={"center"}
						alignItems="center"
						h="100%"
						sx={colorMode === "light" ? tagCloudLight : tagCloudDark}
					>
						<TagCloud
							options={(w: Window & typeof globalThis): TagCloudOptions => ({
								radius: Math.min(400, w.innerWidth, w.innerHeight) / 2,
								maxSpeed: "fast",
								keep: false,
							})}
							// onClick={(tag: string) => alert(tag)}
							// onClickOptions={{ passive: true }}
						>
							{[
								"Chakra-UI",
								"HTML",
								"TypeScript",
								"CSS",
								"Sass",
								"JavaScript",
								"Git",
								"Github",
								"Firebase",
								"Nextjs",
								"C++",
								"ReactJS",
							]}
						</TagCloud>
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
