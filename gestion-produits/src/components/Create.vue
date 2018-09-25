<template>
    <v-layout>
        <v-flex xs12>
            <v-form ref="form">
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
                    required>
                </v-text-field>
        

        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
    </v-form>
        </v-flex>
</v-layout>
    
</template>

<script>
export default {
    data() {
        return {
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
        };
    },
    methods: {
        submit() {
            console.log(this.product);
        },
        clear() {
            this.$refs.form.reset();
        },
    },
};
</script>

<style>

</style>


