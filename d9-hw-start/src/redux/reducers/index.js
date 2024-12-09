const initialJob = {
  cart :{
    job:[],
    ready:true
  }
}



const mainReducer = (state = initialJob , action) => {
switch(action.type){
    case "ADD_JOB" :
      return {
         ...state,
         cart:{
          ...state.cart,
          content:state.cart.job.concat(action.payload),

         }
      }
    default:


      return state
  }

}


export default mainReducer