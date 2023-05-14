import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HomeSection from "../components/Home";
import About from "../components/About";
import Projects from "./Projects";

const PortfolioPage = () => {
	return (
		<Box bg={useColorModeValue("white", "black")} height={"100vh"}>
			<Navbar />
			<HomeSection />
			<About />
			<Projects />
		</Box>
	);
};

export default PortfolioPage;
