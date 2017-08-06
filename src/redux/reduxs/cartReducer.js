let cart ={
    total:0,
    dishes:{

    },
    topic:0
}
const calPrice = (dishes) => {
  let topic = 0;
  Object.keys(dishes).map(item => {
    // console.log(dishes[item].price)
    topic = topic + parseInt(dishes[item].price,10) * parseInt(dishes[item].count,10)
    return null
  })
  return topic
}

export default function cartReducer(state=cart,action){
  let nextDishes
  let nextPrice
  switch (action.type) {
    case "ADD_CART":
     nextDishes ={
      ...state.dishes,[action.dishId]:{
        name:action.dish.name,
        poster: action.dish.poster,
        price: action.dish.price,
        desc: action.dish.desc,
        count: 1
      }
    }
    nextPrice= calPrice(nextDishes)
    console.log(nextDishes)
      return  {...state, total: state.total + 1, dishes: nextDishes,
      topic:nextPrice }
      case "INCR_CART_ITEM":
          nextDishes={
            ...state.dishes,
            [action.dishId]:{...state.dishes[action.dishId],
            count: state.dishes[action.dishId].count+1
            }
          }
          console.log(nextDishes);
          nextPrice= calPrice(nextDishes)
          return {...state,dishes:nextDishes,topic:nextPrice}

          case 'DECR_CART_ITEM':
            nextDishes = { ...state.dishes,
                        [action.dishId] : { ...state.dishes[action.dishId],
                         count: state.dishes[action.dishId].count - 1
                      }
                   }
      nextPrice = calPrice(nextDishes)
      return { ...state, dishes: nextDishes, topic: nextPrice }
    default:
      return state
  }
}
