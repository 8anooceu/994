// Função para carregar PDFs
function loadPDFs() {
    const pdfInputs = [document.getElementById('pdf1'), document.getElementById('pdf2')];
    const pdfLinks = document.getElementById('pdfLinks');

    pdfInputs.forEach(input => {
        input.addEventListener('change', function () {
            const file = this.files[0];
            if (file) {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(file);
                link.target = "_blank";
                link.textContent = file.name;
                pdfLinks.appendChild(link);
            }
        });
    });
}

// Carregar PDFs quando o conteúdo estiver pronto
document.addEventListener('DOMContentLoaded', loadPDFs);