

const sum = (...args) =>{

    // return a +b ;

    if(args.length===0) {
        return " sum inkoved without arguments"
    }
    else if(args.length===1){
        return "sum function needs atleast 2 arguments"
    }

    const sumValue = [...args].reduce((a,c)=>a + Number(c),0)
    return Number(sumValue.toFixed(1))

}

module.exports =sum