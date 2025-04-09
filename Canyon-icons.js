// Canyon-icons.js - Custom icon system
// How to use:
// 1. Add class "Canyon-icon" to any HTML element
// 2. Add data-icon attribute with the icon name
// Example: <span class="Canyon-icon" data-icon="home"></span>

(function() {
    'use strict';

    // Canyon Icons Dictionary
    const iconPaths = {
        // Basic icons
        "person": "M204.23 274.44c2.9-18.06 4.2-35.52-.5-47.59c-4-10.38-12.7-16.19-23.2-20.15L88 176.76c-12-4-23.21-10.7-24-23.94c-1-17 14-28 29-24c0 0 88 31.14 163 31.14s162-31 162-31c18-5 30 9 30 23.79c0 14.21-11 19.21-24 23.94l-88 31.91c-8 3-21 9-26 18.18c-6 10.75-5 29.53-2.1 47.59l5.9 29.63l37.41 163.9c2.8 13.15-6.3 25.44-19.4 27.74S308 489 304.12 476.28l-37.56-115.93q-2.71-8.34-4.8-16.87L256 320l-5.3 21.65q-2.52 10.35-5.8 20.48L208 476.18c-4 12.85-14.5 21.75-27.6 19.46s-22.4-15.59-19.46-27.74l37.39-163.83ZM256 56a40 40 0 1 1 0 80a40 40 0 0 1 0-80Z",
        "plus": "M256 112v288m144-144H112",
        "plus-circle": "M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0ZM256 176v160m80-80H176",
        "activity": "M407.72 224c-3.4 0-14.79.1-18 .3l-64.9 1.7a1.83 1.83 0 0 1-1.69-.9L193.55 67.56a9 9 0 0 0-6.66-3.56H160l73 161a2.35 2.35 0 0 1-2.26 3.35l-121.69 1.8a8.06 8.06 0 0 1-6.6-3.1l-37-45c-3-3.9-8.62-6-13.51-6H33.08c-1.29 0-1.1 1.21-.75 2.43l19.84 71.42a16.3 16.3 0 0 1 0 11.9L32.31 333c-.59 1.95-.52 3 1.77 3H52c8.14 0 9.25-1.06 13.41-6.3l37.7-45.7a8.19 8.19 0 0 1 6.6-3.1l120.68 2.7a2.7 2.7 0 0 1 2.43 3.74L160 448h26.64a9 9 0 0 0 6.65-3.55L323.14 287c.39-.6 2-.9 2.69-.9l63.9 1.7c3.3.2 14.59.3 18 .3C452 288.1 480 275.93 480 256s-27.88-32-72.28-32Z",
        "happy": "M416.07 272a160 160 0 1 0-160 160a160 160 0 0 0 160-160ZM142.12 91.21A46.67 46.67 0 0 0 112 80l-2.79.08C83.66 81.62 64 104 64.07 131c0 13.21 4.66 19.37 10.88 27.23a4.55 4.55 0 0 0 3.24 1.77h.88a3.23 3.23 0 0 0 2.54-1.31L142.38 99a5.38 5.38 0 0 0 1.55-4a5.26 5.26 0 0 0-1.81-3.79Zm227.76 0A46.67 46.67 0 0 1 400 80l2.79.08C428.34 81.62 448 104 447.93 131c0 13.21-4.66 19.37-10.88 27.23a4.55 4.55 0 0 1-3.24 1.76h-.88a3.23 3.23 0 0 1-2.54-1.31L369.62 99a5.38 5.38 0 0 1-1.55-4a5.26 5.26 0 0 1 1.81-3.79ZM256.07 160v112h-80m240 160l-40-40m-280 40l40-40",
        "browser": "M448 176v256H64V176h384m0-96H64v64h384V80ZM144 80h224m-256 48h288",
        "alert": "M256 80c-8.66 0-16.58 7.36-16 16l8 216a8 8 0 0 0 8 8h0a8 8 0 0 0 8-8l8-216c.58-8.64-7.34-16-16-16Zm0 336a16 16 0 1 0 0 32a16 16 0 0 0 0-32Z",
        "warning": "M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0ZM250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 6ZM256 367.91a20 20 0 1 1 20-20a20 20 0 0 1-20 20Z",
        "target": "M256 256a192 192 0 1 0 0-384 192 192 0 0 0 0 384Zm0-160a32 32 0 1 1 0-64 32 32 0 0 1 0 64Zm0 288a32 32 0 1 1 0-64 32 32 0 0 1 0 64Zm-96-96a32 32 0 1 1 0-64 32 32 0 0 1 0 64Zm192 0a32 32 0 1 1 0-64 32 32 0 0 1 0 64Zm-83.13-83.13a32 32 0 1 1 0-45.26 32 32 0 0 1 0 45.26Zm-113.74 0a32 32 0 1 1 0-45.26 32 32 0 0 1 0 45.26Zm113.74 113.74a32 32 0 1 1 0-45.26 32 32 0 0 1 0 45.26Zm-113.74 0a32 32 0 1 1 0-45.26 32 32 0 0 1 0 45.26Z",
        "share": "M344 280l88-88m-200 24l64 64M80 320l104-104m272-48a24 24 0 1 0 0-48 24 24 0 0 0 0 48Zm-136 136a24 24 0 1 0 0-48 24 24 0 0 0 0 48Zm-112-112a24 24 0 1 0 0-48 24 24 0 0 0 0 48Zm-152 152a24 24 0 1 0 0-48 24 24 0 0 0 0 48Z",
        "refresh": "M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0Zm-152-161.41V296m83.13-83.13L296 360m121.41 0H216m83.13 83.13l-144-144M152 416V216m-83.13 83.13l144-144M94.59 152H288m-75.13-83.13L360 216",
        "grid": "M144 144a40 40 0 1 0 0-80 40 40 0 0 0 0 80Zm0 152a40 40 0 1 0 0-80 40 40 0 0 0 0 80Zm0 152a40 40 0 1 0 0-80 40 40 0 0 0 0 80Zm152-304a40 40 0 1 0 0-80 40 40 0 0 0 0 80Zm0 152a40 40 0 1 0 0-80 40 40 0 0 0 0 80Zm0 152a40 40 0 1 0 0-80 40 40 0 0 0 0 80Zm152-304a40 40 0 1 0 0-80 40 40 0 0 0 0 80Zm0 152a40 40 0 1 0 0-80 40 40 0 0 0 0 80Zm0 152a40 40 0 1 0 0-80 40 40 0 0 0 0 80Z",
        "download": "M80 152v256a40 40 0 0 0 40 40h272a40 40 0 0 0 40-40V152M48 64h416a28 28 0 0 1 28 28v80H20V92a28 28 0 0 1 28-28Zm208 280l64-64-64-64m-64 64V224",
        "arrow-left": "M244 400L100 256l144-144M120 256h292",
        "arrow-right-circle": "M249.38 336L170 256l79.38-80m-68.35 80H342M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0Z",
        "arrow-down": "M112 268l144 144 144-144M256 392V100",
        "arrow-up-circle": "M176 262.62L256 342l80-79.38m-80 68.35V170M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z",
        "arrow-right": "M268 112l144 144-144 144m124-144H100",
        "arrow-left-circle": "M262.62 336L342 256l-79.38-80m68.35 80H170M256 448c106 0 192-86 192-192S362 64 256 64S64 150 64 256s86 192 192 192Z",
        "send": "M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96Z",
        "forward": "M240 424v-96c116.4 0 159.39 33.76 208 96c0-119.23-39.57-240-208-240V88L64 256Z",
        "arrow-up": "M112 244l144-144 144 144M256 120v292",
        "arrow-down-circle": "M176 249.38L256 170l80 79.38m-80-68.35V342M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z",
        "email-send": "M266.91 327.74v-37.32c-57.07 0-84.51 13.47-108.58 38.68c-5.4 5.65-15 1.32-14.29-6.43c5.45-61.45 34.14-117.09 122.87-117.09v-37.32a8.32 8.32 0 0 1 14-6L365.42 242a8.2 8.2 0 0 1 0 11.94L281 333.71a8.32 8.32 0 0 1-14.09-5.97M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64S64 150 64 256Z",
        "email-reply": "M245.09 327.74v-37.32c57.07 0 84.51 13.47 108.58 38.68c5.4 5.65 15 1.32 14.29-6.43c-5.45-61.45-34.14-117.09-122.87-117.09v-37.32a8.32 8.32 0 0 0-14.05-6L146.58 242a8.2 8.2 0 0 0 0 11.94L231 333.71a8.32 8.32 0 0 0 14.09-5.97M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z",
        "at-sign": "M319.77 415.77c-28.56 12-47.28 14.5-79.28 14.5c-97.2 0-169-78.8-160.49-176s94.31-176 191.51-176C381 78.27 441.19 150 432.73 246c-6.31 71.67-52.11 92.32-76.09 88.07c-22.56-4-41.18-24.42-37.74-63.5l8.48-96.25M320 254.27c-4.5 51-40.12 80-80.55 80s-67.34-35.82-63.45-80s37.12-80 77.55-80s70.33 36 66.45 80",
        "at-sign-circle": "M448.08 256.08c0-106-86-192-192-192s-192 86-192 192s86 192 192 192s192-85.97 192-192Z M300.81 358.29c-20.83 7.42-34.05 9.59-54.19 9.59c-61.17 0-106.39-50.07-101-111.84S205 144.21 266.14 144.21c68.92 0 106.79 45.55 101.47 106.55c-4 45.54-32.8 58.66-47.89 56c-14.2-2.55-25.92-15.52-23.75-40.35l5.62-44.66c-7.58-9.17-28.11-18-49.93-14.54C231.77 210.3 209 228 206.56 256s14.49 50.84 39.93 50.84s47.86-18.39 50.69-50.84",
        "paper-plane": "M216.08 192v143.85a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 1 0 191 0V159.74",
        "delete": "M135.19 390.14a28.8 28.8 0 0 0 21.68 9.86h246.26A29 29 0 0 0 432 371.13V140.87A29 29 0 0 0 403.13 112H156.87a28.84 28.84 0 0 0-21.67 9.84L46.33 256l88.86 134.11Z M336.67 192.33L206.66 322.34m130.01 0L206.66 192.33m130.01 0L206.66 322.34m130.01 0L206.66 192.33",
        "lock": "M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16Zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32",
        "lock-open": "M256 256v128m64-64H192M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16Zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32",
        "lock-check": "m320 264l-89.6 112l-38.4-44.88 M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16Zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32",
        "lock-key": "M160 224v16a96 96 0 0 0 96 96h0a96 96 0 0 0 96-96v-16 M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16Zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32",
        "lock-minus": "M320 320H192M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16Zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32",
        
        // Basic icons (existing)
        "person": "M204.23 274.44c2.9-18.06 4.2-35.52-.5-47.59c-4-10.38-12.7-16.19-23.2-20.15L88 176.76c-12-4-23.21-10.7-24-23.94c-1-17 14-28 29-24c0 0 88 31.14 163 31.14s162-31 162-31c18-5 30 9 30 23.79c0 14.21-11 19.21-24 23.94l-88 31.91c-8 3-21 9-26 18.18c-6 10.75-5 29.53-2.1 47.59l5.9 29.63l37.41 163.9c2.8 13.15-6.3 25.44-19.4 27.74S308 489 304.12 476.28l-37.56-115.93q-2.71-8.34-4.8-16.87L256 320l-5.3 21.65q-2.52 10.35-5.8 20.48L208 476.18c-4 12.85-14.5 21.75-27.6 19.46s-22.4-15.59-19.46-27.74l37.39-163.83ZM256 56a40 40 0 1 1 0 80a40 40 0 0 1 0-80Z",
        "plus": "M256 112v288m144-144H112",
        "plus-circle": "M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0ZM256 176v160m80-80H176"
    };

   
    // Initialize Canyon Icons
    function initCanyonIcons() {
        const icons = document.querySelectorAll('.Canyon-icon');
        
        icons.forEach(icon => {
            const iconName = icon.getAttribute('data-icon');
            const iconPath = iconPaths[iconName];
            
            if (iconPath) {
                // Create SVG element
                const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute("viewBox", "0 0 24 24");
                svg.setAttribute("fill", "currentColor");
                
                // Create path element
                const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                path.setAttribute("d", iconPath);
                
                // Append path to SVG
                svg.appendChild(path);
                
                // Clear existing content and append SVG
                icon.innerHTML = '';
                icon.appendChild(svg);
                
                // Add default class for styling
                icon.classList.add('canyon-icon-loaded');
            } else {
                console.warn(`Canyon Icon: Icon "${iconName}" not found.`);
            }
        });
    }

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCanyonIcons);
    } else {
        initCanyonIcons();
    }

    // Watch for dynamically added icons (using MutationObserver)
    if (typeof MutationObserver !== 'undefined') {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length) {
                    const newIcons = [];
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1) { // Element node
                            if (node.classList && node.classList.contains('Canyon-icon')) {
                                newIcons.push(node);
                            }
                            if (node.querySelectorAll) {
                                const childIcons = node.querySelectorAll('.Canyon-icon');
                                childIcons.forEach(icon => newIcons.push(icon));
                            }
                        }
                    });
                    
                    if (newIcons.length) {
                        // Reinitialize with only new icons
                        const tempContainer = document.createElement('div');
                        newIcons.forEach(icon => tempContainer.appendChild(icon.cloneNode(true)));
                        tempContainer.querySelectorAll('.Canyon-icon').forEach(icon => {
                            if (!icon.querySelector('svg')) {
                                const iconName = icon.getAttribute('data-icon');
                                const iconPath = iconPaths[iconName];
                                
                                if (iconPath) {
                                    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                    svg.setAttribute("viewBox", "0 0 24 24");
                                    svg.setAttribute("fill", "currentColor");
                                    
                                    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                    path.setAttribute("d", iconPath);
                                    
                                    svg.appendChild(path);
                                    icon.innerHTML = '';
                                    icon.appendChild(svg);
                                    icon.classList.add('canyon-icon-loaded');
                                }
                            }
                        });
                    }
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
})();
