import { motion, useAnimationControls } from "framer-motion";
import { useState, CSSProperties } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

interface IBouncyTextAnim {
	children: string;
	style: CSSProperties;
}

const BouncyTextAnim = ({ children, style }: IBouncyTextAnim) => {
	const [isBouncing, setIsBouncing] = useState(false);
	const controls = useAnimationControls();
	const bouncy_effect = () => {
		controls.start({
			transform: [
				"scale3d(1, 1, 1)",
				"scale3d(1.4, 0.35, 1)",
				"scale3d(0.75, 1.35, 1)",
				"scale3d(1.25, 0.85, 1)",
				"scale3d(0.9, 1.05, 1)",
				"scale3d(1, 1, 1)",
			],
			transition: {
				times: [0, 0.5, 0.6, 0.7, 0.8, 0.5],
				duration: 0.3,
			},
		});
		setIsBouncing(true);
	};

	return (
		<Box
			as={motion.span}
			animate={controls}
			style={style}
			onMouseOver={() => {
				if (!isBouncing) bouncy_effect();
			}}
			onAnimationComplete={() => setIsBouncing(false)}
			className="bouncy_anim"
			fontSize={{ base: "2rem", sm: "4xl", md: "2.7rem", lg: "5xl" }}
			color={useColorModeValue("blackAlpha.800", "white")}
		>
			{children}
		</Box>
	);
};

export default BouncyTextAnim;
