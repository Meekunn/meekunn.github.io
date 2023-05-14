import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../theme";

export default function Document() {
	return (
		<Html lang="en" style={{ scrollBehavior: "smooth" }}>
			<Head />
			<body>
				<ColorModeScript initialColorMode={theme.color_mode.initialColorMode} />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
