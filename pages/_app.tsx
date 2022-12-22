import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import theme from "../theme";

const montserrat = Montserrat({ subsets: ["latin"] });

function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<>
				<style jsx global>{`
					html {
						font-family: ${montserrat.style.fontFamily};
					}
				`}</style>
				<Component {...pageProps} />
			</>
		</ChakraProvider>
	);
}

export default App;
