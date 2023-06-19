import { Box, useColorModeValue, Flex, Text, Heading, Link, useColorMode } from "@chakra-ui/react";
import { Tangerine } from "@next/font/google";
import NextLink from "next/link";
import { sectionHeadingDark, sectionHeadingLight } from "../style";
import { useState } from "react";
import { projects } from "./projects";

const tangerine = Tangerine({ weight: "400", subsets: ["latin"], preload: true });

const Projects = () => {
	const { colorMode } = useColorMode();
	const bgColor = useColorModeValue("white", "black");
	const [selectedProject, setSelectedProject] = useState(0);
	const currentProject = projects[selectedProject];

	const handleProjectChange = (index: number) => {
		setSelectedProject(index);
	};

	return (
		<Box
			id="project"
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
				<Flex direction={"column"} w={"100%"}>
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
						<span>My Creative Endeavors</span> 🎨
					</Heading>
					<Text
						className={tangerine.className}
						fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "1.65rem" }}
						color={useColorModeValue("blackAlpha.600", "whiteAlpha.400")}
					>
						&lt;&#47;h2&gt;
					</Text>
				</Flex>
				<Flex
					direction={{ base: "column", md: "row" }}
					w={"100%"}
					gap={{ base: 8, xl: 12 }}
					justify={"space-between"}
				>
					<Flex
						direction={"column"}
						w={{ base: "100%", md: "60%" }}
						gap={2}
						transition={"0.2s all ease-in-out"}
					>
						<Heading
							as="h3"
							mb={1}
							fontSize={"3xl"}
							fontWeight={"medium"}
							color={colorMode === "light" ? "blackAlpha.800" : "whiteAlpha.800"}
						>
							{currentProject.name}
						</Heading>
						<Flex
							className="project-details"
							direction={"column"}
							pl={8}
							position={"relative"}
							gap={4}
						>
							<Text fontSize={"sm"}>{currentProject.summary}</Text>
							<Flex direction={"row"} gap={2} wrap={"wrap"}>
								🧰 ⚒️:
								{currentProject.tools.map((tool, index) => (
									<Text
										key={index}
										fontSize={"sm"}
										fontWeight={"medium"}
										color={colorMode === "light" ? "blackAlpha.800" : "whiteAlpha.800"}
									>
										{tool},
									</Text>
								))}
							</Flex>
							<Flex direction={"row"} gap={4} wrap={"wrap"}>
								{currentProject.url ? (
									<Link
										as={NextLink}
										p={0.5}
										textDecoration="none !important"
										href={currentProject.url}
										fontSize={{ md: "sm" }}
										color={colorMode === "light" ? "blackAlpha.800" : "whiteAlpha.800"}
										className="project-link"
										position={"relative"}
										fontWeight={"bold"}
										transition={"0.2s all ease-in-out"}
										_hover={{
											color: colorMode === "light" ? "black" : "white",
										}}
										// className={colorMode === "light" ? "desktop-navlink-light" : "desktop-navlink-dark"}
									>
										View Website
									</Link>
								) : (
									<></>
								)}
								<Link
									as={NextLink}
									p={0.5}
									textDecoration="none !important"
									href={currentProject.github}
									fontSize={{ md: "sm" }}
									color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
									className="project-link"
									position={"relative"}
									fontWeight={"bold"}
									transition={"0.2s all ease-in-out"}
									_hover={{
										color: colorMode === "light" ? "black" : "white",
									}}
									// className={colorMode === "light" ? "desktop-navlink-light" : "desktop-navlink-dark"}
								>
									Github
								</Link>
							</Flex>
						</Flex>
					</Flex>
					<Flex direction={"column"} w={{ base: "100%", md: "30%" }} gap={2}>
						<Heading
							as="h3"
							mb={1}
							fontSize={"3xl"}
							fontWeight={"medium"}
							color={colorMode === "light" ? "blackAlpha.800" : "whiteAlpha.800"}
						>
							Projects
						</Heading>
						<Flex
							direction={"column"}
							pl={6}
							align={"flex-start"}
							gap={4}
							className="project-list"
							position={"relative"}
						>
							{projects.map((project, index) => (
								<Box
									as="button"
									key={index}
									fontSize={"sm"}
									className="project-name"
									pb={"0.2rem"}
									position="relative"
									color={colorMode === "light" ? "blackAlpha.800" : "whiteAlpha.800"}
									transition={"0.2s all ease-in-out"}
									_hover={{
										color: colorMode === "light" ? "black" : "white",
										transform: "scaleX(1.05)",
									}}
									onClick={() => handleProjectChange(index)}
								>
									{project.name}
								</Box>
							))}
						</Flex>
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

export default Projects;
