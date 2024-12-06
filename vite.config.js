import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';

// Replace 'your-username' and 'your-repository' with your GitHub username and repo name.
const repoName = 'HR_Scheduler';

export default defineConfig({
  plugins: [react(), ghPages()],
  base: `/${repoName}/`, // GitHub Pages requires the repository name in the base URL
});
