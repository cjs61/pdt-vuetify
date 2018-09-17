<template lang="html">
     <v-layout row>
    <v-flex xs4 v-for="product in products" key: "product.id">
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
    import API from '@/lib/API';

    export default {
        data() {
            return { 
            products: [],
            };
    },
        mounted() {
            this.load();
        },
        methods: {
            load() {
                API.getProducts()
                .then(products => this.products = products);
            },
        },
    };
</script>

<style>

</style>
