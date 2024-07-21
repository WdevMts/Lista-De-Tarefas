document.addEventListener('DOMContentLoaded', function() {
    let Botao = document.getElementById('btt1');
    let Input = document.getElementById('ctxt1');
    let Tarefas = document.getElementById('tarefas');

    Botao.addEventListener('click', function() {
        if (Input.value !== '') {
            let tarefa = document.createElement('p');
            tarefa.innerText = '- ' + Input.value;
            Tarefas.appendChild(tarefa);
            Input.value = '';
            let Marcado = false;
            tarefa.addEventListener('click', function() {
                if (Marcado === false) {
                    tarefa.style.textDecoration = 'line-through';
                    Marcado = true;
                } else {
                    tarefa.style.textDecoration = '';
                    Marcado = false;
                }
            });
            tarefa.addEventListener('dblclick', function() {
                Tarefas.removeChild(tarefa);
            });
        }
    });
});

