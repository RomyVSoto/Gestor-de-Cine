$(document).ready(function () {
    $(".delete-genre").on("click", function (e) {
      e.preventDefault();
  
      if (confirm("Estás seguro de eliminar este genero?")) {
        $(this).closest(".form-delete").submit();
      }
    });
  });
  