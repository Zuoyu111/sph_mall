<template>
  <div class="spec-preview">
    <img :src="skuImageList[index].imgUrl" />
    <div class="event" @mousemove="handler"></div>
    <div class="big">
      <img :src="skuImageList[index].imgUrl"  ref="big"/>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    props: ['skuImageList'],
    data() {
      return {
        index: 0
      }
    },
    methods: {
      handler(e) {        
        const mask = this.$refs.mask;  //获取遮罩层
        const big = this.$refs.big;  //获取大图
        let left = e.offsetX - mask.offsetWidth / 2;
        let top = e.offsetY - mask.offsetHeight / 2;
        // 约束范围
        if( left < 0 ) left = 0;
        if( left >= mask.offsetWidth ) left = mask.offsetWidth;
        if( top <= 0 ) top = 0;
        if( top >= mask.offsetHeight ) top = mask.offsetHeight;
        // 修改元素的left | top的属性值
        mask.style.left = left + 'px'; 
        mask.style.top = top + 'px'; 
        // 设置大图的left | top
        big.style.left = -2 * left + 'px';
        big.style.top = -2 * top + 'px';


      }
    },
    mounted() {
      this.$bus.$on('index',(index) => {
        this.index = index
      })
    },
    
  }
</script>

<style lang="scss">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>