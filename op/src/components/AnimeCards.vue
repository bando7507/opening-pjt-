<template>
  <div class="anime--cards">
      <div :style="changeBgAnime" class="anime--img">
      </div>
      <div class="anime--info">
          <div class="top">
              <p class="name">
                  name : {{info_anime.name}}
              </p>
              <p class="descrip">
                  date de sortir :
              </p>
          </div>
      </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    name: 'AnimeCards',
    props: {
        info_anime: Object
    },
    setup(props){
        const changeBgAnime  = computed(() =>{
            return{
                backgroundImage: `url(${props.info_anime.image})`
            }
        })

        return{
            changeBgAnime
        }
    }

}
</script>

<style lang="scss" scoped>
.anime--cards{
    width: 175px;
    height: 36vh;
    border: 3px solid #4d4d4d;
    background-color:rgb(34, 34, 33) ;
    

    .anime--img{
        background-image: url('https://vostfree.tv/uploads/posts/2021-02/1614298392_dr_stone_stone_wars_vf.jpg');
        background-size:cover ;
        background-position: center;
        height: 83%;
    }
    .anime--info{
        
        .top{
            background-color: #fff;
            border-radius:10px ;
            .name,
            .descrip{
                font-size: 0.7rem;
                margin-left:10px ;
            }
        }
    }
}
</style>