<script lang="ts">
    // the div inside the computer is not iside the svg rect, but is a sibling to the svg itself
    // thus we absolutely position the element to make it appear inside the svg
    import hideDocument from "$lib/loader";
    import nodesStore from "$lib/stores/nodes";
    import WebsiteHolder from "./WebsiteHolder.svelte";
    export let headingHeight: number, headingMargin: number;
    let svgHeight = 0,
        strokeWidth = 0,
        holderTop = 0,
        holderLeft = 0,
        rectHeight = 0,
        svgViewBoxHeight = 0,
        holderStyles = "",
        svgMarginHorizontal = 0;
    let svg: SVGSVGElement | undefined;
    let rect: SVGRectElement | undefined;

    nodesStore.subscribe((nodes) => {
        svg = nodes.websiteHolderSvg;
        rect = nodes.websiteHolderRect;
    });

    function updateScreen(
        headingHeight: number,
        headingMargin: number,
        svg: SVGSVGElement | undefined,
        rect: SVGRectElement | undefined,
    ) {
        svgHeight = svg ? svg.clientHeight : 0;
        svgViewBoxHeight = svg ? svg.viewBox.baseVal.height : 0;
        strokeWidth = (svgHeight * 4) / svgViewBoxHeight;
        svgMarginHorizontal = svg ? parseInt(getComputedStyle(svg).marginLeft.slice(0, -2)) * 2 : 0;
        holderTop = headingHeight + headingMargin + strokeWidth;
        holderLeft = svgMarginHorizontal / 2 + strokeWidth;
        rectHeight = rect ? rect.getBoundingClientRect().height - strokeWidth * 2 : 0;
        holderStyles = `
            --top: ${holderTop}px;
            --left: ${holderLeft}px;
            --width: calc((100% - ${svgMarginHorizontal}px) - (${strokeWidth}px * 2));
            --height: ${rectHeight}px`;
    }

    $: updateScreen(headingHeight, headingMargin, svg, rect);
    const preparedHideDocument = (event: Event) => {
        let target = event.target as HTMLAnchorElement;
        hideDocument(target.href);
    };
</script>

<svelte:window
    on:resize={() => {
        updateScreen(headingHeight, headingMargin, svg, rect);
    }}
/>
<WebsiteHolder />
<div id="computer-holder" style={holderStyles}>
    <div id="navbar">
        <div id="logo"></div>
        <div id="links">
            <a class="link" href="/" on:click|preventDefault={preparedHideDocument}>Home</a>
            <a class="link" href="/pricing" on:click|preventDefault={preparedHideDocument}>
                Pricing
            </a>
            <a class="link" href="/faqs" on:click|preventDefault={preparedHideDocument}>FAQs</a>
            <a class="link" href="/about-us" on:click|preventDefault={preparedHideDocument}>
                About us
            </a>
        </div>
    </div>
    <p>
        I have been learning to code since I was 13, I started learing the terminal, slowly working
        my way up to building my own programs
    </p>
    <p>
        I learnt Python first which to this day is my favourite programming language. I built
        various GUI applications including a messaging app and a school managing app, which was my
        first attempt at earning
    </p>
    <p>
        But 2 years went by I realized the potential of web development and got into the world of
        Javascript
    </p>
    <p>
        Ever since then my dreams to earn have become trueer than ever, and I want to teach others,
        how to earn this way, without them wastig as much time as I did
    </p>
    <p>
        Over the years I have learnt many programming languages, there tools and frameworks, linux,
        security, and a lot more
    </p>
</div>

<style lang="scss">
    #computer-holder {
        position: absolute;
        background-color: #111;
        top: var(--top);
        left: var(--left);
        width: calc(var(--width) + 2px); // 2px added for margin of error
        height: calc(var(--height) + 2px); // 2px added for margin of error
        overflow: scroll;
        box-sizing: border-box;
        background-image: radial-gradient(farthest-side at top left, #59c3, #59c0 100%),
            radial-gradient(farthest-side at bottom right, #c9c3, #59c0 100%);
    }

    #navbar {
        position: sticky;
        display: flow-root;
        top: 0;
        height: 2rem;
        width: 100%;
        background-color: #333;
        z-index: 3;

        #logo {
            float: left;
            margin-left: 10px;
            background-image: url("/logo.jpeg");
            background-size: cover;
            height: 2rem;
            width: 2rem;
        }

        #links {
            float: right;
            height: 40%;

            .link {
                font-size: 0.8rem;
                color: #aaa;
                text-decoration: none;
                padding-left: 2px;
                padding-right: 2px;
            }
        }
    }

    p {
        color: #eee;
        font-size: 0.9rem;
        margin: 10px 50px 10px 50px;
        padding: 5px 10px 5px 10px;
        border-radius: 5px;
        background-color: #fff1;

        @media (max-width: 1000px) {
            margin: 10px 25px 10px 25px;
        }

        @media (max-width: 900px) {
            font-size: 0.8rem;
        }

        @media (max-width: 800px) {
            font-size: 0.9rem;
            margin: 10px 40px 10px 40px;
        }

        @media (max-width: 700px) {
            font-size: 0.9rem;
            margin: 10px 20px 10px 20px;
        }

        @media (max-width: 600px) {
            font-size: 1rem;
            margin: 10px 40px 10px 40px;
        }

        @media (max-width: 450px) {
            font-size: 0.9rem;
            margin: 10px 20px 10px 20px;
        }
    }

    p:first-of-type {
        margin-top: 20px;
    }
</style>
