<template>
  <div class="search">
    <el-autocomplete
      v-model="hosname"
      @select="goDetail"
      clearable
      placeholder="请输入医院名称"
      class="form"
      :fetch-suggestions="getHospitalInfo"
    />
    <el-button type="primary" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Search } from "@element-plus/icons-vue";
import { reqHospitalInfo } from "@/api/home/index";
import type { HospitalInfo } from "@/api/home/type";

//创建路由器对象
let $router = useRouter();
//收集搜索的关键字(医院的名字)
let hosname = ref<string>("");

const getHospitalInfo = async (keyword: string, cb: any) => {
  const res: HospitalInfo = await reqHospitalInfo(keyword);
  let showData = res.data.map((item) => {
    return {
      value: item.hosname, //展示的医院的名字
      hoscode: item.hoscode, //存储医院的编码
    };
  });
  cb(showData);
};

//点击某一个推荐项
const goDetail = (item: any) => {
  //点击推荐项目进入医院详情页,将来需要携带query参数(医院的编码)
  $router.push({
    path: "/hospital/register",
    query: { hoscode: item.hoscode },
  });
};
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
