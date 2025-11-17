import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import { devtools } from '@tanstack/devtools-vite'
import { imagetools } from 'vite-imagetools'

const config = defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    devtools(),
    imagetools(),
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
  ssr: {
    noExternal: ['posthog-js', '@posthog/react']
  }
})

export default config
