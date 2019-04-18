<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="hitApi">hit api</button>
    <p>{{apiData}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class About extends Vue {
  apiData: any = null;
  async hitApi() {
    const resp = await fetch('/api/hello');
    this.apiData = await resp.json();
  }
}
</script>

