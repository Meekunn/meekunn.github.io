import { Box, useColorModeValue, Flex, Text, Heading, Link } from "@chakra-ui/react";
import { Tangerine } from "@next/font/google";
import NextLink from "next/link";
import { sectionHeadingDark, sectionHeadingLight } from "../style";

const tangerine = Tangerine({ weight: "400", subsets: ["latin"], preload: true });

const Contact = () => {
	const bgColor = useColorModeValue("white", "black");

	return (
		<Box
			id="contact"
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
			<Flex direction={"column"} px={{ base: 4, lg: 6 }} py={4} gap={4}>
				<Flex direction={"column"} w={"100%"} gap={2}>
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
						<span>Shoot Me A Message</span> 📥
					</Heading>
					<Text
						className={tangerine.className}
						fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "1.65rem" }}
						color={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
					>
						&lt;&#47;h2&gt;
					</Text>
				</Flex>
				<Flex w={"100%"} direction={"column"} gap={6}>
					<Text>
						Thanks for stopping by! I&apos;m always on the lookout for new and exciting
						opportunities. If you&apos;re interested in learning more about my work or have an
						opportunity you&apos;d like to discuss, feel free to reach out. Let&apos;s chat about
						how we can bring your project to life!
					</Text>
					<Flex
						//direction={{ base: "column", md: "row" }}
						direction={"row"}
						flexWrap={"wrap"}
						//align={{ base: "flex-start", md: "center" }}
						align="center"
						justify={"space-around"}
						width={{ base: "100%", md: "80%" }}
						gap={3}
					>
						<Link
							as={NextLink}
							href="https://twitter.com/Reactjs_babe"
							textDecoration={"none !important"}
							className="contact-link"
							position={"relative"}
						>
							🐦 Twitter
						</Link>
						<Link
							as={NextLink}
							href="https://github.com/Meekunn/"
							textDecoration={"none !important"}
							className="contact-link"
							position={"relative"}
						>
							👾 Github
						</Link>
						<Link
							as={NextLink}
							href="https://www.linkedin.com/in/adedamola-orofin/"
							textDecoration={"none !important"}
							className="contact-link"
							position={"relative"}
						>
							👔 LinkedIn
						</Link>
						<Link
							as={NextLink}
							href="mailto:orofinadedamola@gmail.com"
							textDecoration={"none !important"}
							className="contact-link"
							position={"relative"}
						>
							📭 Mail
						</Link>
					</Flex>
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

export default Contact;
