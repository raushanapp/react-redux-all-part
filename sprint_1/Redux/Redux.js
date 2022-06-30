
// sotre
//  

const createStore = (reducer,intialState) =>{
   const store = {}
   store.state = intialState,
   store.getState = ()=> store.state

   store.dispatch =(action)=> {

      store.state = reducer(store.state,action)
   }

   return store

}