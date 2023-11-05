// $(document).ready(function(){
//     $('#actualizacionDatos').click(function(){
//         var id = $('#id').text();
//         var razonSocial = $('#razonSocial').text();
//         var ruc = $('#ruc').text();
//         var email = $('#email').text();
//         var telefono = $('#telefono').text();
//         var direccion = $('#direccion').text();

//         $('#idM').val(id);
//         $('#razonSocialM').val(razonSocial);
//         $('#rucM').val(ruc);
//         $('#emailM').val(email);
//         $('#telefonoM').val(telefono);
//         $('#direccionM').val(direccion);

//         $('#empModal').modal('show');

//     });
// });

function ActualizacionDatos() {
  var id = $("#id").text();
  var razonSocial = $("#razonSocial").text();
  var ruc = $("#ruc").text();
  var email = $("#email").text();
  var telefono = $("#telefono").text();
  var direccion = $("#direccion").text();

  $("#idM").val(id);
  $("#razonSocialM").val(razonSocial);
  $("#rucM").val(ruc);
  $("#emailM").val(email);
  $("#telefonoM").val(telefono);
  $("#direccionM").val(direccion);

  $("#empModal").modal("show");
}

function ActualizarDatos() {
  var id = $("#idM").val();
  var razonSocial = $("#razonSocialM").val();
  var ruc = $("#rucM").val();
  var email = $("#emailM").val();
  var telefono = $("#telefonoM").val();
  var direccion = $("#direccionM").val();
  var empresa = {
    id: id,
    razonSocial: razonSocial,
    ruc: ruc,
    telefono: telefono,
    direccion: direccion,
    email: email,
  };

  $.ajax({
    url: "/ajaxfile",
    type: "post",
    data: empresa,
    success: function (data) {
      //console.log(data)
      $("#empModal").modal("hide");
      $("#datosEmpresa").empty().append(data.htmlresponse);
    },
  });
}
