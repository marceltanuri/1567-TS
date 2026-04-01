export class Funcionario{

    private static readonly PERCENTUAL_BONUS = 0.2;
    private static readonly META_MINIMA_PARA_BONUS = 80;
    private static readonly META_MINIMA = 0;
    private static readonly META_MAXIMA = 100;
    
    private nome: string;
    private salario: number;
    private meta: number;

    constructor(nome: string, salario: number, meta: number){
        this.nome = nome;

        if(salario < 0){
            throw new Error("Salário inválido");
        }

        this.salario = salario;
        
        if(meta < Funcionario.META_MINIMA || meta > Funcionario.META_MAXIMA){
            throw new Error("Meta inválida");
        }

        this.meta = meta;
    }

    private temDireitoAoBonus(): boolean{
        return this.meta >= Funcionario.META_MINIMA_PARA_BONUS;
    }

    calcularBonus(): number{
        if(this.temDireitoAoBonus()){
            return this.salario * Funcionario.PERCENTUAL_BONUS;
        }

        return 0;
    }

    calculaValorTotal(): number{
        return this.salario + this.calcularBonus();
    }

    getNome(): string{
        return this.nome;
    }

    getSalario(): number{
        return this.salario;
    }

    getMeta(): number{
        return this.meta;
    }
}



