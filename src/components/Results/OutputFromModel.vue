<template>
  <div class="px-3">
    <div class="border text-left p-3 mt-4">
      <b-row>
        <b-col cols="2" class="my-auto">
          <h1>From model</h1>
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
            triggers="click"
          >
            <div>
              <b-row>
                <b-col
                  v-for="element in result.nearAlp"
                  :key="element"
                  cols="2"
                  class="text-center px-px py-px"
                >
                  <b-button
                    class="model-btn text-black hover:text-black border-transparent hover:border-gray-300"
                    >{{ element }}</b-button
                  >
                </b-col>
              </b-row>
            </div>
          </b-popover>
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [
        {
          model: "h",
          nearAlp: ["g", "t", "y", "u", "j", "m", "n", "b"]
        },
        {
          model: "a",
          nearAlp: ["q", "w", "s", "x", "z"]
        },
        {
          model: "r",
          nearAlp: ["e", "t", "g", "f", "d"]
        },
        {
          model: "u",
          nearAlp: ["y", "i", "k", "j", "h"]
        }
      ]
    };
  }
};
</script>

<style></style>
