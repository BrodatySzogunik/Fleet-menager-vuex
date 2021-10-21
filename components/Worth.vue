<template>
  <div class="d-flex justify-content-center align-items-center">
      <h2>Fleet Worth: {{getWorth}}</h2>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:mapGetters(['getWorth'])
    

}
</script>

<style>

</style>