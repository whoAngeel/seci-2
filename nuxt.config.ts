// https://nuxt.com/docs/api/configuration/nuxt-config
const sw = process.env.SW === "true";
import process from "node:process";
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		"@vueuse/nuxt",
		"@nuxt/ui",
		"@kevinmarrec/nuxt-pwa",
		"nuxt-icon",
		"@nuxt/fonts",
		"@nuxtjs/color-mode",
		"nuxt-quasar-ui",
		"dayjs-nuxt",
		"@pinia/nuxt",
	],

	appConfig: {
		buildDate: new Date().toISOString(),
	},
	runtimeConfig: {
		dburl: process.env.MONGOURL,
	},
	css: ["~/assets/css/main.css"],
	colorMode: {
		preference: "sunset", // default theme
		dataValue: "theme", // activate data-theme in <html> tag
		classSuffix: "",
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	fonts: {
		families: [
			{
				name: "Rubik",
				provider: "google",
			},
		],
		defaults: {
			weights: [100, 200, 300, 400, 500, 600, 700, 800],
			styles: ["normal", "italic"],
		},
		assets: {
			prefix: "/_fonts",
		},
	},
	pwa: {
		manifest: {
			name: "Sistema de Entradas del Centro de Información",
			short_name: "SECI",
			theme_color: "#fff",
			lang: "es",
			icons: [
				{
					src: "pwa-192x192.png",
					sizes: "192x192",
					type: "image/png",
				},
				{
					src: "pwa-512x512.png",
					sizes: "512x512",
					type: "image/png",
				},
				{
					src: "pwa-512x512.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "any maskable",
				},
			],
		},
	},
	// nitro: {
	// 	esbuild: {
	// 		options: {
	// 			target: "esnext",
	// 		},
	// 	},
	// 	prerender: {
	// 		routes: ["/", "/about"],
	// 	},
	// },
	app: {
		head: {
			htmlAttrs: {
				lang: "es",
			},
			title: "SECI",
			charset: "utf-8",
		},
	},
	// mongoose:{
	// 	uri:`${process.env.MONGOURL}/entradasdb`,
	// 	devtools: true
	// },

	dayjs: {
		defaultLocale: "es",
		plugins: ["relativeTime", "utc", "timezone", "localizedFormat"],
		defaultTimezone: "America/Mexico_City",
	},
	ui: {
		notifications: {
			// Show toasts at the top right of the screen
			position: "top-0 bottom-auto",
		},
	},
	ssr:false
});
