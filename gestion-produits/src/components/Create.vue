<template>
    <v-layout>
        <v-flex xs12>
            <v-form ref="form">
                <v-text-field
                    label="Title"
                    v-model="product.title"
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
                    required
                    prefix="€">
                </v-text-field>
                <v-text-field
                    label="Quantity"
                    v-model="product.quantity"
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


