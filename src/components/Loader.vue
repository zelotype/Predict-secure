<template>
  <div class="h-screen">
    <pixel-spinner
      :animation-duration="1600"
      :size="80"
      :color="'#FFFFFF'"
      class="mx-auto mt-64"
    />
    <h1 class="text-center mt-4 font-bold text-white loader-font text-2xl">LOADING...</h1>
  </div>
</template>

<script>
import { PixelSpinner } from 'epic-spinners'
export default {
    components:{
        PixelSpinner
    }
};
</script>

<style></style>
