$(document).ready(function() {
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })

    $('#CEP').mask('00000-000', {
        placeholder: '00000-000'
    })
    
    $('#telefone').mask('(00)00000-0000', {
        placeholder: '(00)00000-0000'
    })
    
    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: false
            },
            CEP: {
                required: true
            }
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(event, validator) {
            let incorrectFields = validator.numberOfInvalids();
            if(incorrectFields) {
                alert(`There ${incorrectFields} incorrect fields`)
            }
        }
    })
})
