import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: [".ts", ".js"]
  },
  server: {
    port: 3001
  }
})
