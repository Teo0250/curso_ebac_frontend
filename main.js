$(document).ready(function(){
    $('form').on('click', function(e) {
        e.preventDefault();
        const tarefa = $('#tarefas-form').val();
        const novaTarefa = document.createElement('li')
        $(`<p> ${tarefa} </p>`).appendTo(novaTarefa)
        $(novaTarefa).appendTo('ul');
        $('#tarefas-form').val('')
        $(novaTarefa).click(function(){
            $(novaTarefa).toggleClass('feito')
        })
    })  
    
})
