import React, { useMemo } from 'react'
 const delay =(ms)=>{
    const start = Date.now()
    while(Date.now-start<ms){
      continue
    }
    return true
 }
function TodoItems({id,title,status,toggleStatus,itemsDelete}) {
  const isDelay =useMemo (()=>delay(200),[])    //synchronous delay
  return (
    <div style={{display:"flex",justifyContent:"c",margin:"1rem 0"}}>
        
      <div>
      {title}
      </div>
      <div style={{margin:"0 1rem"}}>
      {status ? "true":"false"}
      </div>
      <button onClick={()=>toggleStatus(id)}>toggle</button>
      <button onClick={()=>itemsDelete(id)}>Delete</button>
         
    </div>
  )
}

// function areEqual(preProps,nextProps) {
//   if(preProps.id===nextProps.id&&preProps.status===nextProps.status){
//     return true
//   }
//   return false
// }

export default TodoItems