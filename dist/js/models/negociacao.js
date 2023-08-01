export class Negociacao {
    /* The `private` keyword is used to declare a private member in a class. It restricts access to the
    member only within the class itself. In the given code, the `_data`, `_quantidade`, and `_valor`
    variables are declared as private, which means they can only be accessed within the `Negociacao`
    class. */
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    ;
    get data() {
        return this._data;
    }
    ;
    get quantidade() {
        return this._quantidade;
    }
    ;
    get valor() {
        return this._valor;
    }
    ;
    get volume() {
        return this._quantidade * this._valor;
    }
    ;
}
;
