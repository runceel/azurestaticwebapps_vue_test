<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

type ApiResponse = {
  message: string;
};

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      message: '',
    };
  },
  async created() {
    console.log(process.env);
    const res = await fetch('/api/getMessage?name=Vue.js');
    if (res.ok) {
      const responseMessage = await res.json() as ApiResponse;
      this.message = responseMessage.message;
    } else {
      this.message = 'failed';
    }
  },
});
</script>
