import { Box, useColorModeValue, Flex, Text, Heading } from "@chakra-ui/react";
import BouncyTextAnim from "../BouncyTextAnimation";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ayoMikun from "../../assets/myface.png";

const About = () => {
	const bgColor = useColorModeValue("white", "black");
	const heading = "Get to know me ".split("");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

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
				variant="htmlTags"
				color={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
				fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "1.65rem" }}
			>
				&lt;section&gt;
			</Text>
			<Flex direction={{ base: "column", md: "row" }} px={{ base: 4, lg: 6 }} py={4} gap={4}>
				<Flex direction={"column"} w={{ base: "100%", md: "50%" }}>
					<Text
						variant="htmlTags"
						color={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
						fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "1.65rem" }}
					>
						&lt;h2&gt;
					</Text>
					<Heading as="h2" pl={2} mb={1}>
						{heading.map((letter, index) => (
							<BouncyTextAnim key={index} className="section-heading">
								{letter === " " ? "\u00A0" : letter}
							</BouncyTextAnim>
						))}
						👋🏾
					</Heading>
					<Text
						variant="htmlTags"
						fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "1.65rem" }}
						color={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
					>
						&lt;&#47;h2&gt;
					</Text>
					<Text
						variant="htmlTags"
						color={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
						fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "1.65rem" }}
					>
						&lt;p&gt;
					</Text>
					<Text px={4} letterSpacing={"1px"} fontWeight="500" fontSize={{ base: "sm", md: "md" }}>
						Hi there! I am a dedicated and driven frontend developer, with a strong passion for what
						I do. I am self-motivated and highly resilient, and I am always eager to learn and adapt
						to new technologies and techniques. I am a resilient individual, and I am open to
						learning and unlearning when necessary, as I believe that staying up-to-date and
						flexible is key to success in this field. With my skills and determination, I am
						confident that I can make a valuable contribution to any team. I am excited to continue
						growing and evolving as a developer, and I am looking forward to new challenges and
						opportunities.
					</Text>
					<Text
						variant="htmlTags"
						fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "1.65rem" }}
						color={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
					>
						&lt;&#47;p&gt;
					</Text>
				</Flex>
				<Flex direction={"column"} w={{ md: "50%" }}>
					<Text
						variant="htmlTags"
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
						variant="htmlTags"
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
