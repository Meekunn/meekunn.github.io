import { ChakraProvider, useColorModeValue, Box } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "@fontsource/montserrat";
import "@fontsource/lobster-two";
import "@fontsource/tangerine/400.css";
import "@fontsource/rubik-moonrocks/400.css";
import theme from "../theme";
import "../styles/style.scss";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

function App({ Component, pageProps }: AppProps) {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 6000);
	}, []);
	return (
		<ChakraProvider theme={theme}>
			<Box bg={useColorModeValue("white", "black")} height={"100vh"}>
				{!isLoading ? (
					<>
						<Component {...pageProps} />
					</>
				) : (
					<Loader />
				)}
			</Box>
		</ChakraProvider>
	);
}

export default App;
