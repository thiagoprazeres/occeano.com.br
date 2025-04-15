
    //$('#modalSubscriptionForm').modal('show')
    $('#modalSubscriptionForm').on('show.bs.modal', function(event) {
      $("#acesso-conteudo, #avaliacao-gratis").show();
      $('#status').text("");
      var button = $(event.relatedTarget); // Botão que acionou o modal
      var recipient = button.data('whatever'); // Extrai informação dos atributos data-*
      // Se necessário, você pode iniciar uma requisição AJAX aqui e, então, fazer a atualização em um callback.
      // Atualiza o conteúdo do modal. Nós vamos usar jQuery, aqui. No entanto, você poderia usar uma biblioteca de data binding ou outros métodos.
      $('input#assunto').val(recipient);
      var modal = $(this);
      modal.find('.modal-title').text(recipient);
      //console.log(recipient);
      switch (recipient){

        case 'BI Inteligência de negócios':
          $("#acesso-conteudo").hide();
          break;
        case 'Inteligência Jurídica':
          $("#acesso-conteudo").hide();
        case 'Tecnologia Financeira':
          $("#acesso-conteudo").hide();
        case 'TV Corporativa':
          $("#acesso-conteudo").hide();
          break;

        case 'Transformação digital':
          $("#avaliacao-gratis").hide();
          break;
        case 'Monitoria e Segurança dos Dados':
          $("#avaliacao-gratis").hide();
          break;
        case 'Tecnologia para a água':
          $("#avaliacao-gratis").hide();
          break;

      }
    });

    $('#modalSubscriptionForm').on('hidden.bs.modal', function(event) {
      alert('Nossa equipe comercial entrará em contato com você em breve.');
    });

    function envia() {
      $('#status').text("Enviando...");
      formData = {
        'nome': $('input#nome').val(),
        'email': $('input#email').val(),
        'telefone': $('input#telefone').val(),
        'assunto': $('input#assunto').val()
      };
      $.ajax({
        url: "lead.php",
        type: "POST",
        data: formData,
        success: function(data, textStatus, jqXHR) {
          console.log('data: ' + data);
          console.log('textStatus: ' + textStatus);
          //console.log(jqXHR);
          $('#status').text(data.message);
          if (textStatus == 'success'){ //If mail was sent successfully, reset the form.
            var redirecionar = $('input#assunto').val();
            //$('#contact-form').closest('form').find("input[type=text], textarea").val("");
          }
          $('#modalSubscriptionForm').modal('hide');
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(jqXHR, textStatus, errorThrown);
          $('#status').text('Ocorreu um erro, tente novamente.');
          //$('#modalSubscriptionForm').modal('hide');
        }
      });
      return false;
    }