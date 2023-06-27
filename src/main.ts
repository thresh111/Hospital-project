import { createApp } from "vue";
import App from "./App.vue";
// 引入清除默认样式文件
import "@/style/reset.scss";
// 引入ElementPlus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// Element Plus 国际化
//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// 引入路由
import router from "@/router";
// 引入全局组件
import HospitalTop from "@/components/Hospital_Top/index.vue";
import HospitalBottom from "@/components/Hospital_Bottom/index.vue";

const app = createApp(App);
app.component("HospitalTop", HospitalTop);
app.component("HospitalBottom", HospitalBottom);
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});
app.mount("#app");
