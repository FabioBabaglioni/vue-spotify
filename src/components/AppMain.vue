<script >
import MainSidebar from "./MainSidebar.vue"
import MainHeader from "./MainHeader.vue"
import MainContent from "./MainContent.vue"



export default {
    components: {
        MainSidebar, MainHeader, MainContent
    }
}

</script>

<template>
    <main>
        <MainSidebar />
        <MainContent />
        <MainHeader />
    </main>


</template>

<style scoped>
main {
    height: 100%;
}
</style>
