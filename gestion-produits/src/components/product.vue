<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card >
                <v-card-media :src="product.image" height="600px">
                </v-card-media>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{ product.title }}</h3>
                        <div>{{ product.description }}</div>
                        <h4>€{{ product.price }}</h4>
                        <small>{{ product.quantity }} in stock</small>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn
                    :to=" {
                        name: 'Edit',
                        params: {
                            id: product.id
                        }
                    }"
                    flat color="primary">Edit</v-btn>       
                </v-card-actions>
            </v-card>
         </v-flex>
    </v-layout>
</template>

<script>
import API from '@/lib/API';

export default {
    data () {
        return {
            product: {},
        };
    },
    mounted() {
        const { id } = this.$route.params;
        this.load(id);
    },
    methods: {
        load(id) {
            API.getProduct(id)
          //  .then((product) => { this.product = product;}); 
          this.product = API.getProduct(id);
        },
    },
};
</script>

<style>

</style>


