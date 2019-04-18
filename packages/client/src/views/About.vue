<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="hitApi">hit api</button>
    <p>{{apiData}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient();

@Component({})
export default class About extends Vue {
  public apiData: any = null;
  public async hitApi() {
    const resp = await client.query({
      query: gql`{hello}`,
    });
    this.apiData = resp.data;
  }
}
</script>

