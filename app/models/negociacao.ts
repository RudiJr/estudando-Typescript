export class Negociacao {
   /* The `private` keyword is used to declare a private member in a class. It restricts access to the
   member only within the class itself. In the given code, the `_data`, `_quantidade`, and `_valor`
   variables are declared as private, which means they can only be accessed within the `Negociacao`
   class. */
    private _data; 
    private _quantidade;
    private _valor;

    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    };

    get data() {
        return this._data
    };

    get quantidade() { 
        return this._quantidade
    };

    get valor(){
        return this._valor
    };

    get volume(){
        return this._quantidade * this._valor
    };
};