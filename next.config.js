/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		//output: "standalone",
		outputStandalone: true,
	},
};

module.exports = nextConfig;
