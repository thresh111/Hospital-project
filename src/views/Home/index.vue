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
    </el-col>
    <el-col :span="4"> 456</el-col>
  </el-row>
</template>

<script setup lang="ts">
import Carousel from "./Carousel/index.vue";
import Search from "./Search/index.vue";
import Level from "./Level/index.vue";
import Region from "./region/index.vue";
</script>

<style lang="scss" scoped></style>
