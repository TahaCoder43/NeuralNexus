<script lang="ts">
    import About from "./About.svelte";
    import Achievements from "./Achievements.svelte";
    import Card from "./Card.svelte";
    import CodingDetails from "./CodingDetails.svelte";
    import Company from "./Company.svelte";
    import Picture from "./Picture.svelte";
    import ProgrammingLanguagesLearnt from "./ProgrammingLanguagesLearnt.svelte";
</script>

<div id="card-grid">
    <Card>
        <About />
    </Card>
    <Card>
        <Picture />
    </Card>
    <Card>
        <Achievements />
    </Card>
    <Card />
    <Card>
        <CodingDetails />
    </Card>
    <Card>
        <Company />
    </Card>
    <Card />
    <Card>
        <ProgrammingLanguagesLearnt />
    </Card>
</div>
<div id="aurora-background"></div>

<style lang="scss">
    @use "$lib/scss/utils" as sass;
    #card-grid {
        $max-height: 200px;
        position: relative;
        display: grid;
        grid-template:
            "about           about           about           about        picture      picture      picture   " min-content
            "about           about           about           about        picture      picture      picture   " min-content
            "about           about           about           about        picture      picture      picture   " min-content
            "coding-details  coding-details  coding-details  company      company      company      company   " min-content
            "coding-details  coding-details  coding-details  company      company      company      company   " min-content
            "coding-details  coding-details  coding-details  company      company      company      company   " min-content
            "left-decoration left-decoration left-decoration company      company      company      company   " min-content
            "left-decoration left-decoration left-decoration certificates certificates certificates decoration" min-content
            "achievements    achievements    achievements    certificates certificates certificates decoration" min-content
            "achievements    achievements    achievements    certificates certificates certificates decoration" min-content
            "achievements    achievements    achievements    certificates certificates certificates decoration" min-content
            "achievements    achievements    achievements    certificates certificates certificates decoration" min-content
            / sass.repeat(7, 1fr);
        gap: 20px 20px;
        max-width: 1140px;
        backdrop-filter: blur(20px);
        border-radius: 10px;
        padding: 50px 20px 30px 20px;
        margin: 40px auto 0px auto;
        z-index: 2;

        @media (max-width: 900px) {
            padding-top: 20px;
            grid-template:
                "about           about           about           about        picture      picture      picture   " min-content
                "about           about           about           about        picture      picture      picture   " min-content
                "about           about           about           about        picture      picture      picture   " min-content
                "coding-details  coding-details  coding-details  company      company      company      company   " min-content
                "coding-details  coding-details  coding-details  company      company      company      company   " min-content
                "coding-details  coding-details  coding-details  company      company      company      company   " min-content
                "left-decoration left-decoration left-decoration company      company      company      company   " min-content
                "achievements    achievements    achievements    certificates certificates certificates decoration" min-content
                "achievements    achievements    achievements    certificates certificates certificates decoration" min-content
                "achievements    achievements    achievements    certificates certificates certificates decoration" min-content
                "achievements    achievements    achievements    certificates certificates certificates decoration" min-content
                ".               .               .               certificates certificates certificates decoration" min-content
                / sass.repeat(7, 1fr);
        }

        @media (max-width: 800px) {
            grid-template:
                "about           about           about           about           about        about        about        " min-content
                "coding-details  coding-details  coding-details  coding-details  picture      picture      picture      " min-content
                "company         company         company         company         company      company      company      " min-content
                "decoration      decoration      decoration      decoration      decoration   decoration   decoration   " 100px
                "left-decoration left-decoration left-decoration left-decoration certificates certificates certificates " min-content
                "achievements    achievements    achievements    achievements    certificates certificates certificates " min-content
                ".               .               .               .               certificates certificates certificates " min-content
                / sass.repeat(7, 1fr);
        }

        @media (max-width: 600px) {
            grid-template:
                "about           about           about           about           about          about          about         " min-content
                "picture         picture         picture         picture         picture        picture        picture       " min-content
                "coding-details  coding-details  coding-details  coding-details  coding-details coding-details coding-details" min-content
                "company         company         company         company         company        company        company       " min-content
                "decoration      decoration      decoration      decoration      decoration     decoration     decoration    " 100px
                "left-decoration left-decoration left-decoration left-decoration certificates   certificates   certificates  " min-content
                "achievements    achievements    achievements    achievements    certificates   certificates   certificates  " min-content
                ".               .               .               .               certificates   certificates   certificates  " min-content
                / sass.repeat(7, 1fr);
        }

        @media (max-width: 500px) {
            grid-template:
                "about           about           about           about           about           about           about          " min-content
                "picture         picture         picture         picture         picture         picture         picture        " min-content
                "coding-details  coding-details  coding-details  coding-details  coding-details  coding-details  coding-details " min-content
                "company         company         company         company         company         company         company        " min-content
                "decoration      decoration      decoration      decoration      decoration      decoration      decoration     " 100px
                "achievements    achievements    achievements    achievements    achievements    achievements    achievements   " min-content
                "left-decoration left-decoration left-decoration left-decoration left-decoration left-decoration left-decoration" min-content
                "certificates    certificates    certificates    certificates    certificates    certificates    certificates   " 200px
                / sass.repeat(7, 1fr);
        }

        @media (max-width: 450px) {
            padding-top: 0;
        }
    }

    #aurora-background {
        $saturation: 80%;
        $light: 70%;
        $transparency: 40%;
        $color1: hsla(230, $saturation, $light, $transparency);
        $color1-transparent: hsla(230, $saturation, $light, 0);
        $size: 50%;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        background-image: radial-gradient(
                farthest-side at top left,
                $color1,
                $color1-transparent $size
            ),
            radial-gradient(farthest-side at center right, $color1, $color1-transparent $size),
            radial-gradient(circle at bottom left, $color1, $color1-transparent $size);
    }
</style>
