<template>
  <div class="px-3">
    <div class="border text-left p-3 mt-4">
      <b-row>
        <b-col cols="2" class="my-auto">
          <h1 class="font-bold">From model</h1>
        </b-col>
        <div v-for="(result, index) in results" :key="result">
          <b-button
            class="model-btn text-black hover:text-black border-transparent hover:border-gray-300 mx-2"
            :id="`popover-${index}`"
            variant="primary"
            >{{ result.model }}</b-button
          >
          <b-popover
            :target="`popover-${index}`"
            placement="top"
            triggers="hover"
          >
            <b-row class="mx-0 w-full">
              <b-col
                v-for="element in result.nearAlp"
                :key="element"
                cols="auto"
                class="text-center px-px py-px"
              >
              <b-button
                  class="model-btn text-black focus:bg-green-400 hover:text-black border-transparent hover:border-gray-300"
                  v-on:click="changeAlp(element, index)"
                  >{{ element }}</b-button
                >
              </b-col>
            </b-row>
          </b-popover>
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props:['data'],
  data() {
    return {
      data1:this.data,
      results: [
        
      ]
    };
  },
  methods: {
    changeAlp(alp, index){
      this.results[index].model = alp
    }
  },
  mounted(){
    for (let index = 0; index < this.data1['posible-key'].length; index++) {
      this.results.push({model:this.data1['from-model'][index],nearAlp:this.data1['posible-key'][index]})
      
    }
    
  }
};
</script>

<style></style>
