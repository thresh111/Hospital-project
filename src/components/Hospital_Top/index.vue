<template>
  <div class="top">
    <div class="content">
      <!-- 左侧 -->

      <div class="left">
        <router-link to="/home">
          <img src="../../assets/images/logo.png" />
        </router-link>
        <p>京医通 预约挂号统一挂号平台</p>
      </div>

      <!-- 右侧 -->
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login">登录 / 注册</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.top {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: center;
  .content {
    width: 1200px;
    height: 70px;
    background: white;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      p {
        font-size: 20px;
        color: #55a6fe;
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #bbb;
      .help {
        margin-right: 10px;
      }
    }
  }
}
</style>
