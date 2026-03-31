// =============================================================
// ESPAÇO PARA O ALUNO CRIAR A CLASSE "PedidoFerias"
// =============================================================

// ESCREVA SEU CÓDIGO AQUI:







// =============================================================
// TESTES AUTOMATIZADOS (NÃO MEXER)
// O código abaixo só funcionará quando a classe estiver pronta.
// =============================================================

function executarTestes() {
    console.log("🧪 Iniciando testes de estrutura...");

    try {
        // Teste 1: Validação de funcionário apto
        const pedido1 = new (globalThis as any).PedidoFerias("Ana Silva", 20, 15);
        const teste1Apto = pedido1.podeTirarFerias() === true;
        
        // Teste 2: Validação de funcionário inapto
        const pedido2 = new (globalThis as any).PedidoFerias("João Souza", 15, 8);
        const teste2Inapto = pedido2.podeTirarFerias() === false;

        // Teste 3: Verificação de Atributos e Resumo
        const temResumo = typeof pedido1.obterResumo() === "string";

        if (teste1Apto && teste2Inapto && temResumo) {
            console.log("✅ SUCESSO: Sua classe foi estruturada corretamente!");
            console.log("📋 Resumo gerado:", pedido1.obterResumo());
        } else {
            console.log("❌ ERRO: A lógica dos métodos ou atributos está incorreta.");
        }

    } catch (error) {
        console.log("⚠️ ERRO DE COMPILAÇÃO: A classe 'PedidoFerias' ainda não foi criada ou possui erros de sintaxe.");
        console.log("Dica: Verifique se o nome da classe e dos atributos estão idênticos ao enunciado.");
    }
}

executarTestes();