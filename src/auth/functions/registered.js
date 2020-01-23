import _ from 'lodash'

export const auth ={
    isRegistered:false,


registered(){
    let id = localStorage.getItem('firm_id');
    if(!_.isEmpty(id)){
        return this.isRegistered = true
        
    }
    else if(_.isEmpty(id)){
        localStorage.clear()
        return this.isRegistered = false
        
    }
 }
}
console.log(auth.registered())