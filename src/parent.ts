export default abstract class Parent {
    
    constructor() {
        console.log('(parent) constructor');
    }

    static field = console.log('(parent) static field');

    protected parentProperty = console.log('(parent) property');

    method() {
        console.log('(parent) class method');
    }

    static static_method() {
        console.log('(parent) static method');
    }

}