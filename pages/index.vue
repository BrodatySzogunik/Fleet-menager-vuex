<template>
  <div>
  <AddNewVechicle/>
  <div class="row">
    <FleetList v-for="vechicle in vechicles" :key="vechicle.id" :vechicle="vechicle"/>
  </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed:{
    vechicles(){
      console.log(this.$store.getters.getVechicles)
      return this.$store.getters.getVechicles
    }
    // mapState(['vechicles'])
    },
    watch:{
      vechicles(){
        console.log(this.vechicles)
      }
    }
}
</script>
