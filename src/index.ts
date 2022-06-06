export function angry(input:String): void{
    console.log(`\x1b[31m${input}`);
}
export function happy(input:String): void{
    //light yellow
    console.log(`\x1b[33m${input}`);
}
export function ecstatic(input:String): void{
    //dark yellow
    console.log(`\x1b[92m${input}`);
}
export function admiring(input:String): void{
    //green yellow
    console.log(`\x1b[92m\x1b[1m${input}`);
}
export function annoying(input:String): void{
    //light red
    console.log(`\x1b[41m${input}`);
}
export function boring(input:String): void{
    //purple
    console.log(`\x1b[35m${input}`);
}
export function disgusting(input:String): void{
    //dark purple
    console.log(`\x1b[105m${input}`);
}
export function sad(input:String): void{
    //blue
    console.log(`\x1b[44m${input}`);
}
export function surprising(input:String): void{
    //cyan
    console.log(`\x1b[96m${input}`);
}
export function fear(input:String): void{
    //green
    console.log(`\x1b[32m${input}`);
}
export function terrorizing(input:String): void{
    //dim green
    console.log(`\x1b[92m\x1b[2m${input}`);
}
