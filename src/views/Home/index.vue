<template>
  <!-- 轮播图 -->
  <Carousel />
  <!-- 搜索 -->
  <Search />
  <!-- 底部展示医院的结构 -->
  <el-row :gutter="20">
    <el-col :span="20">
      <Level @getLevel="getLevel" />
      <Region @getRegion="getRegion" />
      <div class="hospital">
        <Card
          class="item"
          v-for="(item, index) in hasHospitalArr"
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
        :total="total"
        @current-change="currentChange"
        @size-change="sizeChange"
      />
    </el-col>
    <el-col :span="4"> 456</el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Carousel from "./Carousel/index.vue";
import Search from "./Search/index.vue";
import Level from "./Level/index.vue";
import Region from "./Region/index.vue";
import Card from "./Card/index.vue";

import { reqHospital } from "@/api/home";

import type { Content, HospitalResponseData } from "@/api/home/type.ts";
//分页器页码
let pageNo = ref<number>(1);
//一页展示几条数据
let pageSize = ref<number>(10);
//存储已有的医院的数据
let hasHospitalArr = ref<Content>([]);
//存储医院总个数
let total = ref<number>(0);
//存储医院的等级相应数据
let hostype = ref<string>("");
//存储医院的地区
let districtCode = ref<string>("");
onMounted(() => {
  getHospitalInfo();
});

//获取已有的医院的数据
const getHospitalInfo = async () => {
  //获取医院的数据:默认获取第一页、一页十个医院的数据
  let result: HospitalResponseData = await reqHospital(
    pageNo.value,
    pageSize.value,
    hostype.value,
    districtCode.value
  );
  if (result.code == 200) {
    //存储已有的医院的数据
    hasHospitalArr.value = result.data.content;
    //存储医院的总个数
    total.value = result.data.totalElements;
  }
};

//分页器页码发生变化时候回调
const currentChange = () => {
  getHospitalInfo();
};
//分页器下拉菜单发生变化的时候会触发
const sizeChange = () => {
  //当前页码归第一页
  pageNo.value = 1;
  //再次发请求获取医院的数据
  getHospitalInfo();
};

//子组件自定义事件:获取儿子给父组件传递过来的等级参数
const getLevel = (level: string) => {
  //收集参数:等级参数
  hostype.value = level;
  //再次发请求
  getHospitalInfo();
};
//子组件自定义事件：获取子组件传递过来的地区参数
const getRegion = (region: string) => {
  //存储地区的参数
  districtCode.value = region;
  getHospitalInfo();
};
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
