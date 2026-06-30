export function search(data:any[],query:string){

 return data.filter(item=>

 JSON.stringify(item)

 .toLowerCase()

 .includes(query.toLowerCase())

 );

}
