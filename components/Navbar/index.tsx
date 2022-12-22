import { BsMoonStarsFill } from "react-icons/bs";
import { BiSun } from "react-icons/bi";
import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box bg={useColorModeValue("light.100", "dark.100")}>
			<Button onClick={toggleColorMode}>
				{colorMode === "light" ? <BsMoonStarsFill /> : <BiSun />}
			</Button>
		</Box>
	);
};

export default Navbar;
