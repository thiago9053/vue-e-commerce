<template>
  <div>Foo Component</div>
  <span>{{ count }}</span>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const count = computed(() => store.getters["foo/count"]);
console.log(count);
</script>
