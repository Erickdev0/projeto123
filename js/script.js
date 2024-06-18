document.getElementById('cadastro-button').addEventListener('click', function () {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const curso = document.getElementById('curso').value;
    const modulo = document.getElementById('modulo').value;
    const github = document.getElementById('github').value;
    const linkedin = document.getElementById('linkedin').value;

    const aluno = {
        nome,
        email,
        whatsapp,
        curso,
        modulo,
        github,
        linkedin
    };

    localStorage.setItem('aluno', JSON.stringify(aluno));

    showModal(aluno);
});

document.querySelector('.close-button').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('print-button').addEventListener('click', function () {
    window.location.href = 'ficha.html';
});

function showModal(aluno) {
    document.getElementById('ficha-conteudo').innerHTML = `
        <p><strong>Nome:</strong> ${aluno.nome}</p>
        <p><strong>Email:</strong> ${aluno.email}</p>
        <p><strong>Whatsapp:</strong> ${aluno.whatsapp}</p>
        <p><strong>Curso:</strong> ${aluno.curso}</p>
        <p><strong>Módulo:</strong> ${aluno.modulo}</p>
        <p><strong>Github:</strong> ${aluno.github}</p>
        <p><strong>LinkedIn:</strong> ${aluno.linkedin}</p>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${aluno.linkedin}" alt="QR Code">
    `;
    document.getElementById('modal').style.display = 'flex';
}
