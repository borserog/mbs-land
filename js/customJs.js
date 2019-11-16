window.onload=function(){
    $(document).ready(function(){
        $(this).scrollTop(0);
    });
    $("#cpfCnpj").keydown(function(){
        try {
            $("#cpfCnpj").unmask();
        } catch (e) {}

        var tamanho = $("#cpfCnpj").val().length;

        if(tamanho < 11){
            $("#cpfCnpj").mask("999.999.999-99");
        } else if(tamanho >= 11){
            $("#cpfCnpj").mask("99.999.999/9999-99");
        }

        // ajustando foco
        var elem = this;
        setTimeout(function(){
            // mudo a posi��o do seletor
            elem.selectionStart = elem.selectionEnd = 10000;
        }, 0);
        // reaplico o valor para mudar o foco
        var currentValue = $(this).val();
        $(this).val('');
        $(this).val(currentValue);
    });

    $('#telefone')
        .mask("(99) 99999-9999")
        .live('focusout', function (event) {
            var target, phone, element;
            target = (event.currentTarget) ? event.currentTarget : event.srcElement;
            phone = target.value.replace(/\D/g, '');
            element = $(target);
            element.unmask();
            if(phone.length < 10) {
                element.mask("(99) 9999-9999");
            } else {
                element.mask("(99) 99999-9999");
            }
        });
};