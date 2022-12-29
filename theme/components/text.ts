import { ComponentStyleConfig } from "@chakra-ui/react";

const Text: ComponentStyleConfig = {
	variants: {
		htmlTags: {
			fontFamily: "'Tangerine', cursive",
		},
		myNameLogo: {
			// fontFamily: "'Lobster Two', cursive",
			fontFamily: "'Rubik Moonrocks', cursive",
			fontWeight: 700,
			textAlign: "left",
		},
		staffLabel: {
			color: "brand.300",
			mb: 4,
			textAlign: "center",
		},
		vacancyDetail: {
			color: "font.300",
			lineHeight: 6,
			fontSize: "sm",
		},
	},
};

export default Text;
