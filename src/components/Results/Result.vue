<template>
  <div>
    <loader v-if="!getResult"/>
    <div v-else class="text-center mt-5" >
      <b-card class="inline-block border w-9/12 h-full pb-4">
        <div class="card-body">
          <img src="../../assets/images/check.svg" alt class="mx-auto w-1/12" />
          <h1 class="text-3xl mt-2 head-home">Results</h1>
          <output1/>
          <div class="flex flex-wrap mx-auto">
            <output2/>
            <output3/>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import Loader from "../Loader"
import output1 from "./OutputFromModel"
import output2 from "./OutputFromDict"
import output3 from "./OutputFromPwLists"
export default {
  data(){
    return{
      resultLoading: false
    }
  },
  components: {
    Loader,
    output1,
    output2,
    output3
  },
  methods:{
    getResult(){
      this.resultLoading = true
    }
  }
};
</script>

<style>
</style>