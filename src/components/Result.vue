<template>
  <div>
    <div class="text-center mt-5">
      <b-card class="inline-block border w-9/12 h-full pb-4">
        <div class="card-body">
          <img src="../assets/images/check.svg" alt class="mx-auto w-1/12" />
          <h1 class="text-3xl mt-2 head-home">Results</h1>
          <div class="px-3">
            <div class="border text-left p-3 mt-4">
                <h1>From model</h1>
            </div>
          </div>
          <div class="flex flex-wrap mx-auto">
            <div class="mt-4 w-1/2 px-3">
                <div class="w-full border text-left p-3 h-64 overflow-y-auto">
                    <h1>From English dictionery</h1>
                </div>
            </div>
            <div class="mt-4 w-1/2 px-3">
                <div class="w-full border text-left p-3 h-64 overflow-y-auto">
                    <h1>From Password frequency lists</h1>
                </div>
            </div>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>