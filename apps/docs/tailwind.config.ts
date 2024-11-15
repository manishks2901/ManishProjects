// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets" | "darkMode" | "plugins" | "theme"> = {
    darkMode: ["class"],
    content: [
    "./src/**/*.tsx",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [sharedConfig],
    plugins: [require("tailwindcss-animate")],
    theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
				'black-100': 'rgba(18, 18, 18, 1.0)',  // 100% opacity
				'black-90': 'rgba(18, 18, 18, 0.9)',
				'black-80': 'rgba(18, 18, 18, 0.8)',
				'black-70': 'rgba(18, 18, 18, 0.7)',
				'black-60': 'rgba(18, 18, 18, 0.6)',
				'black-50': 'rgba(18, 18, 18, 0.5)',
				'black-40': 'rgba(18, 18, 18, 0.4)',
				'black-30': 'rgba(18, 18, 18, 0.3)',
				'black-20': 'rgba(18, 18, 18, 0.2)',
				'black-10': 'rgba(18, 18, 18, 0.1)',
    		}
    	}
    }
};

export default config;
