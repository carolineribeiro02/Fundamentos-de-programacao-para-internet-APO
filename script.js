function aplicarTelefone(event) {
    var input = event.target;
    var value = input.value.replace(/\D/g, ''); 

    if (value.length <= 10) {
        value = value.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3'); 
    } else {
        value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3'); 
    }

    input.value = value; 
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('telefone').addEventListener('input', aplicarTelefone);
});

function calcularIdade() {
    const dataNascimento = document.getElementById("dataNascimento").value;

    if (!dataNascimento) {
        document.getElementById("idadeDisplay").innerText = ""; 
        return; 
    }

    const nascimento = new Date(dataNascimento); 
    const hoje = new Date(); 
    let idade = hoje.getFullYear() - nascimento.getFullYear(); 

    const mesAtual = hoje.getMonth();
    const mesNascimento = nascimento.getMonth();
    const diaAtual = hoje.getDate();
    const diaNascimento = nascimento.getDate();

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }

    document.getElementById("idadeDisplay").innerText = `Sua idade é: ${idade} anos`; 
}

function baixarCurriculo() {
    // Pegar os dados do formulário
    const nome = document.querySelector('input[name="nome"]').value;
    const dataNascimento = document.querySelector('input[name="dataNascimento"]').value;
    const telefone = document.querySelector('input[name="telefone"]').value;
    const email = document.querySelector('input[name="email"]').value;

    // Coletar as experiências profissionais
    const cargos = document.querySelectorAll('input[name="cargo[]"]');
    const empresas = document.querySelectorAll('input[name="empresa[]"]');

    let experiencias = '';
    cargos.forEach((cargo, index) => {
        let empresa = empresas[index] ? empresas[index].value : '';
        experiencias += `Cargo: ${cargo.value}\nEmpresa: ${empresa}\n\n`;
    });

    // Construir o conteúdo do currículo
    const curriculoTexto = `
Nome: ${nome}
Data de Nascimento: ${dataNascimento}
Telefone: ${telefone}
Email: ${email}

Experiência Profissional:
${experiencias}
    `;

    // Criar o arquivo de texto
    const blob = new Blob([curriculoTexto], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'curriculo.txt'; // Nome do arquivo
    link.click(); // Iniciar o download
}
