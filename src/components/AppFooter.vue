<script >
export default {

}

</script>

<template>
    <footer>

        <section id="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2 song d-flex align-items-center">
                        <img src="../img/youg.jpeg" alt="">
                        <div class="ps-3">
                            <div class="pb-2">Titolo canzone</div>
                            <div class="artist">Artista</div>
                        </div>
                        <div class="ps-4">
                            <a href=""><font-awesome-icon class="icon" icon="fa-regular fa-heart" /></a>
                        </div>

                    </div>
                    <div class="col-8">
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

                    <div class="col-2">

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
        width: 30%;
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


}
</style>
