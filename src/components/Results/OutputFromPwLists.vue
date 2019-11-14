<template>
  <div class="mt-4 w-1/2 px-3">
      <div class="w-full border text-left p-3 h-64">
        <h1 class="font-bold">From password frequency lists</h1>
        <div class="border h-32 my-2 px-2 overflow-y-auto">
            <div v-for="password in password_lists" :key="password">
                <p>{{ password }}</p>
            </div>
        </div>
        <b-button class="rounded w-full text-white py-2 font-bold border-none my-3">
            Download
        </b-button>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            password_lists: [
                "toon",
                "toom",
                "tokj",
                "tolk",
                "talk",
                "tyyt",
                "tiok",
                "trie",
                "trit",
                "tyuj"
            ]
        }
    }
}
</script>

<style>

</style>