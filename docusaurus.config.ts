import type * as Preset from "@docusaurus/preset-classic"
import type { Config } from "@docusaurus/types"
import { themes as prismThemes } from "prism-react-renderer"

const config: Config = {
	title: "Astralopedia",
	tagline: "Create: Astral wiki",
	favicon: "favicon.ico",

	url: "https://wiki.astral-chan.xyz",
	baseUrl: "/",

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	customFields: {
		commitRef: (process.env.COMMIT_REF ?? "").slice(0, 7),
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					editUrl:
						"https://github.com/Astralopedia/Astralopedia/tree/main/",
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
				},

				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		colorMode: {
			defaultMode: "dark",
			disableSwitch: true,
		},
		navbar: {
			logo: {
				alt: "logo",
				src: "img/logo.webp",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "guides",
					position: "left",
					label: "Guides",
				},
				{
					type: "docSidebar",
					sidebarId: "chapters",
					position: "left",
					label: "Chapters",
				},
				{
					type: "docSidebar",
					sidebarId: "planets",
					position: "left",
					label: "Planets",
				},
				{
					href: "https://github.com/Astralopedia/Astralopedia",
					label: "GitHub",
					position: "right",
				},
			],
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
	webpack: {
		jsLoader: isServer => ({
			loader: require.resolve("swc-loader"),
			options: {
				jsc: {
					parser: {
						syntax: "typescript",
						tsx: true,
					},
					target: "es2017",
					transform: {
						react: {
							runtime: "automatic",
							useBuiltIns: true,
						},
					},
					loose: true,
				},
				module: {
					type: isServer ? "commonjs" : "es6",
				},
			},
		}),
	},
	markdown: {
		format: "detect",
		mermaid: true,
	},
	plugins: [
		() => {
			return {
				name: "docusaurus-tailwindcss",
				configurePostCss(options) {
					options.plugins.push(require("tailwindcss"))
					options.plugins.push(require("autoprefixer"))
					return options
				},
			}
		},
	],
	themes: [
		[
			"@docusaurus/theme-mermaid",
			require.resolve("@easyops-cn/docusaurus-search-local"),
			/** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
			{
				hashed: true,
				indexBlog: false,
			},
		],
	],
}

export default config
