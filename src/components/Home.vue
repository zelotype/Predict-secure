<template>
  <div>
    <Loader v-if="resultLoading"/>
    <div v-else class="text-center mt-5">
      <b-card class="inline-block border w-9/12 h-full pb-5">
        <div class="card-body">
          <img src="../assets/images/keyboard.svg" alt class="mx-auto w-1/5 mt-5" />
          <h1 class="text-center text-5xl head-home">Kistrok</h1>
          <p>Sound of Keystroke Reveals Passwords with Neural Network</p>
          <div class="w-full text-center">
            <b-form-file
              accept=".m4a"
              class="w-1/3 mt-4 inline-block text-left"
              placeholder="Choose a .m4a file"
              v-model="file"
            ></b-form-file>
            <br />
            <b-button
              @click="predict"
              class="inline-block mt-4 w-1/3 button-colorful text-white font-bold py-2 px-4 rounded-full"
            >Predict</b-button>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "./Loader";
export default {
  data() {
    return {
      file: null,
      data1: {},
      resultLoading: false
    };
  },
  components:{
    Loader
  },
  methods: {
    predict() {
      this.resultLoading = true;
      let formData = new FormData();
      formData.append("sound", this.file);
      let self = this;

      axios
        .post("http://35.236.184.82:8080/predict", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function(input) {
          window.console.log(input);
          self.data1 = input.data;
          self.$router.push({
            name: "/result",
            params: {
              items: input.data
            },
          });
        })
        .catch(function(error) {
          window.console.log(error);
        });
    }
  }
};
</script>

<style></style>
