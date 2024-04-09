<div id="holder">
    <p>What I learnt</p>
    <div id="what-i-learnt"></div>
</div>

<style lang="scss">
    @keyframes marquee {
        from {
            background-position: 0 0;
        }
        to {
            background-position: 300px 0;
        }
    }

    #holder {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;

        p {
            width: min-content;
            height: 100%;
            box-sizing: border-box;
            padding: 0 5px 0 5px;
            text-align: center;
            display: flex;
            align-items: center;
            font-size: 2.3rem;
            text-wrap: balance;
            font-weight: 700;
            color: #fff;
            background-color: #333;
            margin: 0;
            box-shadow: 2px 0 5px 2px #0004;

            @media (max-width: 550px) {
                font-size: 1.8rem;
            }
        }
    }

    #what-i-learnt {
        width: 100%;
        background-image: url("/about-me/what-i-learnt.png");
        background-size: auto 100%;
        animation: marquee 10s linear forwards infinite;
    }
</style>
