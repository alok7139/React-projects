const initialstate = {
    carts: []
};

export const cartreducer = (state = initialstate , action) => {
    switch(action.type){
       case "ADD_CART" :
         

        const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
        
        if(itemIndex >= 0){
            state.carts[itemIndex].qnty += 1;
        }
        else{
            const temp = {...action.payload , qnty:1 }
           return {
             ...state,
              carts : [...state.carts,temp]
         }
        }


        case "RMV_CART":
            const data = state.carts.filter((element) => element.id !== action.payload);
            return {
                ...state,
                carts : data
            }

            case "RMV_QNTY" :
             
            const itemInd_dec = state.carts.findIndex((item) => item.id === action.payload.id);
            if(state.carts[itemInd_dec].qnty >= 1){
               const deleteitem = state.carts[itemInd_dec].qnty -= 1;
               console.log(deleteitem)

               return {
                ...state,
                carts:[...state.carts]
               }
            }
            else if(state.carts[itemInd_dec].qnty === 1){
                const data = state.carts.filter((element) => element.id !== action.payload);
                return {
                    ...state,
                    carts : data
                }
            }

        default :
        return state
    }
}