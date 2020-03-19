

 export default function validate(name,address,comments){
    const errors =[]
    if(name.length < 1 ){
        errors.push('Name must be longer than 1 and less than 25')
    }
    if(address.length < 1 || address.length <15){
        errors.push('You must enter an address')
    }
    if(comments.length === 0 || comments.length <15){
        errors.push('You must enter at least 15 characters of information')
    }
    return errors;
}
