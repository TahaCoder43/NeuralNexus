<script lang="ts">
    import { goto } from "$app/navigation";

    let handleWhatsappClicked = () => {
        window.open("https://wa.me/923185084810?text=Asslam-o-alakum"); // you may need your own phone number
    };
    let handleDiscordClicked = () => {
        window.open("https://discord.gg/TjFv3H39");
    };
    let handleInstagramClicked = () => {
        window.open("https://instagram.com/neuralnexus4/");
    };
    let handleFacebookClicked = () => {
        goto("https://www.google.com");
    };
</script>

<svg version="1.1" viewBox="0 0 841 594" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <filter
            id="filter11131"
            x="-.066667"
            y="-.15067"
            width="1.1333"
            height="1.3013"
            style="color-interpolation-filters:sRGB"
        >
            <feGaussianBlur result="result8" stdDeviation="0.0064241251" />
            <feTurbulence
                baseFrequency="0.03 0.03"
                numOctaves="8"
                result="result7"
                seed="77"
                type="fractalNoise"
            />
            <feColorMatrix
                result="result5"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1.6 -0.6 "
            />
            <feComposite in="result7" in2="result8" operator="in" result="result6" />
            <feDisplacementMap in="result5" in2="result6" result="result4" scale="60" />
            <feConvolveMatrix
                divisor="2"
                kernelMatrix="2 0 0 0 4 0 0 0 -2 "
                order="3 3"
                result="result9"
                targetX="2"
                targetY="2"
            />
            <feComposite in="result9" in2="SourceGraphic" operator="atop" result="result10" />
            <feBlend in2="result10" mode="darken" result="fbSourceGraphic" />
            <feGaussianBlur in="fbSourceGraphic" result="result0" stdDeviation="5" />
            <feSpecularLighting
                lighting-color="rgb(242,215,108)"
                in="result0"
                result="result1"
                specularExponent="25"
                surfaceScale="5"
            >
                <feDistantLight azimuth="235" elevation="60" />
            </feSpecularLighting>
            <feComposite in="result1" in2="fbSourceGraphic" operator="in" result="result2" />
            <feComposite
                in="fbSourceGraphic"
                in2="result2"
                k2="1"
                k3="1"
                operator="arithmetic"
                result="result4"
            />
        </filter>
        <linearGradient
            id="logosWhatsappIcon0"
            x1="128.29"
            x2="128.29"
            y1="252.13"
            y2="4.442"
            gradientTransform="scale(.99776 1.0022)"
            gradientUnits="userSpaceOnUse"
        >
            <stop stop-color="#1faf38" offset="0" />
            <stop stop-color="#60d669" offset="1" />
        </linearGradient>
        <linearGradient
            id="logosWhatsappIcon1"
            x1="128.29"
            x2="128.29"
            y1="256.57"
            gradientTransform="scale(.99777 1.0022)"
            gradientUnits="userSpaceOnUse"
        >
            <stop stop-color="#f9f9f9" offset="0" />
            <stop stop-color="#fff" offset="1" />
        </linearGradient>
        <radialGradient
            id="skillIconsInstagram0"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(0 -253.72 235.98 0 68 275.72)"
            gradientUnits="userSpaceOnUse"
        >
            <stop stop-color="#fd5" offset="0" />
            <stop stop-color="#fd5" offset=".1" />
            <stop stop-color="#ff543e" offset=".5" />
            <stop stop-color="#c837ab" offset="1" />
        </radialGradient>
        <radialGradient
            id="skillIconsInstagram1"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(22.26 111.21 -458.4 91.754 -42.881 18.441)"
            gradientUnits="userSpaceOnUse"
        >
            <stop stop-color="#3771c8" offset="0" />
            <stop stop-color="#3771c8" offset=".128" />
            <stop stop-color="#60f" stop-opacity="0" offset="1" />
        </radialGradient>
        <clipPath id="clipPath99">
            <circle
                cx="128"
                cy="128"
                r="127.77"
                style="fill:none;paint-order:fill markers stroke;stroke-linecap:round;stroke-linejoin:round;stroke-width:5.7714;stroke:#1d13c6"
            />
        </clipPath>
        <clipPath id="skillIconsDiscord0">
            <path d="M28 51h200v154.93H28z" fill="#fff" />
        </clipPath>
        <clipPath id="clipPath101">
            <ellipse
                cx="128"
                cy="128"
                rx="127.49"
                ry="127.02"
                style="fill:none;stroke-linecap:square;stroke-miterlimit:5.4;stroke-width:5.6977;stroke:#1d13c6"
            />
        </clipPath>
    </defs>
    <ellipse
        transform="matrix(.95281 -.30358 -.40739 .91326 0 0)"
        cx="651.91"
        cy="510.82"
        rx="364.51"
        ry="160.68"
        style="fill:none;paint-order:fill markers stroke;stroke-dasharray:3.23846, 9.71537;stroke-linecap:round;stroke-linejoin:round;stroke-width:3.2385;stroke:#9d9d9d"
    />
    <ellipse
        transform="matrix(.95281 -.30358 -.40739 .91326 0 0)"
        cx="655.49"
        cy="511.66"
        rx="261.71"
        ry="115.36"
        style="fill:none;paint-order:fill markers stroke;stroke-dasharray:3.23846, 9.71537;stroke-linecap:round;stroke-linejoin:round;stroke-width:3.2385;stroke:#9d9d9d"
    />
    <ellipse
        transform="matrix(.95281 -.30358 -.40739 .91326 0 0)"
        cx="657.01"
        cy="514.1"
        rx="153.86"
        ry="67.821"
        style="fill:none;paint-order:fill markers stroke;stroke-dasharray:3.23846, 9.71537;stroke-linecap:round;stroke-linejoin:round;stroke-width:3.2385;stroke:#9d9d9d"
    />
    <ellipse
        transform="matrix(.9602 -.30749 -.40901 .92155 7.5394 2.1465)"
        cx="638.74"
        cy="503.46"
        rx="349.9"
        ry="154.82"
        style="fill:none;filter:url(#filter11131);paint-order:fill markers stroke;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:.17389;stroke-width:69.278;stroke:#161330"
    />
    <g
        transform="matrix(.25461 .056288 0 .25461 725.03 68.42)"
        id="facebook"
        on:click={handleFacebookClicked}
    >
        <path
            d="m256 128c0-70.692-57.308-128-128-128s-128 57.308-128 128c0 63.888 46.808 116.84 108 126.44v-89.445h-32.5v-37h32.5v-28.2c0-32.08 19.11-49.8 48.348-49.8 14.004 0 28.652 2.5 28.652 2.5v31.5h-16.14c-15.901 0-20.86 9.867-20.86 19.99v24.01h35.5l-5.675 37h-29.825v89.445c61.192-9.602 108-62.556 108-126.44"
            fill="#1877f2"
        />
        <path
            d="m177.82 165 5.675-37h-35.5v-24.01c0-10.124 4.959-19.99 20.86-19.99h16.14v-31.5s-14.648-2.5-28.653-2.5c-29.237 0-48.347 17.72-48.347 49.8v28.2h-32.5v37h32.5v89.445a128.96 128.96 0 0 0 20 1.555 128.9 128.9 0 0 0 20-1.555v-89.445z"
            fill="#fff"
        />
    </g>
    <g
        transform="matrix(.27444 .059583 0 .27321 380.85 225.71)"
        id="whatsapp"
        on:click={handleWhatsappClicked}
    >
        <path
            d="m5.463 127.46c-6e-3 21.677 5.658 42.843 16.428 61.499l-17.458 63.742 65.232-17.104a122.99 122.99 0 0 0 58.8 14.97h0.054c67.815 0 123.02-55.183 123.05-123.01 0.013-32.867-12.775-63.773-36.009-87.025-23.23-23.25-54.125-36.061-87.043-36.076-67.823 0-123.02 55.18-123.05 123"
            fill="url(#logosWhatsappIcon0)"
            style="fill:url(#logosWhatsappIcon0)"
        />
        <path
            d="m1.07 127.42c-7e-3 22.457 5.86 44.38 17.014 63.704l-18.084 66.027 67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h0.055c70.248 0 127.43-57.168 127.46-127.42 0.012-34.048-13.236-66.065-37.3-90.15-24.067-24.082-56.067-37.354-90.164-37.368-70.26 0-127.44 57.16-127.46 127.42m40.24 60.376-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363 0.022-58.395 47.546-105.9 105.98-105.9 28.3 0.012 54.896 11.044 74.9 31.06 20.003 20.018 31.01 46.628 31.003 74.93-0.026 58.395-47.551 105.91-105.94 105.91h-0.042c-19.013-0.01-37.66-5.116-53.922-14.765l-3.87-2.295-40.098 10.513z"
            fill="url(#logosWhatsappIcon1)"
            style="fill:url(#logosWhatsappIcon1)"
        />
        <path
            d="m96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503-1.858-0.08-3.982-0.074-6.104-0.074-2.124 0-5.575 0.799-8.492 3.984-2.92 3.188-11.148 10.892-11.148 26.561 0 15.67 11.413 30.813 13.004 32.94 1.593 2.123 22.033 35.307 54.405 48.073 26.904 10.609 32.379 8.499 38.218 7.967 5.84-0.53 18.844-7.702 21.497-15.139 2.655-7.436 2.655-13.81 1.859-15.142-0.796-1.327-2.92-2.124-6.105-3.716-3.186-1.593-18.844-9.298-21.763-10.361-2.92-1.062-5.043-1.592-7.167 1.597-2.124 3.184-8.223 10.356-10.082 12.48-1.857 2.129-3.716 2.394-6.9 0.801-3.187-1.598-13.444-4.957-25.613-15.806-9.468-8.442-15.86-18.867-17.718-22.056-1.858-3.184-0.199-4.91 1.398-6.497 1.431-1.427 3.186-3.719 4.78-5.578 1.588-1.86 2.118-3.187 3.18-5.311 1.063-2.126 0.531-3.986-0.264-5.579-0.798-1.593-6.987-17.343-9.819-23.64"
            fill="#fff"
        />
    </g>
    <g
        transform="matrix(.28017 .057846 0 .28017 526.92 164.91)"
        clip-path="url(#clipPath99)"
        id="instagram"
        on:click={handleInstagramClicked}
    >
        <rect
            width="256"
            height="256"
            rx="60"
            fill="url(#skillIconsInstagram0)"
            style="fill:url(#skillIconsInstagram0)"
        />
        <rect
            width="256"
            height="256"
            rx="60"
            fill="url(#skillIconsInstagram1)"
            style="fill:url(#skillIconsInstagram1)"
        />
        <path
            d="m128.01 28c-27.158 0-30.567 0.119-41.233 0.604-10.646 0.488-17.913 2.173-24.271 4.646-6.578 2.554-12.157 5.971-17.715 11.531-5.563 5.559-8.98 11.138-11.542 17.713-2.48 6.36-4.167 13.63-4.646 24.271-0.477 10.667-0.602 14.077-0.602 41.236s0.12 30.557 0.604 41.223c0.49 10.646 2.175 17.913 4.646 24.271 2.556 6.578 5.973 12.157 11.533 17.715 5.557 5.563 11.136 8.988 17.709 11.542 6.363 2.473 13.631 4.158 24.275 4.646 10.667 0.485 14.073 0.604 41.23 0.604 27.161 0 30.559-0.119 41.225-0.604 10.646-0.488 17.921-2.173 24.284-4.646 6.575-2.554 12.146-5.979 17.702-11.542 5.563-5.558 8.979-11.137 11.542-17.712 2.458-6.361 4.146-13.63 4.646-24.272 0.479-10.666 0.604-14.066 0.604-41.225s-0.125-30.567-0.604-41.234c-0.5-10.646-2.188-17.912-4.646-24.27-2.563-6.578-5.979-12.157-11.542-17.716-5.562-5.562-11.125-8.979-17.708-11.53-6.375-2.474-13.646-4.16-24.292-4.647-10.667-0.485-14.063-0.604-41.23-0.604zm-8.971 18.021c2.663-4e-3 5.634 0 8.971 0 26.701 0 29.865 0.096 40.409 0.575 9.75 0.446 15.042 2.075 18.567 3.444 4.667 1.812 7.994 3.979 11.492 7.48 3.5 3.5 5.666 6.833 7.483 11.5 1.369 3.52 3 8.812 3.444 18.562 0.479 10.542 0.583 13.708 0.583 40.396s-0.104 29.855-0.583 40.396c-0.446 9.75-2.075 15.042-3.444 18.563-1.812 4.667-3.983 7.99-7.483 11.488-3.5 3.5-6.823 5.666-11.492 7.479-3.521 1.375-8.817 3-18.567 3.446-10.542 0.479-13.708 0.583-40.409 0.583-26.702 0-29.867-0.104-40.408-0.583-9.75-0.45-15.042-2.079-18.57-3.448-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563-0.479-10.542-0.575-13.708-0.575-40.413 0-26.704 0.096-29.854 0.575-40.396 0.446-9.75 2.075-15.042 3.444-18.567 1.813-4.667 3.983-8 7.484-11.5 3.5-3.5 6.833-5.667 11.5-7.483 3.525-1.375 8.819-3 18.569-3.448 9.225-0.417 12.8-0.542 31.437-0.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996 0 6.625 5.375 12 12 12s12-5.375 12-12-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344 0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334 0 18.409-14.925 33.334-33.334 33.334-18.41 0-33.333-14.925-33.333-33.334 0-18.411 14.923-33.334 33.333-33.334"
            fill="#fff"
        />
    </g>
    <g
        transform="matrix(.28327 .053575 0 .28433 627.65 110.61)"
        clip-path="url(#clipPath101)"
        fill="none"
        id="discord"
        on:click={handleDiscordClicked}
    >
        <rect width="256" height="256" rx="60" fill="#5865f2" />
        <g clip-path="url(#skillIconsDiscord0)">
            <path
                d="m197.31 64.797a164.92 164.92 0 0 0-40.709-12.627 0.618 0.618 0 0 0-0.654 0.31c-1.758 3.126-3.706 7.206-5.069 10.412-15.373-2.302-30.666-2.302-45.723 0-1.364-3.278-3.382-7.286-5.148-10.412a0.643 0.643 0 0 0-0.655-0.31 164.47 164.47 0 0 0-40.709 12.627 0.583 0.583 0 0 0-0.268 0.23c-25.928 38.736-33.03 76.52-29.546 113.84a0.685 0.685 0 0 0 0.26 0.468c17.106 12.563 33.677 20.19 49.94 25.245a0.648 0.648 0 0 0 0.702-0.23c3.847-5.254 7.276-10.793 10.217-16.618a0.633 0.633 0 0 0-0.347-0.881c-5.44-2.064-10.619-4.579-15.601-7.436a0.642 0.642 0 0 1-0.063-1.064 86.364 86.364 0 0 0 3.098-2.428 0.618 0.618 0 0 1 0.646-0.088c32.732 14.944 68.167 14.944 100.51 0a0.617 0.617 0 0 1 0.655 0.08 79.613 79.613 0 0 0 3.106 2.436 0.642 0.642 0 0 1-0.055 1.064 102.62 102.62 0 0 1-15.609 7.428 0.638 0.638 0 0 0-0.339 0.889 133.08 133.08 0 0 0 10.208 16.61 0.636 0.636 0 0 0 0.702 0.238c16.342-5.055 32.913-12.682 50.02-25.245a0.646 0.646 0 0 0 0.26-0.46c4.17-43.141-6.985-80.616-29.571-113.84a0.506 0.506 0 0 0-0.26-0.238m-102.47 91.345c-9.855 0-17.975-9.047-17.975-20.158s7.963-20.158 17.975-20.158c10.09 0 18.131 9.127 17.973 20.158 0 11.111-7.962 20.158-17.973 20.158m66.456 0c-9.855 0-17.974-9.047-17.974-20.158s7.962-20.158 17.974-20.158c10.09 0 18.131 9.127 17.974 20.158 0 11.111-7.884 20.158-17.974 20.158"
                fill="#fff"
            />
        </g>
    </g>
</svg>

<style lang="scss">
    svg {
        width: 100%;
        max-height: 100%;
    }

    #discord,
    #whatsapp,
    #instagram,
    #facebook {
        transition: filter 0.3s;
        cursor: pointer;

        &:hover {
            filter: brightness(0.7);
        }
    }
</style>
