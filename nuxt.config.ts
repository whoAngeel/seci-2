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
		"nuxt-quasar-ui",
	],
	appConfig: {
		buildDate: new Date().toISOString(),
	},
	// css: ["~/assets/css/main.css"],
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
	nitro: {
		esbuild: {
			options: {
				target: "esnext",
			},
		},
		prerender: {
			routes: ["/", "/about"],
		},
	},
	app: {
		head: {
			htmlAttrs: {
				lang: "es",
			},
			title: "SECI",
			charset: "utf-8",
		},
	},
});
