<template>
    <div>
        <AnimeRow v-for="(data, i) in data_anime" :key="i" :five="data" />
    </div>
</template>

<script>
import BDD from '../data/BDD'
import AnimeRow from '../components/AnimeRow.vue'
    export default {
        name: 'HomeContent',
        components: {
            AnimeRow
        },

        setup(){
            class Anime {
                constructor(name, image){
                    this.name = name
                    this.image = image
                }
            }
            //let data_anime = []
            let all_anime = []
            let data_anime = []

            const maskDataAnime = () => {
                let five_anime = []

                for (const anime of BDD){
                    const new_anime = new Anime(anime.name, anime.image)
                    all_anime.push(new_anime)
                    //console.log(all_anime)

                    if ( five_anime.length == 4 ){
                        five_anime.push(new_anime)
                        data_anime.push(five_anime)
                        five_anime = []
                    }else{
                        five_anime.push(new_anime)
                    }
                    //console.log(data_anime)
                }
            }
            maskDataAnime()

            return{
                data_anime
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>