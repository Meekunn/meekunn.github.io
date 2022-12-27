import { Stack, useColorModeValue } from "@chakra-ui/react";
import MobileNavItems from "./MobileNavItems";
import navItems from "../navitems";

const MobileNav = () => {
	return (
		<Stack
			bg={useColorModeValue("whiteAlpha.900", "blackAlpha.600")}
			p={4}
			display={{ base: "flex", md: "none" }}
			justifyContent="center"
			h="100%"
		>
			<Stack bg={"transparent"} h="80%" gap={10}>
				{navItems.map((navItem) => (
					<MobileNavItems key={navItem.label} {...navItem} />
				))}
			</Stack>
		</Stack>
	);
};

export default MobileNav;
