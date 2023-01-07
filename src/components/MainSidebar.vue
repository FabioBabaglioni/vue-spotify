<script>

export default {

}

</script>

<template>
    <section id="sidebar">
        <div class="ps-4 home">
            <img class="pt-4 " src="../img/logo.svg" alt="">

            <div class=" pt-4 ">
                <a href="#" class="mt-2 ">
                    <span class="pe-3"><font-awesome-icon icon="fa-solid fa-house" class="icon" /></span>
                    <span class="font_medium">Home</span>
                </a>
            </div>

            <div class=" pt-2 ">
                <a href="#" class="mt-2 ">
                    <span class="pe-3"><font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon" /></span>
                    <span class="font_medium">Cerca</span>
                </a>
            </div>

            <div class=" pt-2 ">
                <a href="#" class="mt-2 ">
                    <span class="pe-3"><font-awesome-icon icon="fa-solid fa-book" class="icon" /></span>
                    <span class="font_medium">La tua libreria</span>
                </a>
            </div>

            <div class=" pt-4 ">
                <a href="#" class="mt-2 ">
                    <span class="pe-3"><font-awesome-icon icon="fa-solid fa-square-plus" class="icon" /></span>
                    <span class="font_medium">Crea la tua playlist</span>
                </a>
            </div>

            <div class=" pt-2 ">
                <a href="#" class="mt-2 ">
                    <span class="pe-3"><font-awesome-icon icon="fa-solid fa-heart" class="icon" /></span>
                    <span class="font_medium">brani che ti piacci...</span>
                </a>
            </div>
            <hr>
        </div>

        <div class="flex-column ps-4 overflow">
            <div>
                <a href="#"><span>playlist 1</span></a>
            </div>


        </div>
    </section>
</template>

<style scoped lang="scss">
@use "../style/partials/variables.scss" as *;

#sidebar {
    width: 220px;
    height: calc(100vh - 100px);
    background-color: $brandThird;

    .home {
        position: fixed;
    }
}

img {
    width: 70%;
}

.font_medium {
    font-size: 16px;
}

.icon {
    font-size: 20px;
}

hr {
    color: white;
    width: 90%;
    margin-top: 20px;
}

.overflow {

    overflow: auto;
    padding-top: 290px;
}
</style>