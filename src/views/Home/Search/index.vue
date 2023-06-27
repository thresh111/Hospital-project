<template>
  <div class="search">
    <el-autocomplete
      v-model="state1"
      clearable
      placeholder="请输入医院名称"
      class="form"
    />
    <el-button type="primary" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup>
import { Search } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  /* 深度选择器 */
  ::v-deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>
