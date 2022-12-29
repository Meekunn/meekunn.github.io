import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "@fontsource/montserrat";
import "@fontsource/lobster-two";
import "@fontsource/tangerine/400.css";
import "@fontsource/rubik-moonrocks/400.css";
import theme from "../theme";
import "../components/Loader/loader.scss";
import "../styles/style.scss";

function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<>
				<Component {...pageProps} />
			</>
		</ChakraProvider>
	);
}

export default App;
