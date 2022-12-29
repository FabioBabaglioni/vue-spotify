<script>
import ContentCardRecenti from "./ContentCardRecenti.vue"
export default {
    components: {
        ContentCardRecenti,
    }
}

</script>

<template>
    <section id="content">
        <div class="container_site">
            <ContentCardRecenti />
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "../style/partials/variables.scss" as *;

#content {
    width: calc(100vw - 220px);
    height: calc(100vh - 100px);
    background-color: $brandSfondo;
    padding-top: 120px;
}
</style>