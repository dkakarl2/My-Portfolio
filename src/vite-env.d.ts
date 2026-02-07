/// <reference types="vite/client" />

// Declare figma:asset modules as string imports (image URLs)
declare module 'figma:asset/*' {
    const value: string;
    export default value;
}
