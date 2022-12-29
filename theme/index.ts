import { extendTheme } from "@chakra-ui/react";
import colors from "./foundation/colors";
import fonts from "./foundation/fonts";
import color_mode from "./foundation/color_mode";
import components from "./components";

const theme = extendTheme({
	colors,
	color_mode,
	fonts,
	components,
});

export default theme;
