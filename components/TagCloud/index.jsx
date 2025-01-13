import TagCloud from "TagCloud";
import { useEffect } from "react";

const TextSphere = () => {
	useEffect(() => {
		return () => {
			const container = ".tagcloud";
			const texts = [
				"HTML",
				"CSS",
				"Sass",
				"JavaScript",
				"TypeScript",
				"ReactJS",
				"Git",
				"Github",
				"Firebase",
				"Next.js",
				"Vue.js",
				"Flask",
				"Python",
				"Docker",
				"Chakra-UI",
				"C/C++",
			];
			const options = {
				radius: 200,
				maxSpeed: "fast",
				initSpeed: "fast",
				useContainerInlineStyles: false,
			};

			TagCloud(container, texts, options);
		};
	}, []);

	return (
		<>
			<div
				className="text-sphere"
				style={{ width: "300px", height: "300px", position: "relative" }}
			>
				<span className="tagcloud"></span>
			</div>
		</>
	);
};

export default TextSphere;
