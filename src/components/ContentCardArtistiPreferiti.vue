<script >

export default {

}

</script>

<template>

    <section>
        <h4 class="pb-5">I tuoi artisti preferiti</h4>

        <div class="d-flex flex-wrap justify-content-between">
            <div class="card flex-column align-items-center">
                <img class="img_artista py-4" src="../img/sinister.jpeg" alt="">
                <span class="text_nome align-self-start pb-2 ps-2">Nome Artista</span>
                <span class="align-self-start ps-2 pb-3 text_artista">Artista</span>

                <div>
                    <font-awesome-icon icon="fa-solid fa-circle-play" class="play" />
                </div>
            </div>

        </div>


    </section>




</template>

<style scoped lang="scss">
@use "../style/partials/variables.scss" as *;

.card {
    width: calc((100% / 6) - 10px);
    background-color: #181818;
    position: relative;
    margin-bottom: 20px;

    .img_artista {
        width: 80%;
        border-radius: 50%;
    }

    .text_nome {
        color: $brandPrimary;
        font-size: 18px;
        text-align: left;
    }

    .text_artista {
        color: lightgrey;
    }

    &:hover {
        background-color: #282828;
        cursor: pointer;

        .play {
            display: inline;
        }
    }

    .play {
        color: $brandLogo;
        font-size: 40px;
        padding-left: 30px;
        display: none;
        position: absolute;
        top: 160px;
        bottom: 10px;

        &:hover {
            font-size: 45px;
        }
    }
}
</style>