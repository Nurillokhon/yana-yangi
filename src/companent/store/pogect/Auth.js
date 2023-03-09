const Autho ={

}

export default function Auth(state = Autho , action) {
    let userInfo = JSON.parse(localStorage.getItem("User"));
    
    return state = userInfo
}