import { useColorModeValue, HStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const MobileNavItems = ({ label, href, emoji }: NavItems) => {
	return (
		<HStack spacing={3}>
			<Text role="img" aria-label={label}>
				{emoji}
			</Text>
			<Link
				as={NextLink}
				href={href}
				fontWeight={800}
				color={useColorModeValue("black", "white")}
				className="nav_link"
				fontSize={"1.05rem"}
			>
				{label}
			</Link>
		</HStack>
	);
};

export default MobileNavItems;
