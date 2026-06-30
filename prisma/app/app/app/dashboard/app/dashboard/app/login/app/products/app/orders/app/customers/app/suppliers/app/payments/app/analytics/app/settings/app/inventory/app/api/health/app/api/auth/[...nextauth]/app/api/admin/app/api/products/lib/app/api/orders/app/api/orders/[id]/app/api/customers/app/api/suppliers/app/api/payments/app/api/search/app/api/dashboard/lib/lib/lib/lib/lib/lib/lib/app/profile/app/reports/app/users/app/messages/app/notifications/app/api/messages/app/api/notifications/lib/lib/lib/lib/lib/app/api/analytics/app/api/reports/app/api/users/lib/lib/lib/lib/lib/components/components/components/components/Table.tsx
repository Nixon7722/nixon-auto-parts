export default function Table({

children

}:{

children:any

}){

return(

<table
style={{

width:"100%",

borderCollapse:"collapse"

}}

>

{children}

</table>

);

}
