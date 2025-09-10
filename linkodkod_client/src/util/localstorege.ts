//טעינת הטוקן מהלוקאלסטורג
export function loadToken(key:string) {
return localStorage.getItem(key);
}

//כתיבה ללוקאלסטורג
export function insertToken(token: string,key:string){
  localStorage.setItem(key, token);
}