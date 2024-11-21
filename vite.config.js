export default {
  base: '/epl-leicester/',
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
  
  