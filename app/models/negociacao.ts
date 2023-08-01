export class Negociacao {
   /* The `private` keyword is used to declare a private member in a class. It restricts access to the
   member only within the class itself. In the given code, the `_data`, `_quantidade`, and `_valor`
   variables are declared as private, which means they can only be accessed within the `Negociacao`
   class. */

    constructor(
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number
    ){};

    get data(): Date {
        return this._data
    };

    get quantidade(): number { 
        return this._quantidade
    };

    get valor(): number {
        return this._valor
    };

    get volume(): number {
        return this._quantidade * this._valor
    };
};