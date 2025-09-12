import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';

export default defineConfig(() => {
    return {
        plugins: [
            ViteImageOptimizer({
                png: {

                    quality: 60,
                },
                jpeg: {

                    quality: 60,
                },
                jpg: {

                    quality: 60,
                },
                tiff: {

                    quality: 60,
                },

                gif: {},
                webp: {

                    lossless: false,
                },
                avif: {

                    lossless: false,
                },
            }),
        ],
    };
});