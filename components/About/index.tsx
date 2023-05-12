import {
	Box,
	useColorModeValue,
	Flex,
	Text,
	Heading,
	//keyframes,
	Link,
	useColorMode,
} from "@chakra-ui/react";
import BouncyTextAnim from "../BouncyTextAnimation";
import { Tangerine } from "@next/font/google";
import { sectionHeadingDark, sectionHeadingLight, tagCloudDark, tagCloudLight } from "./style";
import TextSphere from "../TagCloud";

const tangerine = Tangerine({ weight: "400", subsets: ["latin"], preload: true });

const About = () => {
	const { colorMode } = useColorMode();
	const bgColor = useColorModeValue("white", "black");
	const heading = "Get to know me".split("");

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
						&lt;div class=&quot;skills&quot;&gt;
					</Text>
					<Box
						display="flex"
						justifyContent={"center"}
						alignItems="center"
						h="100%"
						sx={colorMode === "light" ? tagCloudLight : tagCloudDark}
					>
						<TextSphere />
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
