<template>
  <div class="type-nav">
    <div class="container" @mouseenter="enterShow"  @mouseleave="leaveIndex">
      <h2 class="all">全部商品分类</h2>

      <!-- 过渡动画 -->
      <transition name="sort">
        <div class="sort" v-show="isShow" >
          <div class="all-sort-list2" @click="goSearch">
            <div
             
              class="item"
              :class="currentIndex === index ? 'cur' : ''"
              v-for="(item, index) in categoryList"
              :key="item.categoryId"
            >
              <h3 @mouseenter="changeIndex(index)">
                <a
                  :data-categoryName="item.categoryName"
                  :data-category1Id="item.categoryId"
                  >{{ item.categoryName }}</a
                >
              </h3>
              <div
                class="item-list clearfix"
                :style="{ display: currentIndex === index ? 'block' : 'none' }"
              >
                <div
                  class="subitem"
                  v-for="subitem in item.categoryChild"
                  :key="subitem.categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a
                        :data-categoryName="subitem.categoryName"
                        :data-category2Id="subitem.categoryId"
                        >{{ subitem.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em
                        v-for="ssubitem in subitem.categoryChild"
                        :key="ssubitem.categoryId"
                      >
                        <a
                          :data-categoryName="ssubitem.categoryName"
                          :data-category3Id="ssubitem.categoryId"
                          >{{ ssubitem.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import throttle from "lodash/throttle";

import { mapState } from "vuex";

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: "",
      isShow: true,
    };
  },
  methods: {
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),

    enterShow() {
      this.isShow = true;
    },

    leaveIndex() {
      this.currentIndex = "-1";

      if (this.$route.path != "/home") {
        this.isShow = false;
      }
    },
    // 进行路由跳转
    goSearch(event) {
      //最好的解决方法： 编程式导航 + 事件委派
      // 利用事件委派存在一些问题： 1：点击的一定是a标签 2：获取参数【1，2，3级分类的产品的名字，id】
      // 点击a标签的时候，才会进行路由跳转【怎么能确定点击的一定是a标签】
      // 存在另外一个问题：即使你能确定点击的是a标签，如果区分是一级，二级，三级分类的标签

      // 第一个问题：把子节点当中a标签，加上自定义属性data-catagoryName,其余子节点是没有的
      let Element = event.target;
      // 获取到当前触发这个事件的节点【h3,a,dt,dl】,需要带有data-categoryName属性【一定是a标签】
      // 节点有一个dataset属性，可以获取节点的自定义属性与属性值
      const { categoryname, category1id, category2id, category3id } =
        Element.dataset;

      console.log(Element.dataset);

      console.log(categoryname, category1id, category2id, category3id);

      if (categoryname) {
        // 整理路由跳转的参数
        let location = { name: "search" };

        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else if (category3id) {
          query.category3Id = category3id;
        }

        // 判断是否有params参数,如果有一起带上
        if(this.$route.params) {
          location.params = this.$route.params
        }
          location.query = query;


        // 整理完参数
        // 路由跳转
        this.$router.push(location);
      }

      console.log(categoryname);
    },
  },
  computed: {
    ...mapState({
      categoryList: (state) => {
        return state.home.categoryList;
      },
    }),
  },
  created() {},
  mounted() {

    if (this.$route.path === "/search") {
      this.isShow = false;
    }
  },
};
</script>

<style lang="scss">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .cur {
    background-color: skyblue;
  }

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
      }
    }

    // 过渡动画的样式
    // 过渡动画开始的状态（进入）
    .sort-enter {
      height: 0px;
    }

    // 过渡动画的结束状态
    .sort-enter-to {
      height: 461px;
    }

    // 过渡动画时间，速率
    .sort-enter-active {
      transition: all .5s linear;
    }
  }
}
</style>