TailwindCSS Build Fix Plan:

- [ ] Install the package @tailwindcss/postcss:
      npm install -D @tailwindcss/postcss

- [ ] Edit github-user-search/postcss.config.js:
      - Replace the direct usage of 'tailwindcss' plugin with importing from '@tailwindcss/postcss'.
      - Adjust export to proper syntax if needed (ensure ESM compatibility).
      - Example postcss.config.js:

        import tailwindcss from '@tailwindcss/postcss';
        import autoprefixer from 'autoprefixer';

        export default {
          plugins: {
            tailwindcss,
            autoprefixer,
          },
        };

- [ ] Run build again to verify fix.

After these steps, the build error related to TailwindCSS PostCSS plugin should be resolved.
