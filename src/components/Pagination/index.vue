<template>
  <div class="pagination">
    <button :disable="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)" 
    :class="{active:pageNo == 1}">
      上一页
    </button>

    <button @click="$emit('getPageNo', 1)" v-if="startNumAndEndNum.start > 1">
      1
    </button>
    <button v-if="startNumAndEndNum.start > 2">···</button>
    <!-- <span>{{startNumAndEndNum}}</span> -->

    <button
      @click="$emit('getPageNo', item)"
      v-for="(item, index) in startNumAndEndNum.end"
      :key="index"
      v-show="item >= startNumAndEndNum.start"
      :class="{active:pageNo == item}"
    >
      {{ item }}
    </button>
    <button v-if="startNumAndEndNum.end < totalPage - 1">···</button>
    <button
      @click="$emit('getPageNo', totalPage)"
      v-if="startNumAndEndNum.end < totalPage"
      :class="{active:pageNo == totalPage}"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="pageNo == totalPage"
      @click="$emit('getPageNo', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    // 计算出一共有多少页
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 计算出连续页码的起始数字与结束数字
    startNumAndEndNum() {
      const { continues, pageNo, totalPage } = this;
      console.log(continues, pageNo, totalPage, 444);
      // 先定义两个变量存储起始数字和结束数字[连续的页码数至少是5]
      let start = 0;
      let end = 0;
      // 连续的页码数字5 [至少5页],如果少于5页

      if (continues > totalPage) {
        //特殊情况[总页数没有连续页码多]
        start = 1;
        end = this.totalPage;
      } else {
        // 正常现在[总页码大于连续页码数]
        start = pageNo - parseInt(continues / 2); //起始数字
        end = pageNo + parseInt(continues / 2); //结束数字

        if (start < 1) {
          //出现不正常的现象[start数字出现0 | 负数 ] 纠正
          start = 1;
          end = continues;
        } else if (end > totalPage) {
          //[end数字大于总页码]纠正
          end = totalPage;
          start = totalPage - continues + 1;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  background-color: skyblue;
}
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>