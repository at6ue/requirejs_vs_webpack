import Parent from "./parent";

export default class Child extends Parent {
    
    constructor() {
        super();
        console.log('(child) constructor');
    }

    static field = console.log('(child) static field');

    private childProperty = console.log('(child) property');

    method() {
        console.log('(child) class method');
    }

    static static_method() {
        console.log('(child) static method');
    }

}