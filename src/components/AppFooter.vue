<script >
export default {

}

</script>

<template>
    <footer>

        <section id="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-3 song d-flex align-items-center">
                        <img src="../img/youg.jpeg" alt="">
                        <div class="ps-3">
                            <div class="pb-2">Titolo canzone</div>
                            <div class="artist">Artista</div>
                        </div>
                        <div class="ps-4">
                            <a href=""><font-awesome-icon class="icon" icon="fa-regular fa-heart" /></a>
                        </div>

                    </div>
                    <div class="col-6">
                        <div class="d-flex justify-content-center align-items-center play">
                            <a href="#"><font-awesome-icon class="px-3 py-3 icon_medium"
                                    icon="fa-solid fa-shuffle" /></a>
                            <a href="#"><font-awesome-icon class="px-3 py-3 icon_medium"
                                    icon="fa-solid fa-backward-step" /></a>
                            <a href="#"><font-awesome-icon class="px-3 py-3 icon_big"
                                    icon="fa-solid fa-circle-play" /></a>
                            <a href="#"><font-awesome-icon class="px-3 py-3 icon_medium"
                                    icon="fa-solid fa-forward-step" /></a>
                            <a href="#"><font-awesome-icon class="px-3 py-3 medium" icon="fa-solid fa-repeat" /></a>
                        </div>
                        <div class="d-flex justify-content-around align-items-center">
                            <span class="time text-end me-2">0.25</span>
                            <div class="barra">
                                <div class="border"></div>
                            </div>
                            <span class="time ms-2">4.25</span>
                        </div>
                    </div>

                    <div class="col-3 d-flex align-items-center justify-content-around">
                        <a href=""><font-awesome-icon class="icon_medium" icon="fa-solid fa-microphone" /></a>
                        <a href=""><font-awesome-icon icon="fa-solid fa-bars" /></a>
                        <a href=""><font-awesome-icon icon="fa-solid fa-mobile-screen-button" /></a>
                        <a href=""><font-awesome-icon class="margine" icon="fa-solid fa-volume-high" /></a>
                        <div class="volume-barra">
                            <div class="volume-barra-bianca"></div>
                        </div>
                        <a href=""><font-awesome-icon icon="fa-solid fa-up-right-and-down-left-from-center" /></a>
                    </div>
                </div>
            </div>
        </section>

    </footer>
</template>

<style scoped lang="scss">
@use "../style/partials/variables.scss" as *;

#footer {
    background-color: #181818;
    height: 100px;

    .song {
        height: 100px;
        color: $brandPrimary;

        .artist {
            font-size: 15px;
            color: $brandSecondary;
        }

    }

    .icon {
        font-size: 18px;
    }

    .icon_big {
        font-size: 40px;
    }

    .icon_medium {
        font-size: 20px;
    }


    img {
        width: 20%;
    }

    .time {
        width: 20%;
        font-size: .8rem;
        color: $brandSecondary;
    }

    .barra {
        height: 2px;
        width: 60%;
        background-color: $brandSecondary;
        position: relative;
    }

    .border {
        position: absolute;
        top: 0;
        left: 0;
        background-color: $brandPrimary;
        width: 20%;
        height: 2px;
    }


    .volume-barra {
        width: 50%;
        height: 2px;
        background-color: rgb(165, 165, 165);
        margin-right: 15px;
        margin-left: 10px;
        position: relative;
    }

    .volume-barra-bianca {
        width: 10%;
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        top: 0;
    }

    .margine {
        margin-right: -20px;
    }
}
</style>
