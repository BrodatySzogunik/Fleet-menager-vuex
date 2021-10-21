<template>
  <div class="col-sm-12 col-md-12 col-lg-4">
      
      <div class="cardHeader">
          <div class="col-12"><small>id:{{vechicle.id}}</small></div>
          <h1>{{vechicle.brand}} {{vechicle.model}}</h1></div>
      <div class="cardBody">
          <ul>
              <li>Type:{{vechicle.type}}</li>
              <li>Course:{{vechicle.course}}</li>
              <li>Price:{{vechicle.price}}</li>
              <li>Condition:{{vechicle.condition}}</li>
          </ul>
      </div>
      <div class="cardFooter row">
          <div class="col-3"><button class="editButton">Edit</button></div>
          <div class="col-2"><button class="moveTopButton" @click="moveTop(vechicle.id)">Move Top</button></div>
          <div class="col-2">
              <button class="moveUpButton" @click="moveUp(vechicle.id)">Up</button>
              <button class="moveDownButton" @click="moveDown(vechicle.id)">Down</button>
          </div>
          <div class="col-2"><button class="moveBottomButton" @click="moveBottom(vechicle.id)">Move Bottom</button></div>
          <div class="col-3"><button class="deleteButton" @click="removeVechicle(vechicle.id)">Delete</button></div>
      </div>
       <EditVechicle :vechicle="vechicle"/>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
   
    updated: function () {
  this.$nextTick(function () {
    this.$store.dispatch('calcualteFleetWorth')
  })
  },
    computed:{
        ...mapGetters([
        'getTypes',
        'getConditions'
    ])}
    ,
    props:['vechicle'],
    methods:{
        removeVechicle(vechicleId){
            this.$store.dispatch('removeVechicle',vechicleId)
        },
        moveUp(vechicleId){
            this.$store.dispatch('moveUp',vechicleId)
        },
        moveDown(vechicleId){
            this.$store.dispatch('moveDown',vechicleId)
        },
        moveTop(vechicleId){
            this.$store.dispatch('moveTop',vechicleId)
        },
        moveBottom(vechicleId){
            this.$store.dispatch('moveBottom',vechicleId)
        }
        
    }
    

}
</script>

<style>

</style>