<template lang="html">
    <h1>Products</h1>
</template>

<script>
import API from '@/lib/API';

export default {
    mounted() {
        this.load();
    },
    methods: {
        load() {
            API.getProducts()
            .then((products) => {
                console.log(products);
            });
        },
    },
};
</script>

<style>

</style>