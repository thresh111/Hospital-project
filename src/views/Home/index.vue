<template>
  <!-- 轮播图 -->
  <Carousel />
  <!-- 搜索 -->
  <Search />
  <!-- 底部展示医院的结构 -->
  <el-row :gutter="20">
    <el-col :span="20">
      <Level />
      <Region />
      <div class="hospital">
        <Card
          class="item"
          v-for="(item, index) in 10"
          :key="index"
          :hospitalInfo="item"
        />
      </div>
      <!-- 分页器 -->
      <el-pagination
        v-model:current-page="pageNo"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        :background="true"
        layout="prev, pager, next, jumper,->,sizes,total"
        :total="400"
      />
    </el-col>
    <el-col :span="4"> 456</el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Carousel from "./Carousel/index.vue";
import Search from "./Search/index.vue";
import Level from "./Level/index.vue";
import Region from "./Region/index.vue";
import Card from "./Card/index.vue";

//分页器页码
let pageNo = ref<number>(1);
//一页展示几条数据
let pageSize = ref<number>(10);
</script>

<style lang="scss" scoped>
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 48%;
    margin: 10px 0px;
  }
}
</style>
