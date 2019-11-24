<template>
  <div>
    <div class="text-center mt-5" >
      <b-card class="inline-block border w-9/12 h-full pb-4">
        <div class="card-body">
          <img src="../../assets/images/check.svg" alt class="mx-auto w-1/12" />
          <h1 class="text-3xl mt-2 head-home">Results</h1>
          <output1 :data="this.dataAll" />
          <div class="flex flex-wrap mx-auto">
            <output2 :data="this.dataAll" />
            <output3 :data="this.dataAll"/>
            <b-button @click="dowloadAll" class="button-colorful rounded w-80 text-white py-2 font-bold my-3 border-none">
              Download All Probability Word
            </b-button>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import output1 from "./OutputFromModel"
import output2 from "./OutputFromDict"
import output3 from "./OutputFromPwLists"
export default {
  props: ['items'],
  data(){
    return{
      dataAll: this.items
    }
  },
  components: {
    output1,
    output2,
    output3
  },
  methods:{
    dowloadAll(){
       window.open(this.dataAll['bruteforces-file'], "_blank"); 

    }
  },
  mounted(){
    if(this.dataAll == null){
      this.$router.go(-1)
    }
  }
};
</script>

<style>
.w-80{
  margin: auto;
  width: 50%
}
</style>