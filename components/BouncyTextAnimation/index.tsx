import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import { Box, SystemStyleObject } from "@chakra-ui/react";

interface IBouncyTextAnim {
	children: string;
	className?: string;
	sx?: SystemStyleObject;
}

const BouncyTextAnim = ({ children, className, sx }: IBouncyTextAnim) => {
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
				duration: 0.5,
			},
		});
		setIsBouncing(true);
	};

	return (
		<Box
			as={motion.span}
			animate={controls}
			onMouseOver={() => {
				if (!isBouncing) bouncy_effect();
			}}
			onAnimationComplete={() => setIsBouncing(false)}
			className={className}
			display="inline-block"
			cursor={"pointer"}
			fontSize={{ base: "2rem", sm: "4xl", md: "2.7rem", lg: "5xl" }}
			sx={sx}
		>
			{children}
		</Box>
	);
};

export default BouncyTextAnim;
