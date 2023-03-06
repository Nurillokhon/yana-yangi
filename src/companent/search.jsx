const initializeState = JSON.parse(localStorage.getItem('count1'));

function Search_input(state = initializeState, action) {
    if(action.type=='added2'){
        state=action.payload.mass
        return state
    }

    if(action.type == 'search'){

        if(action.payload.name==''){
            state=initializeState
            console.log(initializeState,'action');
            return state
        }
        else{
            let current = [...state]
            let qiymat = current.filter(item => {
                return item.NameBook.includes(action.payload.name)
            })
            state = qiymat
            console.log(state,'bu state');
            return state
        }
    }
    return state
}

export { Search_input };