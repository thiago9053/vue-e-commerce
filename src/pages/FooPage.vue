<template>
  <h1>Foo</h1>
  <v-btn class="btn" @click="a">Button</v-btn>
  <span class="text-[#333] font-bold">Click me</span>
  <Foo />
</template>

<script setup lang="ts">
import Foo from "@/modules/foo/Foo.vue";
const a = () => {
  console.log("a");
};
</script>

<style lang="scss" scoped>
.btn {
  outline: none;
  margin-top: 1rem;
}
</style>
