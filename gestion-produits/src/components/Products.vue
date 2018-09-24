<template lang="html">
  <v-layout row wrap>
    <v-flex xs4 v-for="product in products" :key="product.id">
      <v-card >
        <!--<v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75">
          </v-img>
        -->
        <v-card-media :src="product.image" height="400px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ product.title }}</h3>
              <div>{{ product.description }}</div>
              </div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn 
          :to="{
            name: 'Product',
            params: {
              id: product.id
            }
          }"
              flat
              color="orange">View</v-btn>
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
            products: [
            ],
            };
    },
        mounted() {
            this.load();
        },
        methods: {
            load() {
                this.products = API.getProducts();
                // .then(products => this.products = products);
            
            },
        },
    };
</script>

<style>

</style>
