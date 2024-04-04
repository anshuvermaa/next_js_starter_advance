import type { StorybookConfig } from "@storybook/nextjs";

const path = require('path');
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "@storybook/addon-themes"
    ],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: true,
	},
	webpackFinal: async (config) => {
		if (config.resolve) {
			config.resolve.plugins = [
				new TsconfigPathsPlugin({
					configFile: path.resolve(__dirname, '../tsconfig.json'),
					extensions: config.resolve?.extensions,
				}),
			];
		}

        return config;
    },
}

export default config
