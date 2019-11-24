<template>
  <div class="mt-4 w-1/2 px-3">
      <div class="w-full border text-left p-3">
        <h1 class="font-bold">From password frequency lists</h1>
        <div class="border h-32 my-2 px-2 overflow-y-auto">
            <div v-for="password in password_lists" :key="password">
                <p>{{ password }}</p>
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
            password_lists: []
        }
    },
    mounted(){
    for (let index = 0; index < this.data1['posible-key'].length; index++) {
      this.result_dict.push(this.data1['from-badpassword'][index])
      
    }
    }
}
</script>

<style>

</style>