<template>
    <carousel>
        <slide v-for="slide in 10" :key="slide">

            <img src="https://vostfree.tv/uploads/posts/2018-01/1516739466_black_clover_vostfr.jpg" alt="">
        </slide>
        <template #addons>
            <navigation></navigation>
            <div class="bg">
                <input type="text">
            </div>

        </template>
    </carousel>
    <div>
        <AnimeRow v-for="(data, i) in data_anime" :key="i" :five="data" />
    </div>
</template>

<script>
    import BDD from '../data/BDD'
    import AnimeRow from '../components/AnimeRow.vue'
    import 'vue3-carousel/dist/carousel.css';
    import {
        Carousel,
        Slide,
        Navigation
    } from 'vue3-carousel';
    export default {
        name: 'HomeContent',
        components: {
            AnimeRow,
            Carousel,
            Slide,
            Navigation,
        },

        setup() {
            class Anime {
                constructor(name, image, im) {
                    this.name = name
                    this.image = image
                    this.im = im
                }
            }
            //let data_anime = []
            let all_anime = []
            let data_anime = []

            const maskDataAnime = () => {
                let five_anime = []

                for (const anime of BDD) {
                    const new_anime = new Anime(anime.name, anime.image, anime.im)
                    all_anime.push(new_anime)
                    //console.log(all_anime)

                    if (five_anime.length == 4) {
                        five_anime.push(new_anime)
                        data_anime.push(five_anime)
                        five_anime = []
                    } else {
                        five_anime.push(new_anime)
                    }
                    //console.log(data_anime)
                }
            }
            maskDataAnime()

            return {
                data_anime
            }
        }
    }
</script>

<style lang="scss" scoped>
.bg{
    display: flex;
    justify-content: center;
    align-items: center;
}
    input {
        position: absolute;
        top: 50%;
    }
</style>