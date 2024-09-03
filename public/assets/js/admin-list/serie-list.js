$(document).ready(function () {
  $(".delete-serie").on("click", function (e) {
    e.preventDefault();

    if (confirm("Estás seguro de eliminar esta serie?")) {
      $(this).closest(".form-delete").submit();
    }
  });
});
