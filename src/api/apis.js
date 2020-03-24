import Axios from "axios"
import Qs from "qs"
export var IP = "http://192.168.3.5:80"
let req = Axios.create({
    baseURL:IP,
    timeout:8000
})
/* 注册 */
export function reg(username,pwd){
    return req.post("/reg.php",Qs.stringify({acc:username,pwd:pwd}))
}
/* 获取验证码 */
export function getCode (){
    return req.get("/valitecode.php")
}
/* 登录 */
export function login(username,pwd){
    return req.post("/login.php",Qs.stringify({acc:username,pwd:pwd}))
}
/* 猜你喜欢 */
export function guessLove(){
    return req.get("/gethouselist.php")
}