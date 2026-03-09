import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/tmaisaigon/", // Thay bằng tên repo của bạn trên GitHub
  plugins: [react()],
})
