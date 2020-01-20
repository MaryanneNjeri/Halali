import _ from 'lodash'

export const auth ={
    isRegistered:false,


registered(){
    let id = localStorage.getItem('firm_id');
    if(!_.isEmpty(id)){
        return this.isRegistered = true
    }
    else {
        localStorage.clear()
        return this.isRegistered = false
    }
 }
}