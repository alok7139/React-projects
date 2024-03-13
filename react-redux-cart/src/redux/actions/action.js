export const ADD = (item) => {
    return {
        type:"ADD_CART",
        payload:item
    }
}

// remove items from cart
export const Delete = (id) => {
    return {
        type:"RMV_CART",
        payload:id
    }
}

// remove individual item
export const Remove = (item) => {
    return {
        type:"RMV_QNTY",
        payload:item
    }
}