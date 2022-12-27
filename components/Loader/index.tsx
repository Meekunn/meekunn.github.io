import { Box, Container, Text } from "@chakra-ui/react";
import { Poppins } from "@next/font/google";

const poppins = Poppins({ weight: "700", subsets: ["latin"] });

const Loader = () => {
	const word: string[] = ["M", "i", "k", "u", "n"];

	// const logo = document.querySelectorAll(".letter");
	// for (let i = 0; i < logo.length; i++) {
	// 	console.log(`${i} is ${logo[i].getTotalLength()}`)
	// }

	return (
		<Box
			className={poppins.className}
			display="flex"
			alignItems={"center"}
			height="100%"
			bg={"black"}
		>
			<Container className="loader-container" display={"flex"} justifyContent="center">
				{word.map((letter, index) => (
					<Text
						key={index}
						className="letter"
						color={"transparent"}
						fontSize={{ base: "6xl", lg: "9xl" }}
					>
						{letter}
					</Text>
				))}
			</Container>
		</Box>
	);
};

export default Loader;
