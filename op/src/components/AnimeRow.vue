<template>
    <div class="flex-b">
        <div class="anime--row" style="">
            <div class="wapper--card">
                <AnimeCards v-for="(card, i) in five" :info_anime="card" :key="i" />
            </div>
        </div>

        <div class="top-e">
            <img src="https://vostfree.tv/uploads/posts/2021-02/1614298392_dr_stone_stone_wars_vf.jpg" width="200" alt="">
        </div>
    </div>
</template>

<script>

    import AnimeCards from './AnimeCards.vue'
    export default {
        name: 'AnimeRow',
        components: {
            AnimeCards
        },
        props:{
            five: Array
        }
    }
</script>

<style lang="scss" scoped>
    .flex-b {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .anime--row {
            margin-top:25px ;
            width: 75%;
            .wapper--card {
                display: flex;
                align-items: center;
                justify-content: space-around;
                
            }
        }
        .top-e{
            background-color: red;
            width: 20%;
        }
    }
</style>