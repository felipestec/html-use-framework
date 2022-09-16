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
        const lasNameOfUser = $("#lastname").val()
        const ageOfUser = $("#age").val()

        console.log(nameOfUser)
        console.log(lasNameOfUser)
        console.log(ageOfUser)
    
   }