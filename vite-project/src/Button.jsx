function Button(){
// let count =0;
//     const handleClick=(name)=>{
//          if(count<3){
// count++;
// console.log(`${name} You thouched me ${count} times`)
//          }
// else
// {
//     console.log(`${name} stop touching me`)
// }
//     }
    //const handleClick2=(name)=> console.log(`${name} Stop touching me`);


const handleClick =(e)=>e.target.textContent="Ouch";

    return(

<button onDoubleClick={(e)=>handleClick(e)}>Click me</button>
    )
}
export default Button;