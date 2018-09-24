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
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat color="orange">See</v-btn>       
                </v-card-actions>
            </v-card>
         </v-flex>
    </v-layout>
</template>

<script>
export default {
    data () {
        return {
            product: {},
        };
    },
  //  mounted(){
       // console.log(this.$route.params);
  //  }
};
</script>

<style>

</style>


