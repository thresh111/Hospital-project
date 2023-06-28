<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div>
      <ul>
        <li :class="{ active: RegionFlag == '' }" @click="changeRegion('')">
          全部
        </li>
        <li
          v-for="item in RegionArr"
          :key="item.value"
          :class="{ active: RegionFlag == item.value }"
          @click="changeRegion(item.value)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { reqHospitalLevelAndRegion } from "@/api/home/index";
import type {
  HospitalLevelAndRegionResponseData,
  HospitalLevelAndRegionArr,
} from "@/api/home/type";
let RegionArr = ref<HospitalLevelAndRegionArr>([]);
let RegionFlag = ref<string>("");

onMounted(() => {
  getRegion();
});

//获取地区的数据
const getRegion = async () => {
  let res: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion(
    "Beijin"
  );
  //存储全部地区的数据
  if (res.code == 200) {
    RegionArr.value = res.data;
  }
};

//点击不同区域按钮回调
const changeRegion = (region: string) => {
  RegionFlag.value = region;
  //给父组件传递区域的参数
  $emit("getRegion", region);
};
let $emit = defineEmits(["getRegion"]);
</script>

<style scoped lang="scss">
.region {
  color: #7f7f7f;
  margin-top: 20px;
  .content {
    display: flex;
    .left {
      margin-right: 10px;
      width: 50px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 10px;
        margin-bottom: 10px;
        &.active {
          color: #55a6fe;
        }
      }
      li:hover {
        color: #55a6fe;
        cursor: pointer;
      }
    }
  }
}
</style>
