<template>
  <div>
    <div class="text-center mt-5">
      <b-card class="inline-block border w-9/12 h-full pb-5">
        <div class="card-body">
          <img
            src="../assets/images/keyboard.svg"
            alt
            class="mx-auto w-1/5 mt-5"
          />
          <h1 class="text-center text-5xl head-home">
            Kistrok
          </h1>
          <p>Sound of Keystroke Reveals Passwords with Neural Network</p>
          <div class="w-full text-center">
            <b-form-file
              accept=".m4a"
              class="w-1/3 mt-4 inline-block text-left"
              placeholder="Choose a .m4a file"
            ></b-form-file>
            <br />
            <b-button
              @click="predict"
              class="inline-block mt-4 w-1/3 button-colorful text-white font-bold py-2 px-4 rounded-full"
            >
              Predict
            </b-button>
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

<style></style>
