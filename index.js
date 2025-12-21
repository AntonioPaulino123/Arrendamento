        // Contador inicial
        const totalCasas = document.querySelectorAll('.casa-card').length;
        document.getElementById('total-casas').textContent = totalCasas;
        
        // Função para filtrar casas
        function filtrarCasas() {
            const localizacao = document.getElementById('localizacao').value.toLowerCase();
            const tipologia = document.getElementById('tipologia').value.toLowerCase();
            const precoMin = parseInt(document.getElementById('preco-min').value) || 0;
            const precoMax = parseInt(document.getElementById('preco-max').value) || 999999999;
            const palavraChave = document.getElementById('palavra-chave').value.toLowerCase();
            
            const casas = document.querySelectorAll('.casa-card');
            let casasVisiveis = 0;
            
            casas.forEach(casa => {
                const casaLocal = casa.getAttribute('data-localizacao').toLowerCase();
                const casaTipo = casa.getAttribute('data-tipologia').toLowerCase();
                const casaPreco = parseInt(casa.getAttribute('data-preco'));
                const casaTags = casa.getAttribute('data-tags').toLowerCase();
                const casaTexto = casa.textContent.toLowerCase();
                
                // Aplica filtros
                const localOk = !localizacao || casaLocal.includes(localizacao);
                const tipoOk = !tipologia || casaTipo.includes(tipologia);
                const precoOk = casaPreco >= precoMin && casaPreco <= precoMax;
                const palavraOk = !palavraChave || 
                                  casaTexto.includes(palavraChave) || 
                                  casaTags.includes(palavraChave);
                
                // Mostra ou esconde
                if (localOk && tipoOk && precoOk && palavraOk) {
                    casa.style.display = 'block';
                    casasVisiveis++;
                } else {
                    casa.style.display = 'none';
                }
            });
            
            // Atualiza contador
            document.getElementById('casas-visiveis').textContent = casasVisiveis;
            
            // Mensagem se não encontrar
            if (casasVisiveis === 0) {
                alert("😕 Nenhuma casa encontrada com esses critérios.\n\n" +
                      "Tente:\n• Ampliar a faixa de preço\n• Escolher outra localização\n• Limpar os filtros");
            }
        }
        
        // Função para limpar filtros
        function limparFiltros() {
            document.getElementById('localizacao').value = '';
            document.getElementById('tipologia').value = '';
            document.getElementById('preco-min').value = '';
            document.getElementById('preco-max').value = '';
            document.getElementById('palavra-chave').value = '';
            
            // Mostra todas as casas
            const casas = document.querySelectorAll('.casa-card');
            casas.forEach(casa => casa.style.display = 'block');
            
            // Atualiza contador
            document.getElementById('casas-visiveis').textContent = totalCasas;
        }
        
        // Filtra ao pressionar Enter no campo de palavra-chave
        document.getElementById('palavra-chave').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                filtrarCasas();
            }
        });
