/*
    -getOwnPropertyDescriptor-
        
    return descriptor
*/
let object, descriptor;

object = { get foo() { return 17; } };
descriptor = Object.getOwnPropertyDescriptor(object, 'foo');