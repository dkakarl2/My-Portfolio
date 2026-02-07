import type { Plugin } from 'vite';
import path from 'path';

export function figmaAssetsPlugin(): Plugin {
    return {
        name: 'vite-plugin-figma-assets',
        resolveId(id) {
            if (id.startsWith('figma:asset/')) {
                // Extract the filename from the figma:asset/ protocol
                // Format: figma:asset/HASH.png -> /src/assets/HASH.png
                const assetFilename = id.replace('figma:asset/', '');

                // Always resolve to the absolute path from project root
                const absolutePath = path.resolve(process.cwd(), 'src/assets', assetFilename);

                return absolutePath;
            }
        },
    };
}
