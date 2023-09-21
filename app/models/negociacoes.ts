import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    };

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }; /* The `ReadonlyArray` type in TypeScript is used to create an immutable array. It means
    that once the array is created, its elements cannot be modified or added. It provides
    read-only access to the array's elements, preventing any modifications to the array
    itself. */
}; 