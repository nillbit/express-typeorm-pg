
export default function env(key:string,defaultValue:string){
    const value = process.env[key];
    if(value === undefined) return defaultValue;
    return value;
}