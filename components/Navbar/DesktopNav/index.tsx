import { Box, Link, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import navItems from "../navitems";
import NextLink from "next/link";

const DesktopNav = () => {
	const { colorMode } = useColorMode();
	const linkColor = useColorModeValue("black", "gray.200");

	return (
		<Stack direction={"row"} spacing={8}>
			{navItems.map((navItem) => (
				<Box key={navItem.label} display="flex">
					<Link
						as={NextLink}
						p={2}
						textDecoration="none !important"
						href={navItem.href}
						fontSize={{ md: "sm" }}
						color={linkColor}
						className={colorMode === "light" ? "desktop-navlink-light" : "desktop-navlink-dark"}
					>
						{navItem.label}
					</Link>
				</Box>
			))}
		</Stack>
	);
};

export default DesktopNav;
