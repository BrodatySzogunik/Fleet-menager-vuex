<template>
<div class="editMenu">
          <h3>Edit menu</h3>
          <input type="text" placeholder="Brand" v-model="newBrand">
          <input type="text" placeholder="Model" v-model="newModel">
          <input type="number" placeholder="Course" v-model="newCourse">
          <input type="number" placeholder="Price" v-model="newPrice">
          <select  name="VechicleType" v-model="newType" >
            <option v-for="type in getTypes" :key="type.type" :value="type.type">{{type.type}}</option>
          </select>
          <select name="VechicleCondition" v-model="newCondition">
             <option v-for="condition in getConditions" :key="condition.condition" :value="condition.condition" >{{condition.condition}}</option>
          </select>
          <button @click="editButton(vechicle.id,newBrand,newModel,newType,newPrice,newCourse,newCondition)">Edit</button>
      </div>
  
</template>

<script>
import {mapGetters} from 'vuex'
export default {
     data(){
        return{
            newBrand:this.vechicle.brand,
            newModel:this.vechicle.model,
            newType:this.vechicle.type,
            newPrice:this.vechicle.price,
            newCourse:this.vechicle.course,
            newCondition:this.vechicle.condition,
        }
    },
    props:['vechicle'],
    methods:{
        editButton(vechicleId,newBrand,newModel,newType,newPrice,newCourse,newCondition){
            this.$store.dispatch('editButton',{
                vechicleId:vechicleId,
                newBrand:newBrand,
                newModel:newModel,
                newType:newType,
                newPrice:newPrice,
                newCourse:newCourse,
                newCondition:newCondition
            })
        }
    },
    computed:{
        ...mapGetters([
        'getTypes',
        'getConditions'
    ])}


}
</script>

<style>

</style>