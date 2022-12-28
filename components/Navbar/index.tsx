import { BsMoonStarsFill } from "react-icons/bs";
import { BiSun } from "react-icons/bi";
import { IoApps } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import {
	Box,
	Flex,
	Text,
	IconButton,
	useColorMode,
	useColorModeValue,
	useDisclosure,
	Slide,
} from "@chakra-ui/react";
import MobileNav from "./MobileNav";
import { slideStyle } from "./style";
import DesktopNav from "./DesktopNav";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onToggle } = useDisclosure();
	return (
		<Box bg={useColorModeValue("white", "black")} position="fixed" w="100%" zIndex={"2000"}>
			<Flex
				bg={useColorModeValue("white", "black")}
				color={useColorModeValue("black", "white")}
				minH={"60px"}
				py={{ base: 2, md: 4 }}
				px={{ base: 4, md: 6, xl: 8 }}
				align={"center"}
				className="desktop-nav"
			>
				<Flex
					flex={{ base: 1 }}
					justify={{ base: "flex-start", md: "space-between" }}
					align="center"
				>
					<Text
						fontFamily="'Rubik Moonrocks', cursive !important"
						textAlign={"left"}
						color={useColorModeValue("black", "white")}
						fontSize={{ base: "2xl", md: "3xl" }}
						cursor="pointer"
					>
						Mikun
					</Text>

					<Flex
						display={{ base: "none", md: "flex" }}
						align="center"
						gap={{ md: 4, lg: 6 }}
						ml={10}
					>
						<DesktopNav />
						<IconButton
							onClick={toggleColorMode}
							fontSize="xl"
							variant={"ghost"}
							aria-label={"Toggle Theme"}
						>
							{colorMode === "light" ? <BsMoonStarsFill /> : <BiSun />}
						</IconButton>
					</Flex>
				</Flex>
				<Flex
					flex={{ base: 1, md: "auto" }}
					ml={{ base: -2 }}
					display={{ base: "flex", md: "none" }}
					justify="flex-end"
					gap={2}
				>
					<IconButton
						onClick={toggleColorMode}
						fontSize="xl"
						variant={"ghost"}
						aria-label={"Toggle Theme"}
					>
						{colorMode === "light" ? <BsMoonStarsFill /> : <BiSun />}
					</IconButton>
					<IconButton
						onClick={onToggle}
						fontSize="xl"
						icon={isOpen ? <FaTimes /> : <IoApps />}
						variant={"ghost"}
						aria-label={"Toggle Navigation"}
					/>
				</Flex>
			</Flex>

			<Slide in={isOpen} direction="right" style={slideStyle}>
				<MobileNav />
			</Slide>
		</Box>
	);
};

export default Navbar;
