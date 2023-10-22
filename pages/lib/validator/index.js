const validator = (data, schema) => {
    const {value, error} = schema.validate(data);
    if(error) {
        throw new Error(error)
    } else { 
        return value;
    }
}

export default validator;