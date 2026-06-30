export function customerLevel(total:number){

 if(total>10000) return "VIP";

 if(total>3000) return "GOLD";

 return "STANDARD";

}
