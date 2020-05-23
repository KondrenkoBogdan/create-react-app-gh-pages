export const requiredField = (value: string): undefined | string => {
    if (value) return undefined;
    return "Field is required";
}

export const maxLengthCreator = (maxLength: number)=> (value: string): undefined|string  => {
    if(value.length > maxLength) return "Max length is " + maxLength + " symbols";
    return undefined;
}

export const emailValidation = (value:string): undefined|string  => {
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return "Invalid email address"
    return undefined
}
