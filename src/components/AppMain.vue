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
        <div class="d-flex ">
            <div>
                <MainSidebar />
            </div>

            <div>
                <MainHeader />
                <MainContent />
            </div>
        </div>
    </main>


</template>

<style scoped>

</style>
