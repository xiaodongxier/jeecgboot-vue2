<template>
  <div class="wrap">
    {{ msg }}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: "wang"
      }
    }
  }
</script>

<style>
.wrap {
  width: 100%;
  background: #fff;
  height: calc(100vh - 160px);
}
</style>