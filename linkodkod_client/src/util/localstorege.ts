export function loadToken(key:string) {
return localStorage.getItem(key);
}
export function insertToken(token: string,key:string){
  localStorage.setItem(key, token);
}