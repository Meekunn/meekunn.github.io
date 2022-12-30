import Head from "next/head";
import { Box } from "@chakra-ui/react";
// import Loader from "../components/Loader";
// import { useEffect, useState } from "react";
import PortfolioPage from "../components";

export default function Home() {
	// const [isLoading, setIsLoading] = useState(false);

	// useEffect(() => {
	// 	setIsLoading(true);
	// 	setTimeout(() => {
	// 		setIsLoading(false);
	// 	}, 7000);
	// }, []);
	return (
		<>
			<Head>
				<title>Adedamola Ayomikun Orofin</title>
				<meta name="description" content="Mikun's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Box>
				<PortfolioPage />
			</Box>
		</>
	);
}

//bg={useColorModeValue("white", "black")} height={"100vh"}
