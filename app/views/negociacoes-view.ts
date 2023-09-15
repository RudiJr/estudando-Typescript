export class NegociacoesView {

    private elemento: HTMLElement;
    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    };

    template(): string {  // declare template of the view
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `;
    };

    update(): void { // render the template in the element catched by constructor 
        this.elemento.innerHTML = this.template();
    };
};