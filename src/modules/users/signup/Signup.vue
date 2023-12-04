<template>
  <div>
    <div></div>
    <div>
      <v-sheet width="300" class="mx-auto">
        <v-form @submit.prevent="signupService({ email, password })">
          <v-text-field
            variant="solo"
            v-model="email"
            :rules="rules.email"
            label="Email address"
            type="email"
            placeholder="johndoe@gmail.com"
          ></v-text-field>
          <v-text-field
            class="mt-2"
            variant="solo"
            v-model="password"
            :rules="rules.password"
            label="Password"
            type="password"
          ></v-text-field>
          <v-btn type="submit" block class="mt-2"
            ><span class="font-bold">Submit</span></v-btn
          >
        </v-form>
      </v-sheet>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { signupService } from "./service";

const rules = {
  email: [
    (value) => {
      if (!value) return `You must enter a email`;
      return true;
    },
  ],
  password: [
    (value) => {
      if (!value) return `You must enter a password`;
      return true;
    },
  ],
};

const email = ref<string>("");
const password = ref<string>("");
</script>

<style scoped lang="scss"></style>
