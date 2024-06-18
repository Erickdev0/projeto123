window.onload = function () {
    const aluno = JSON.parse(localStorage.getItem('aluno'));
    if (aluno) {
        document.getElementById('ficha-detalhes').innerHTML = `
            <p><strong>Nome:</strong> ${aluno.nome}</p>
            <p><strong>Email:</strong> ${aluno.email}</p>
            <p><strong>Whatsapp:</strong> ${aluno.whatsapp}</p>
            <p><strong>Curso:</strong> ${aluno.curso}</p>
            <p><strong>Módulo:</strong> ${aluno.modulo}</p>
            <p><strong>Github:</strong> ${aluno.github}</p>
            <p><strong>LinkedIn:</strong> ${aluno.linkedin}</p>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${aluno.linkedin}" alt="QR Code">
        `;
    }
};
