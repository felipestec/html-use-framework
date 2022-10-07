function requestOfServer(){

    $.ajax({
        type: 'post',
        url: "http://localhost:8000/New-hello-world?info=OlaMundo"
    }).done(function (data) {
        document.getElementById('developer').innerHTML = data.name
        document.getElementById('version').innerHTML = data.version
        document.getElementById('value-of-variable').innerHTML = data.value_of_variable_info
        document.getElementById('company-site').innerHTML = data.web_site_company

        $("#show-values").css('display','block')
    });

   }
   function submitDataOfUser(){
        const nameOfUser = $("#name").val()
        const lastNameOfUser = $("#lastname").val()
        const ageOfUser = $("#age").val()
        $.ajax({
            "url": "http://localhost:8000/insert-data",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json, charset=UTF-8"
            },
            "data": JSON.stringify({
                name:nameOfUser,
                last_name:lastNameOfUser,
                age:ageOfUser
            })
          }).done(function (response) {
            console.log(response);
              
            if(response.success){
                $("#sucess-record-msg").css("display","block");

                $("#name").val('')
                $("#lastname").val('')
                $("#age").val('')
                
            }else{
              let errorMsg;
              let errorWidth = '350px'

              if(response.missingAttribute === 'name'){
                errorMsg = 'O campo de nome esta ausente, pode preencher?'
                errorWidth = '415px'
              }

              if(response.missingAttribute === 'last_name'){
                errorMsg = 'O campo de sobrenome esta ausente, pode preencher?'
                errorWidth = '415px'
              }

              if(response.missingAttribute === 'age'){
                errorMsg = 'O campo de idade esta ausente, pode preencher?'
                errorWidth = '415px'
              }

              $("#error-record-msg").css("display","block");
              $("#content-error-record-msg").html(errorMsg);
              $("#error-record-msg").css('width',errorWidth);
            }
           
          });

    }

    function closeSuccessMsg(){
          
          $(".sucess-record").css("display", "none");
    }

    function closeErrorMsg(){
          
      $(".error-record").css("display", "none");
}
