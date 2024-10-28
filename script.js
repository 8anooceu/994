// Função para carregar imagens
function loadImages() {
    const imageInputs = [document.getElementById('image1'), document.getElementById('image2')];
    const imagePreviews = document.getElementById('imagePreviews');

    imageInputs.forEach(input => {
        input.addEventListener('change', function () {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    imagePreviews.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        });
    });
}

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

// Carregar imagens e PDFs quando o conteúdo estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    loadImages();
    loadPDFs();
});
