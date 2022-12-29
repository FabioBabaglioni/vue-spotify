<script >

export default {

}

</script>

<template>

    <section class="pb-5">
        <h2 class="pb-5">Buongiorno</h2>

        <div class="d-flex flex-wrap justify-content-between">
            <div class="flex-row align-items-center card">
                <img class="img_ultimi pe-3" src="../img/cure.jpeg" alt="">
                <div class="title">Titolo della canzone</div>
                <div class="ps-5">
                    <font-awesome-icon icon="fa-solid fa-circle-play" class="play" />
                </div>
            </div>

        </div>
    </section>


</template>

<style scoped lang="scss">
@use "../style/partials/variables.scss" as *;

.card {
    width: calc((100% / 3) - 10px);
    background-color: hsla(0, 0%, 100%, .1);

    .img_ultimi {
        width: 25%;
    }

    .title {
        font-size: 18px;
        color: $brandPrimary;
    }

    .play {
        color: $brandLogo;
        font-size: 40px;
        padding-left: 30px;
        display: none;

        &:hover {
            font-size: 45px;
        }
    }

    &:hover {
        background-color: hsla(0, 0%, 100%, .2);
        cursor: pointer;

        .play {
            display: inline;
        }
    }
}
</style>