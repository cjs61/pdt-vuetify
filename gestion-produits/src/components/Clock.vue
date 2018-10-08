<template>
    <!--
    <iframe src="http://free.timeanddate.com/clock/i6fttequ/n331/fn7/fs20/tct/pct/ftb/th2" frameborder="0" width="128" height="30" allowTransparency="true"></iframe>
    -->
  <p>{{ date  }}</p>
</template>

<script>
import API from '@/lib/API';

export default {
  data() {
      return {
        date: '',
      }
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
    // console.log('je suis ici');
    // this.date = 'jeudi'; //API.getDay();
    // console.log(this.date);

    this.date = API.getDay();

    },
  },
};
</script>
<style>
</style>
