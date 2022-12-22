import { extendTheme } from "@chakra-ui/react";
import colors from "./foundation/colors";
import color_mode from "./foundation/color_mode";

const theme = extendTheme({
	colors,
	color_mode,
});

export default theme;
