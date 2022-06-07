<template>
  <div class="floor">
    <div class="py-container">
      <div class="title clearfix">
        <h3 class="fl">{{floorData.name}}</h3>
        <div class="fr">
          <ul class="nav-tabs clearfix">
            <li class="active" v-for="item in floorData.navList">
              <a href="#tab1" data-toggle="tab">{{item.text}}</a>
            </li>

          </ul>
        </div>
      </div>
      <div class="tab-content">
        <div class="tab-pane">
          <div class="floor-1">
            <div class="blockgary">
              <ul class="jd-list">
                <li v-for="item in floorData.keywords">{{item}}</li>

              </ul>
              <img :src="floorData.imgUrl" />
            </div>
            <div class="floorBanner">
              <div class="swiper-container" id="floor1Swiper">
                <swiper :options="swiperOptions">
                  <swiper-slide v-for="item in floorData.carouselList" :key="item.id">
                    <img :src="item.imgUrl" alt="">
                  </swiper-slide>
                  <div class="swiper-pagination" slot="pagination"></div>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
<!--                <div class="swiper-wrapper">-->
<!--                  <div class="swiper-slide">-->
<!--                    <img src="./images/floor-1-b01.png" />-->
<!--                  </div>-->
<!--                  &lt;!&ndash; <div class="swiper-slide">-->
<!--                    <img src="./images/floor-1-b02.png" />-->
<!--                  </div>-->
<!--                  <div class="swiper-slide">-->
<!--                    <img src="./images/floor-1-b03.png" />-->
<!--                  </div> &ndash;&gt;-->
<!--                </div>-->
<!--                &lt;!&ndash; 如果需要分页器 &ndash;&gt;-->
<!--                <div class="swiper-pagination"></div>-->

<!--                &lt;!&ndash; 如果需要导航按钮 &ndash;&gt;-->
<!--                <div class="swiper-button-prev"></div>-->
<!--                <div class="swiper-button-next"></div>-->

              </div>

            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="floorData.recommendList[0]" />
              </div>
              <div class="floor-conver-pit">
                <img :src="floorData.recommendList[1]" />
              </div>
            </div>
            <div class="split center">
              <img :src="floorData.bigImg" />
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="floorData.recommendList[2]" />
              </div>
              <div class="floor-conver-pit">
                <img :src="floorData.recommendList[3]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  props: {
    floorData: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
        // Some Swiper option/callback...
      },
    }
  },
  mounted() {

  },
  computed: {

  }
};
</script>

<style lang="scss">
</style>