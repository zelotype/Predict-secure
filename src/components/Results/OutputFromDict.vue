<template>
    <div class="mt-4 w-1/2 px-3">
      <div class="w-full border text-left p-3 h-64">
        <h1 class="font-bold">From English dictionery</h1>
        <div class="border h-32 my-2 px-2 overflow-y-auto">
            <div v-for="word in result_dict" :key="word">
                <p>{{ word }}</p>
            </div>
        </div>
        <b-button class="rounded w-full text-white py-2 font-bold my-3 border-none">
            Download
        </b-button>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            result_dict: [
                "hello",
                "bello",
                "sello",
                "rello",
                "sdfsd",
                "eorgk",
                "sdfsd",
                "sdfas",
                "uouio",
                "dgojf"
            ]
        }
    }
};
</script>

<style></style>
