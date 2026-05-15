// vite.config.js
import { defineConfig } from "file:///C:/Users/Alberto/Desktop/Cicatrices%20de%20Primus/Primus/cicatrices-de-primus/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Alberto/Desktop/Cicatrices%20de%20Primus/Primus/cicatrices-de-primus/node_modules/@vitejs/plugin-react/dist/index.js";
import { viteStaticCopy } from "file:///C:/Users/Alberto/Desktop/Cicatrices%20de%20Primus/Primus/cicatrices-de-primus/node_modules/vite-plugin-static-copy/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "audio", dest: "." }
      ]
    })
  ],
  server: {
    fs: { allow: ["."] },
    proxy: {
      "/api": { target: "http://localhost:3001", changeOrigin: true, credentials: true },
      "/auth": { target: "http://localhost:3001", changeOrigin: true, credentials: true }
    }
  },
  build: {
    outDir: "dist",
    charset: "utf8"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBbGJlcnRvXFxcXERlc2t0b3BcXFxcQ2ljYXRyaWNlcyBkZSBQcmltdXNcXFxcUHJpbXVzXFxcXGNpY2F0cmljZXMtZGUtcHJpbXVzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBbGJlcnRvXFxcXERlc2t0b3BcXFxcQ2ljYXRyaWNlcyBkZSBQcmltdXNcXFxcUHJpbXVzXFxcXGNpY2F0cmljZXMtZGUtcHJpbXVzXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9BbGJlcnRvL0Rlc2t0b3AvQ2ljYXRyaWNlcyUyMGRlJTIwUHJpbXVzL1ByaW11cy9jaWNhdHJpY2VzLWRlLXByaW11cy92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgeyB2aXRlU3RhdGljQ29weSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN0YXRpYy1jb3B5J1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICB2aXRlU3RhdGljQ29weSh7XG4gICAgICB0YXJnZXRzOiBbXG4gICAgICAgIHsgc3JjOiAnYXVkaW8nLCBkZXN0OiAnLicgfSxcbiAgICAgIF0sXG4gICAgfSksXG4gIF0sXG4gIHNlcnZlcjoge1xuICAgIGZzOiB7IGFsbG93OiBbJy4nXSB9LFxuICAgIHByb3h5OiB7XG4gICAgICAnL2FwaSc6IHsgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAxJywgY2hhbmdlT3JpZ2luOiB0cnVlLCBjcmVkZW50aWFsczogdHJ1ZSB9LFxuICAgICAgJy9hdXRoJzogeyB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnLCBjaGFuZ2VPcmlnaW46IHRydWUsIGNyZWRlbnRpYWxzOiB0cnVlIH0sXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdkaXN0JyxcbiAgICBjaGFyc2V0OiAndXRmOCcsXG4gIH0sXG59KVxuXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStaLFNBQVMsb0JBQW9CO0FBQzViLE9BQU8sV0FBVztBQUNsQixTQUFTLHNCQUFzQjtBQUUvQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixlQUFlO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUCxFQUFFLEtBQUssU0FBUyxNQUFNLElBQUk7QUFBQSxNQUM1QjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQUEsSUFDbkIsT0FBTztBQUFBLE1BQ0wsUUFBUSxFQUFFLFFBQVEseUJBQXlCLGNBQWMsTUFBTSxhQUFhLEtBQUs7QUFBQSxNQUNqRixTQUFTLEVBQUUsUUFBUSx5QkFBeUIsY0FBYyxNQUFNLGFBQWEsS0FBSztBQUFBLElBQ3BGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLEVBQ1g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
