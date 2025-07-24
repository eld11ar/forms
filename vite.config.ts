import path from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig, type PluginOption } from "vite"

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), visualizer({ open: true }) as PluginOption],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
})
