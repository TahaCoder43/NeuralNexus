<script lang="ts">
    import { getElementIndex } from "$lib/utils";
    import { squish, removeSquishEffects, setupSquish } from "$lib/effects/click";
    let questions: HTMLDivElement;
    setupSquish(1.049);
    function removeQuestion(newQuestion: HTMLDivElement) {
        let numQuestions = getElementIndex(newQuestion);
        for (let i = numQuestions + 1; i < questions.children.length; i++) {
            let questionToDisplace = questions.children.item(i) as HTMLElement;
            questionToDisplace.style.transition = "all 0.5s";
            questionToDisplace.style.transform = "translateY(-60px)";
        }
        newQuestion.style.animation = "appear-in-reverse 0.5s";
        setTimeout(() => {
            for (let i = numQuestions + 1; i < questions.children.length; i++) {
                let questionToDisplace = questions.children.item(i) as HTMLElement;
                questionToDisplace.style.transition = "";
                questionToDisplace.style.transform = "";
            }
            newQuestion.remove();
        }, 500);
    }

    function addQuestion() {
        let numQuestions = questions.children.length - 1;
        let lastQuestion = questions.children.item(numQuestions);
        if (lastQuestion === null) {
            console.error("lastQuestion is null, it should not be null");
            return;
        }
        lastQuestion.insertAdjacentHTML(
            "afterend",
            `
        <div>
            <input placeholder="question" type="text">
            <button form="">x</button>
        </div>`,
        );
        numQuestions++;
        let newQuestion = questions.children.item(numQuestions);
        if (newQuestion === null) {
            console.error("newQuestion is null, it should not be null");
            return;
        }
        let remover = newQuestion.children.item(1);
        if (remover === null) {
            console.error("remover is null, it should not be null");
            return;
        }
        remover.addEventListener("click", () => {
            removeQuestion(newQuestion as HTMLDivElement);
        });
    }
</script>

<div class="questions-wrapper">
    <div class="questions" bind:this={questions}>
        <button
            on:click|preventDefault={addQuestion}
            on:mousedown={squish}
            on:mouseup={removeSquishEffects}>+</button
        >
    </div>
    <h3 class="questions-label">Questions</h3>
</div>

<style lang="scss">
    @keyframes -global-appear-in {
        from {
            transform: translateX(-120%);
        }
        to {
            transform: translateX(0%);
        }
    }

    @keyframes -global-appear-in-reverse {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(-120%);
        }
    }

    .questions-wrapper {
        position: relative;
        align-items: center;
        width: 100%;
        height: 100%;
        padding-top: 15px;
        grid-area: questions;
        box-sizing: border-box;
        overflow-y: hidden;

        @media (max-width: 800px) {
            padding-top: 12px;
        }
    }

    .questions-label {
        position: absolute;
        background-color: white;
        color: #999;
        font-size: 1.3rem;
        font-weight: 500;
        top: 0;
        left: 25px;
        z-index: 2;
        margin: 0;

        @media (max-width: 800px) {
            font-size: 1.1rem;
        }
    }

    .questions {
        --children-height: 40px;
        width: 100%;
        height: 100%;
        flex-shrink: 10;
        padding-bottom: 10px;
        padding-top: 10px;
        padding-left: 5%;
        box-sizing: border-box;
        border-radius: 10px;
        border: 2px solid #ccc;
        overflow: scroll;

        @media (max-width: 800px) {
            --children-height: 30px;
        }

        button,
        :global(div) {
            position: relative;
            width: 90%;
            outline: none;
            border: none;
            border-radius: 5px;
            margin-top: 10px;
            margin-bottom: 10px;
            height: var(--children-height);
        }

        button {
            text-align: center;
            font-size: 2rem;
            color: black;
            background-color: #f5f5f5;
            box-shadow: 2px 3px 5px 2px #0003;
            cursor: pointer;

            @media (max-width: 800px) {
                font-size: 1.5rem;
            }
        }

        :global(div) {
            margin-bottom: 20px;
            animation: appear-in 0.5s;

            :global(input) {
                width: 100%;
                height: 100%;
                font-size: 1.1rem;
                border-radius: 5px;
                box-sizing: border-box;
                outline: none;
                border: none;
                padding-right: var(--children-height);

                @media (max-width: 800px) {
                    font-size: 0.9rem;
                }
            }

            :global(button) {
                position: absolute;
                display: grid;
                align-items: center;
                justify-content: center;
                height: var(--children-height);
                width: var(--children-height);
                font-size: 1.8rem;
                line-height: 10px;
                right: 0;
                top: 0;
                background-color: #ddd;
                transition: all 0.3s;
                border: none;
                border-top-left-radius: 15px;
                border-bottom-left-radius: 15px;
                cursor: pointer;
                &:hover {
                    background-color: #ccc;
                }

                @media (max-width: 800px) {
                    font-size: 1.3rem;
                }
            }
        }
    }
</style>
