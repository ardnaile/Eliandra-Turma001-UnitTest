const AnaliseDeDados = require("../src/analiseDeDados");

describe("Classe AnaliseDeDados - Método adicionarDados", () => {
    let analiseDeDados;

    beforeEach(() => {
        analiseDeDados = new AnaliseDeDados();
        analiseDeDados.dados = [1, 2, 3, 4, 5];
    })

    test("Adicionar novos dados ao array", async () => {
        const novosDados = [6, 7, 8];

        analiseDeDados.adicionarDados(novosDados);

        expect(analiseDeDados.dados).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    })
})

describe("Classe AnaliseDeDados - Método limparDados", () => {
    let analiseDeDados;

    beforeEach(() => {
        analiseDeDados = new AnaliseDeDados();
        analiseDeDados.dados = [1, 2, 3, 4, 5];
    })

    test("Limpar os dados do array", async () => {
        analiseDeDados.limparDados();

        expect(analiseDeDados.dados).toEqual([]);
    })
})

describe("Classe AnaliseDeDados - Método ordenarDados", () => {
    let analiseDeDados;

    beforeEach(() => {
        analiseDeDados = new AnaliseDeDados();
        analiseDeDados.dados = [1, 4, 3, 2, 5];
    })

    test("Retornar os dados do array ordenados", async () => {
        const arrayOrdenado = [1, 2, 3, 4, 5]

        expect(analiseDeDados.ordenarDados()).toEqual(arrayOrdenado);
    })
})

describe("Classe AnaliseDeDados - Método calcularMedia", () => {
    let analiseDeDados;

    beforeEach(() => {
        analiseDeDados = new AnaliseDeDados();
        analiseDeDados.dados = [1, 2, 3, 4, 5];
    })

    test("Retornar a média dos valores contidos no array", () => {
        expect(analiseDeDados.calcularMedia()).toEqual(3);
    })
})

describe("Classe AnaliseDeDados - Método calcularMediana", () => {
    let analiseDeDados;

    beforeEach(() => {
        analiseDeDados = new AnaliseDeDados();
        analiseDeDados.dados = [1, 2, 3, 4, 5];
    })

    test("Retornar a mediana dos valores contidos no array", () => {
        expect(analiseDeDados.calcularMediana()).toEqual(3);
    })
})

describe("Classe AnaliseDeDados - Método calcularModa", () => {
    let analiseDeDados;

    beforeEach(() => {
        analiseDeDados = new AnaliseDeDados();
        analiseDeDados.dados = [1, 1, 3, 4, 5];
    })

    test("Retornar a moda dos valores contidos no array", () => {
        expect(analiseDeDados.calcularModa()).toEqual([1]);
    })
})

describe("Classe AnaliseDeDados - Método calcularVariancia", () => {
    let analiseDeDados;

    beforeEach(() => {
        analiseDeDados = new AnaliseDeDados();
        analiseDeDados.dados = [1, 2, 3, 4, 5];
    })

    test("Retornar a variância dos valores contidos no array", () => {
        expect(analiseDeDados.calcularVariancia()).toEqual(2);
    })
})

describe("Classe AnaliseDeDados - Método calcularDesvioPadrao", () => {
    let analiseDeDados;

    beforeEach(() => {
        analiseDeDados = new AnaliseDeDados();
        analiseDeDados.dados = [1, 2, 3, 4, 5];
    })

    test("Retornar o desvio padrão dos valores contidos no array", () => {
        const variancia = analiseDeDados.calcularVariancia();

        const desvioPadrao = Math.sqrt(variancia)
        expect(analiseDeDados.calcularDesvioPadrao()).toEqual(desvioPadrao);
    })
})

describe("Classe AnaliseDeDados - Método encontrarMinimo", () => {
    let analiseDeDados;

    beforeEach(() => {
        analiseDeDados = new AnaliseDeDados();
        analiseDeDados.dados = [1, 2, 3, 4, 5];
    })

    test("Retornar o mínimo dos valores contidos no array", () => {
        expect(analiseDeDados.encontrarMinimo()).toEqual(1);
    })
})

describe("Classe AnaliseDeDados - Método encontrarMaximo", () => {
    let analiseDeDados;

    beforeEach(() => {
        analiseDeDados = new AnaliseDeDados();
        analiseDeDados.dados = [1, 2, 3, 4, 5];
    })

    test("Retornar o máximo dos valores contidos no array", () => {
        expect(analiseDeDados.encontrarMaximo()).toEqual(5);
    })
})

describe("Classe AnaliseDeDados - Método normalizarDados", () => {
    let analiseDeDados;

    beforeEach(() => {
        analiseDeDados = new AnaliseDeDados();
        analiseDeDados.dados = [1, 2, 3, 4, 5];
    })

    test("Normaliza os valores contidos no array para o intervalo 0 a 1", () => {
        expect(analiseDeDados.normalizarDados()).toEqual([0, 0.25, 0.5, 0.75, 1]);
    })
})

describe("Classe AnaliseDeDados - Método calcularSoma", () => {
    let analiseDeDados;

    beforeEach(() => {
        analiseDeDados = new AnaliseDeDados();
        analiseDeDados.dados = [1, 2, 3, 4, 5];
    })

    test("Retornar a soma dos valores contidos no array", () => {
        expect(analiseDeDados.calcularSoma()).toEqual(15);
    })
})

describe("Classe AnaliseDeDados - Método calcularProduto", () => {
    let analiseDeDados;

    beforeEach(() => {
        analiseDeDados = new AnaliseDeDados();
        analiseDeDados.dados = [1, 2, 3, 4, 5];
    })

    test("Retornar o produto dos valores contidos no array", () => {
        expect(analiseDeDados.calcularProduto()).toEqual(120);
    })
})

describe("Classe AnaliseDeDados - Método calcularAmplitude", () => {
    let analiseDeDados;

    beforeEach(() => {
        analiseDeDados = new AnaliseDeDados();
        analiseDeDados.dados = [1, 2, 3, 4, 5];
    })

    test("Retornar a subtração do maior valor pelo menor valor contido no array", () => {
        expect(analiseDeDados.calcularAmplitude()).toEqual(4);
    })
})

describe("Classe AnaliseDeDados - Método calcularCoeficienteVariacao", () => {
    let analiseDeDados;

    beforeEach(() => {
        analiseDeDados = new AnaliseDeDados();
        analiseDeDados.dados = [1, 2, 3, 4, 5];
    })

    test("Retornar o coeficiente de variação dos valores contidos no array", () => {
        const media = analiseDeDados.calcularMedia();
        
        const desvioPadrao = analiseDeDados.calcularDesvioPadrao();

        const coeficienteVariacao = (desvioPadrao/media) * 100

        expect(analiseDeDados.calcularCoeficienteVariacao()).toEqual(coeficienteVariacao);
    })
})

describe("Classe AnaliseDeDados - Método calcularAmplitude", () => {
    let analiseDeDados;

    beforeEach(() => {
        analiseDeDados = new AnaliseDeDados();
        analiseDeDados.dados = [1, 2, 3, 4, 5];
    })

    test("Retornar a subtração do maior valor pelo menor valor contido no array", () => {
        expect(analiseDeDados.calcularAmplitude()).toEqual(4);
    })
})

describe("Classe AnaliseDeDados - Método calcularCorrelacao", () => {
    let analiseDeDados;

    beforeEach(() => {
        analiseDeDados = new AnaliseDeDados();
        analiseDeDados.dados = [1, 2, 3, 4, 5];
    })

    test("Retornar a correlação do array com outro conjunto", () => {
        const conjunto = [1, 2, 3, 4, 5]
        expect(analiseDeDados.calcularCorrelacao(conjunto)).toEqual(0.9999999999999998);
    })
    // comentário para testar actions
})
