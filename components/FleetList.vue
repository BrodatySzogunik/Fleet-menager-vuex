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
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
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
    updated: function () {
  this.$nextTick(function () {
    console.log("updated")
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
        },
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
    }
    

}
</script>

<style>

</style>