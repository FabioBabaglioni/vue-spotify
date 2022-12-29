<script>

export default {

}

</script>

<template>

    <section id="header" class="  ">
        <div class="container_site d-flex justify-content-between align-items-center ">
            <div class="">
                <a href=""><span class="pe-4"><font-awesome-icon icon="fa-solid fa-circle-arrow-right"
                            class="icon" /></span></a>
                <a href=""><span><font-awesome-icon icon="fa-solid fa-circle-arrow-left" class="icon" /></span></a>
            </div>
            <button class="pe-3 ps-1">
                <span id="user"><font-awesome-icon icon="fa-regular fa-user" /></span>
                <span class="px-3">fabiobabaglioni</span>
                <font-awesome-icon icon="fa-solid fa-caret-down" />
            </button>
        </div>

    </section>
</template>

<style scoped lang="scss">
@use "../style/partials/variables.scss" as *;

#header {
    width: calc(100vw - 220px);
    height: 100px;
    background-color: $brandSfondo;
    overflow: auto;
    position: fixed;
}

.icon {
    font-size: 30px;
}

button {
    border-radius: 40px;
    border: none;
    color: $brandPrimary;
    background-color: #111a19;


    #user {
        padding: 5px;
        background-color: #535353;
        border-radius: 50%;
    }

    &:hover {
        background-color: #282828;
    }
}
</style> 