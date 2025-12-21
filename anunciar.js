        function escolherPlano(plano) {
            document.getElementById('planoEscolhido').value = plano;
            document.getElementById('formCadastro').style.display = 'block';
            window.scrollTo({
                top: document.getElementById('formCadastro').offsetTop,
                behavior: 'smooth'
            });
            
            // Atualiza título do plano no form
            const planoTitulo = {
                individual: 'Individual (800 Kz/mês)',
                imobiliaria: 'Imobiliária (3.000 Kz/mês)',
                premium: 'Premium (7.000 Kz/mês)'
            };
            alert("Ótima escolha! Plano ${planoTitulo[plano]} selecionado.");
        }
        
        // Envia para Google Sheets
        document.getElementById('formVendedor').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio
            const formData = new FormData(this);
            alert('Cadastro enviado! Em breve entraremos em contacto via WhatsApp com instruções de pagamento.');
            
            // Aqui vai o fetch para Google Sheets na versão real
            // fetch(this.action, { method: 'POST', body: formData });
            
            this.reset();
            document.getElementById('formCadastro').style.display = 'none';
        });