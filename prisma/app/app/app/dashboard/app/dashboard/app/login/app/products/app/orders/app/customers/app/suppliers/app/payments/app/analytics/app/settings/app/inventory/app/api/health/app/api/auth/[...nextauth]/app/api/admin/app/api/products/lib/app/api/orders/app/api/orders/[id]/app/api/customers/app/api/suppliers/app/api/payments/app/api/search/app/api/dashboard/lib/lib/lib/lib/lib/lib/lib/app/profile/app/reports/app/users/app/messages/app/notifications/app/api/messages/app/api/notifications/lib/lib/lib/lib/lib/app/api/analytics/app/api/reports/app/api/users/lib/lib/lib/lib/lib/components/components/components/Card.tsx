export default function Card({

title,

value

}:{

title:string,

value:any

}){

return(

<div
style={{
background:"#1f2937",
padding:20,
borderRadius:10
}}>

<h3>{title}</h3>

<h1>{value}</h1>

</div>

);

}
