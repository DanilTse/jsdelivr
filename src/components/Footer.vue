<template>
  <v-container>
    <v-row class="white--text py-0 mb-0 align-center justify-center">
      <v-col cols="12" md="6" class="text-center">
        <v-avatar size="128" class="mr-4">
          <img src="../assets/avatar.jpeg" alt=""/>
        </v-avatar>
        <span class="mr-1">Author: Danil Tsesarenko </span>
        <a
            href="https://github.com/DanilTse"
            class="white--text"
            target="=_blank"
        >GitHub</a
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({}),
};
</script>