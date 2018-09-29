<template>
    <v-layout>
        <v-flex xs12>
            <v-form ref="form" v-model="valid">
                <v-text-field
                    label="Title"
                    v-model="product.title"
                    :rules="titleRules"
                    required>
                </v-text-field>
                <v-text-field
                    label="Description"
                    v-model="product.description"
                    multi-line>
                </v-text-field>
                <v-text-field
                    label="Price"
                    v-model="product.price"
                    :rules="priceRules"
                    required
                    prefix="€">
                </v-text-field>
                <v-text-field
                    label="Quantity"
                    v-model="product.quantity"
                    :rules="quantityRules"
                    required>
                </v-text-field>
                 <v-text-field
                    label="Image"
                    v-model="product.image"
                    :rules="imageRules"
                    required>
                </v-text-field>
        

        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
    </v-form>
        </v-flex>
</v-layout>
    
</template>

<script>
import API from '@/lib/API';
import my_products from '@/lib/products.js';
export default {
    data() {
        return {
            valid: true,
            product: {
                title: '',
                description: '',
                price: 0,
                quantity: 0,
                image: '',
                
            },
            titleRules: [(title) => {
                if (title.trim() === '') return 'Title must not be empty'; 
                return true;
            }],
            priceRules: [(price) => {
                if (isNaN(price)) return 'price must be a valid number';
                if (Number(price) <= 0) return 'price must be greater than 0€';
                return true;
            }],
            quantityRules: [(quantity) => {
                if (isNaN(quantity)) return 'quantity must be a valid number';
                if (Number(quantity) < 0) return 'quantity must be greater than 0€';
                return true;
            }],
            imageRules: [(image) => {
                if (image.trim() === '') return 'Image must not be empty'; 
                return true;
            }],
        };
    },
    methods: {
        submit() {
            if (this.valid) {
                this.product.quantity = Number(this.product.quantity);
               
               API.createProduct(this.product)

                // pour aller au produit qui vient d'être créé je prends la propriété id à partir de cet objet : {id} pour le réutiliser dans params:
                .then(({ id }) => { 
                    this.$route.push({
                        name: 'Product',
                        params: {
                            id,
                        },
                    });
                });
            }
            
        },
        clear() {
            this.$refs.form.reset();
        },
    },
};
</script>

<style>

</style>


