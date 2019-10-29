import { GET_FIELDS, ADD_FIELD, DELETE_FIELD } from '../actions/types'

const initialState = {
    fields: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_FIELDS:return{
            ...state,
            fields:action.payload
        }
        case ADD_FIELD:return{
            ...state,
            items:[action.payload,...state.fields]
        }
        case DELETE_FIELD:return{
            ...state,
            fields:state.fields.filter(field => field.id !== action.payload)
        }
        default:
            return state
    }
}