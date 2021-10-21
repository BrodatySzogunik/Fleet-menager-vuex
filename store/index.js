import {v4} from 'uuid'

export const state = () => ({
    types:[{id:1,type:'Car'},{id:3,type:'Truck'},{id:2,type:'Motor'}],
    conditions:[{id:1,condition:"New"},{id:1,condition:"Used"},{id:1,condition:"Wrecked"}],

    vechicles:[
        {
        id:'234jn1234234',
        brand:'Iveco',
        model:'Daily',
        type:'Truck',
        price:25000,
        course:180000,
        condition:'Wrecked'
        },
        {
        id:'sd78erf7a83d',
        brand:'Skoda',
        model:'Octavia',
        type:'Car',
        price:130000,
        course:12,
        condition:'New'
        }
    ],
    visibleVechicles:[
        {
        id:'234jn1234234',
        brand:'Iveco',
        model:'Daily',
        type:'Truck',
        price:25000,
        course:180000,
        condition:'Wrecked'
        },
        {
        id:'sd78erf7a83d',
        brand:'Skoda',
        model:'Octavia',
        type:'Car',
        price:130000,
        course:12,
        condition:'New'
        }
    ],

    newVechicleBrand:"",
    newVechicleModel:"",
    newVechicleType:"",
    newVechiclePrice:"",
    newVechicleCourse:"",
    newVechicleCondition:"",
    fleetWorth:0
})

export const mutations ={
    SET_NEW_VECHICLE_BRAND(state,value){
        state.newVechicleBrand=value
    },
    SET_NEW_VECHICLE_MODEL(state,value){
        state.newVechicleModel=value
    },
    SET_NEW_VECHICLE_TYPE(state,value){
        state.newVechicleType=value
    },
    SET_NEW_VECHICLE_PRICE(state,value){
        state.newVechiclePrice=value
    },
    SET_NEW_VECHICLE_COURSE(state,value){
        state.newVechicleCourse=value
    },
    SET_NEW_VECHICLE_CONDITION(state,value){
        state.newVechicleCondition=value
    },
   
    ADD_NEW_VECHICLE(state){
        state.vechicles.push({
            id:v4(),
            brand:state.newVechicleBrand,
            model:state.newVechicleModel,
            type:state.newVechicleType,
            price:state.newVechiclePrice,
            course:state.newVechicleCourse,
            condition:state.newVechicleCondition
        })
    },
    REMOVE_VECHICLE(state,id){
        state.vechicles = state.vechicles.filter(item=>item.id!=id)
    },
    EDIT_VECHICLE(state,payload){
        
        state.vechicles.forEach(element => {
            if(element.id==payload.vechicleId){
                element.brand=payload.newBrand;
                element.model=payload.newModel;
                element.type=payload.newType;
                element.price=payload.newPrice;
                element.course=payload.newCourse;
                element.condition=payload.newCondition;
            }
        });
    },
    MOVE_UP(state,id){

        let idx = state.vechicles.findIndex(item=>item.id==id)
        let vechicles = state.vechicles
        console.log(idx)
        if(idx == 0 ){
            return false
        }
        else{
            var itemToMove = vechicles[idx]
            vechicles[idx]=vechicles[idx-1]
            vechicles[idx-1]=itemToMove
        }
        state.vechicles= state.vechicles.filter(item=> item)
        
    },
    MOVE_DOWN(state,id){
        let idx = state.vechicles.findIndex(item=>item.id==id)
        if(idx==state.vechicles.length-1){
            return false
        }else{ 
            var itemToMove = state.vechicles[idx]
            state.vechicles[idx]=state.vechicles[idx+1]
            state.vechicles[idx+1]=itemToMove
        }
        state.vechicles= state.vechicles.filter(item=> item)
    },
    MOVE_TOP(state,id){
        let idx = state.vechicles.findIndex(item=>item.id==id)
        if(idx==0){
            return false
        }else{
            let itemToMove = state.vechicles[idx]
            state.vechicles = state.vechicles.filter(item=> item.id!=id)
            state.vechicles.unshift(itemToMove)

        }

    },
    MOVE_BOTTOM(state,id){
        let idx = state.vechicles.findIndex(item=>item.id==id)
        if(idx==state.vechicles.length-1){
            return false
        }else{
            let itemToMove = state.vechicles[idx]
            state.vechicles = state.vechicles.filter(item=> item.id!=id)
            state.vechicles.push(itemToMove)

        }

    },
    CALCULATE_FLEET_WORTH(state){
        state.fleetWorth=state.visibleVechicles.reduce((previousVal,actualVal,)=>{
            return previousVal.price + actualVal.price
        },0)
        console.log(state.fleetWorth)
    }

}

export const actions = {
    addNewVechicle:({commit}) => commit ('ADD_NEW_VECHICLE'),
    setBrand: ({commit},payload) =>commit('SET_NEW_VECHICLE_BRAND',payload),
    setModel: ({commit},payload) =>commit('SET_NEW_VECHICLE_MODEL',payload),
    setType: ({commit},payload) =>commit('SET_NEW_VECHICLE_TYPE',payload),
    setPrice: ({commit},payload) =>commit('SET_NEW_VECHICLE_PRICE',payload),
    setCourse: ({commit},payload) =>commit('SET_NEW_VECHICLE_COURSE',payload),
    setCondition: ({commit},payload) =>commit('SET_NEW_VECHICLE_CONDITION',payload),
    removeVechicle: ({commit},payload) => commit('REMOVE_VECHICLE',payload),
    moveUp:({commit},payload)=> commit('MOVE_UP',payload),
    moveDown: ({commit},payload) => commit('MOVE_DOWN',payload),
    moveTop:({commit},payload) => commit('MOVE_TOP',payload),
    moveBottom:({commit},payload) => commit ('MOVE_BOTTOM',payload),
    editButton:({commit},payload) => commit ('EDIT_VECHICLE',
        {
        vechicleId:payload.vechicleId,
        newBrand:payload.newBrand,
        newType:payload.newType,
        newModel:payload.newModel,
        newPrice:payload.newPrice,
        newCourse:payload.newCourse,
        newCondition:payload.newCondition
        }
    ),
    calcualteFleetWorth:({commit},payload) => commit('CALCULATE_FLEET_WORTH')

} 

export const getters ={
    getTypes(state){
        return state.types
    },
    getConditions(state){
        return state.conditions
    },
    getnewVechicleBrand(state){
        return state.newVechicleBrand
    },
    getnewVechicleModel(state){
        return state.newVechicleModel
    },
    getnewVechicleType(state){
        return state.newVechicleType
    },
    getnewVechiclePrice(state){
        return state.newVechiclePrice
    },
    getnewVechicleCourse(state){
        return state.newVechicleCourse
    },
    getnewVechicleCondition(state){
        return state.newVechicleCondition
    },
    getVechicles(state){
        return state.vechicles
    },
    getVisibleVechicles(state){
        return state.visibleVechicles
    }
    

} 