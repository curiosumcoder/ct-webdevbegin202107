// $(document).ready(function () {
//     console.log('DOM ready!');
// });

$(function () {
  console.log('DOM ready!');

  $('main > form').on('submit', function (event) {
    event.preventDefault();
    console.log('Submiting ...');

    const filter = $('#iSearch').val();
    console.log(`Search : ${filter}`);

    if (filter !== '') {
      $('#lResults').empty().hide();
      $.getJSON(`products?productName_like=${filter}`, function (data) {
        console.log(data);

        let items = [];

        if (data.length > 0) {
          // for (const p of data) {}
          $.each(data, function (index, p) {
            // items.push(`<li>${p.productName}</li>`);
            items.push(`<li class='list-group-item'>
                        <a class='row align-items-center' data-id='${p.id}'>
                        <p class='col-8'>${p.productName}<br/>
                            <small>${p.category.categoryName}</small>
                        </p>
                        <p class='col-3'>$ ${p.unitPrice}</p>
                        <p class='col-1'><i class="bi bi-chevron-double-right"></i></p>
                    </a></li>`);
          });
          $(items.join('')).appendTo('#lResults');

          $("a[data-id]").click(function (event) {
            event.preventDefault();
            console.log(this.dataset["id"]);
            $.getJSON(`products/${this.dataset["id"]}`, function (data) {
              console.log(data);

              $('#exampleModal .modal-body').html(data.productName);

              let myModal = new bootstrap.Modal(
                document.getElementById("exampleModal")
              );
              myModal.show();
            });
          });

        } else {
          $('<p>¡No se encontraron datos!</p>').appendTo('#lResults');
        }
        $('#lResults').slideDown(600);
      });
    }
  });
});
