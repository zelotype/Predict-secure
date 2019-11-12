<template>
  <div>
    <div class="text-center mt-5">
      <b-card class="inline-block border w-9/12 h-full pb-5">
        <div class="card-body">
          <img src="../assets/images/keyboard.svg" alt class="mx-auto w-1/5 mt-5" />
          <h1 class="text-center text-5xl head-home">
            Prapawity
            <br />hackerman
          </h1>
          <div class="w-full text-center">
            <b-form-file accept="image/*" class="w-1/3 mt-4 inline-block text-left"></b-form-file>
            <br />
            <button
              @click="predict"
              class="inline-block mt-4 w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >Predict</button>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    predict() {
      this.$router.push("/result");
    }
  }
};
</script>

<style>
</style>