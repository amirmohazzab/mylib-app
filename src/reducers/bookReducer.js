
export const bookReducer=(state, action)=>{
    switch(action.type){
        case 'ADD_BOOK':
            return [...state,{
                title:action.book.title,
                author:action.book.author,
                number:Math.floor(Math.random(1)*1000)
            }]

        case 'DELETE_BOOK':
            return state.filter(book => book.number !== action.number)

        default:
            return state
    }
}