<template>
  <div id="addVechicle">
      <input v-model="newBrand" type="text" placeholder="Brand">
      <input v-model="newModel" type="text" placeholder="Model">
      <input v-model="newCourse" type="number" placeholder="Course">
      <input v-model="newPrice" type="number" placeholder="Price">
      <select  name="VechicleType" v-model="newType" >
          <option v-for="type in getTypes" :key="type.type" :value="type.type">{{type.type}}</option>
      </select>
      <select name="VechicleCondition" v-model="newCondition">
          <option v-for="condition in getConditions" :key="condition.condition" :value="condition.condition" >{{condition.condition}}</option>
      </select>
      <button @click="addNewVechicle()">Add</button>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'Vuex'
export default {
    methods:mapActions(['addNewVechicle']),
    computed:{
        newBrand:{
            get(){
                return this.$store.getters['getnewVechicleBrand']
            },
            set(value){
                return this.$store.dispatch('setBrand',value)
            }
        },
         newModel:{
            get(){
                return this.$store.getters['getnewVechicleModel']
            },
            set(value){
                return this.$store.dispatch('setModel',value)
            }
        },
         newType:{
            get(){
                return this.$store.getters['getnewVechicleType']
            },
            set(value){
                return this.$store.dispatch('setType',value)
            }
        },
         newPrice:{
            get(){
                return this.$store.getters['getnewVechiclePrice']
            },
            set(value){
                return this.$store.dispatch('setPrice',value)
            }
        },
         newCourse:{
            get(){
                return this.$store.getters['getnewVechicleCourse']
            },
            set(value){
                return this.$store.dispatch('setCourse',value)
            }
        },
         newCondition:{
            get(){
                return this.$store.getters['getnewVechicleCondition']
            },
            set(value){
                return this.$store.dispatch('setCondition',value)
            }
        },
        
        ...mapGetters([
        'getTypes',
        'getConditions'
    ])},
    head(){
        return{
            title:"Dad Jokes",
            meta:[{
                hid:"description",
                name:"description",
                content:"something"

            }]
        }
    }

}
</script>

<style>

</style>``