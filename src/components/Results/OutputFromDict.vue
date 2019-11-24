<template>
    <div class="mt-4 w-1/2 px-3">
      <div class="w-full border text-left p-3">
        <h1 class="font-bold">From English dictionary</h1>
        <div class="border h-32 my-2 px-2 overflow-y-auto">
            <div v-for="word in result_dict" :key="word">
                <p>{{ word }}</p>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props:['data'],
    data(){
        return{
            data1:this.data,
            result_dict: [
            ]
        }
    },
    mounted(){
    for (let index = 0; index < this.data1['posible-key'].length; index++) {
      this.result_dict.push(this.data1['from-spellcorrection'][index])
      
    }
    
  }
};
</script>

<style></style>
