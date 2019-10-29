import axios from 'axios';
import { GET_FIELDS, ADD_FIELD, DELETE_FIELD,LOADING_FIELDS } from './types';

export const getFields = () => dispatch => {
  // dispatch();
   axios.get('/api/fields').then(res => dispatch({
       type:GET_FIELDS,
       payload:res.data
   }))
   
}

export const addFields = field => dispatch =>{
    axios.post('/api/fields',field).then(res => dispatch({
        type:ADD_FIELD,
        payload:res.data
    }))
}

export const deleteFields = id => {
    return {
        type:DELETE_FIELD,
        payload:id 
    }
}
