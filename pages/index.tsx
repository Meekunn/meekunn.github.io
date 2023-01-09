import Head from "next/head";
import { Box } from "@chakra-ui/react";
import PortfolioPage from "../components";

export default function Home() {
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
