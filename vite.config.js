export default {
  base: '/andrewlux-otech/epl-leicester/',
  build: {
    rollupOptions: {
      output: {
        format: 'iife',
        name: 'ScrollamaBundle',
        dir: 'dist'
      }
    },
    outDir: 'dist',
  }
};
  
  