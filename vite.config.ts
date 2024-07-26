import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const baseUrl = '/remix-rodeo-august/';

export default defineConfig({
    base: baseUrl,
    plugins: [
        remix({
            basename: baseUrl,
            ssr: false,
            future: {
                v3_fetcherPersist: true,
                v3_relativeSplatPath: true,
                v3_throwAbortReason: true
            }
        }),
        tsconfigPaths()
    ]
});
