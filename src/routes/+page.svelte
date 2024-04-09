<script lang="ts">
    import Hero from "./Hero.svelte";
    import MakeWebsite from "./MakeWebsite.svelte";
    import NeedOfProgrammer from "./NeedOfProgrammer.svelte";
    import Topicals from "./Topicals.svelte";
</script>

<div id="content">
    <Hero />
    <Topicals />
    <MakeWebsite />
    <NeedOfProgrammer />
</div>

<style lang="scss">
    #content {
        width: 100%;
        overflow: hidden;
    }
</style>
