<template>
  <div>
  <AddNewVechicle/>
  <Worth/>
  <div class="row">
    <FleetList v-for="vechicle in vechicles" :key="vechicle.id" :vechicle="vechicle"/>
  </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  mounted: function () {
    this.$nextTick(function () {
    this.$store.dispatch('calcualteFleetWorth')
    })
  },
  computed:{
    vechicles(){
      console.log(this.$store.getters.getVisibleVechicles)
      return this.$store.getters.getVisibleVechicles
    }
  
    },
    watch:{
      vechicles(){
        console.log(this.vechicles)
      }
    }
}
</script>
