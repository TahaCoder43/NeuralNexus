<script lang="ts">
    import Questions from "./Questions.svelte";
    import Footer from "./Footer.svelte";
    import { PUBLIC_EMAILJS_KEY } from "$env/static/public";
    import emailjs from "@emailjs/browser";

    let form: HTMLFormElement;
    let offerNames = ["O-level: Single Subject", "Full-Stack Developer", "Mastery: All In One!"];
    // it's not a problem as stated by emailjs
    emailjs.init({ publicKey: PUBLIC_EMAILJS_KEY });

    function handleSubmit() {
        const formData = new FormData(form);
        let firstName = formData.get("first-name");
        let lastName = formData.get("last-name");
        let contactInfo = formData.get("contact-info");
        if (contactInfo === "") {
            alert(
                "We need to know how we can respond back to you. Please fill in the Phone Number or Email",
            );
            return;
        }
        let questions = "";
        let offerText = "";
        form.querySelectorAll(".questions input").forEach((element, index) => {
            let input = element as HTMLInputElement;
            questions += `\t${index + 1}. ${input.value}\n`;
        });
        let offer = form.querySelector("input[name=offer]:checked");
        if (offer !== null) {
            let offerNumber = parseInt(offer.id.slice(5));
            offerText = `I have chosen the ${offerNames[offerNumber - 1]}`;
        } else {
            offerText = "I have not decided which option I want to choose";
        }
        emailjs.send("gmail", "contact_me", {
            first_name: firstName,
            last_name: lastName,
            contact_info: contactInfo,
            offer_text: offerText,
            questions: questions,
        });
        //         let subject = `From ${firstName} ${lastName}`;
        //         let para = `You can contact me at ${contactInfo}
        // ${offerText}
        // My questions are:
        // ${questions}
        // `;
        alert("Form submitted succesfully! InshaAllah we will contact you within one day.");
    }
</script>

<form on:submit={handleSubmit} bind:this={form}>
    <h1>Contact Us!</h1>
    <div id="rocket"></div>
    <input type="text" placeholder="First Name" name="first-name" />
    <input type="text" placeholder="Last Name" name="last-name" />
    <input type="text" placeholder="Email or Phone Number" name="contact-info" />
    <Questions />
    <Footer />
</form>

<style lang="scss">
    @use "$lib/scss/utils" as sass;
    form {
        position: relative;
        float: left;
        padding-top: calc(17vh - 50px);
        padding-left: calc(7vw - 45px);
        padding-right: 20px;
        padding-bottom: 20px;
        width: 50%;
        height: 100%;
        box-sizing: border-box;
        background-color: white;
        box-shadow: 2px 0px 10px 3px #0004;
        z-index: 2;
        display: grid;
        grid-template:
            "header       header       header       header       header       header      " auto
            "first-name   first-name   first-name   last-name    last-name    last-name   " 45px
            "contact-info contact-info contact-info contact-info contact-info contact-info" 45px
            "questions    questions    questions    questions    questions    questions   " 1fr
            "footer       footer       footer       footer       footer       footer      " 50px
            / sass.repeat(6, 1fr);
        gap: 20px 10px;
        align-items: center;

        @media (max-width: 800px) {
            float: none;
            height: 50%;
            width: 100%;
            padding-top: calc(13vh - 50px);
            padding-left: 20px;
            padding-bottom: 10px;
            padding-right: 20px;
            grid-template-rows: auto 35px 35px 1fr 40px;
            gap: 15px 20px;
        }

        h1 {
            font-size: 3rem;
            color: #222;
            grid-area: header;
            margin: 0;

            @media (max-width: 800px) {
                font-size: 2.5rem;
            }
        }

        input[type="text"] {
            height: 100%;
            width: 100%;
            font-size: 1.2rem;
            padding-bottom: 5px;
            padding-top: 5px;
            font-weight: 500;

            @media (max-width: 800px) {
                font-size: 1rem;
            }

            &::placeholder {
                color: #000;
                opacity: 0.2;
            }
        }

        input {
            &[placeholder="First Name"] {
                grid-area: first-name;
            }

            &[placeholder="Last Name"] {
                grid-area: last-name;
            }

            &[placeholder="Email or Phone Number"] {
                grid-area: contact-info;
            }
        }

        :global(input[type="text"]) {
            background-color: #f5f5f5;
            color: #777;
            border: none;
            outline: none;
            padding-left: 10px;
            border-radius: 5px;
            box-sizing: border-box;
            box-shadow: 2px 3px 5px 2px #0003;
            transition: background-color 0.3s;

            &:focus {
                background-color: #e5e5e5;
            }
        }
    }

    #rocket {
        position: absolute;
        top: 0;
        right: 0;
        width: 35vw;
        aspect-ratio: 1/1;
        background-image: url("/contactus/rocket.png");
        background-size: contain;
        background-repeat: no-repeat;
        z-index: -1;

        @media (max-width: 800px) {
            width: auto;
            height: calc(10vh + 40vw);
        }
    }

    #contact-content {
        background-color: #59c;
        height: 100%;
        width: 50%;
        float: right;
        transition: all 0.5s;
    }

    .hidden {
        transform: translateX(-100%);
    }
</style>
