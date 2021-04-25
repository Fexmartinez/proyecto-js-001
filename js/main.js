$(document).ready(function(){

    //Slider
    if (window.location.href.indexOf('index')> -1){

    $('.Galeria').bxSlider({
      mode: 'fade',
      captions: false,
      slideWidth: 1200,
      responisve: true,
      pager: true
    });
   }

     //Posts
      if (window.location.href.indexOf('index')> -1){
         var posts = [
               {
                  title: 'Prueba de Titulo 1',
                  date: 'Publicado el dia ' + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet tristique cursus. Aliquam eget orci urna. Cras convallis velit quam, vitae ornare ex egestas a. Duis odio sapien, dignissim a velit vitae, aliquam mattis mi. Donec lacinia nisl at accumsan elementum. Suspendisse at diam dui. Duis tristique purus libero, in fringilla magna interdum at. Integer non dolor dolor. Pellentesque accumsan semper condimentum. Ut euismod lacus vel lacus finibus, ac feugiat sem euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum nec facilisis magna.'
               },
               {
                  title: 'Prueba de Titulo 2',
                  date: 'Publicado el dia ' + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet tristique cursus. Aliquam eget orci urna. Cras convallis velit quam, vitae ornare ex egestas a. Duis odio sapien, dignissim a velit vitae, aliquam mattis mi. Donec lacinia nisl at accumsan elementum. Suspendisse at diam dui. Duis tristique purus libero, in fringilla magna interdum at. Integer non dolor dolor. Pellentesque accumsan semper condimentum. Ut euismod lacus vel lacus finibus, ac feugiat sem euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum nec facilisis magna.'
               },
               {
                  title: 'Prueba de Titulo 3',
                  date: 'Publicado el dia ' + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet tristique cursus. Aliquam eget orci urna. Cras convallis velit quam, vitae ornare ex egestas a. Duis odio sapien, dignissim a velit vitae, aliquam mattis mi. Donec lacinia nisl at accumsan elementum. Suspendisse at diam dui. Duis tristique purus libero, in fringilla magna interdum at. Integer non dolor dolor. Pellentesque accumsan semper condimentum. Ut euismod lacus vel lacus finibus, ac feugiat sem euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum nec facilisis magna.'
               },
               {
                  title: 'Prueba de Titulo 4',
                  date: 'Publicado el dia ' + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet tristique cursus. Aliquam eget orci urna. Cras convallis velit quam, vitae ornare ex egestas a. Duis odio sapien, dignissim a velit vitae, aliquam mattis mi. Donec lacinia nisl at accumsan elementum. Suspendisse at diam dui. Duis tristique purus libero, in fringilla magna interdum at. Integer non dolor dolor. Pellentesque accumsan semper condimentum. Ut euismod lacus vel lacus finibus, ac feugiat sem euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum nec facilisis magna.'
               },
               {
                  title: 'Prueba de Titulo 5',
                  date: 'Publicado el dia ' + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet tristique cursus. Aliquam eget orci urna. Cras convallis velit quam, vitae ornare ex egestas a. Duis odio sapien, dignissim a velit vitae, aliquam mattis mi. Donec lacinia nisl at accumsan elementum. Suspendisse at diam dui. Duis tristique purus libero, in fringilla magna interdum at. Integer non dolor dolor. Pellentesque accumsan semper condimentum. Ut euismod lacus vel lacus finibus, ac feugiat sem euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum nec facilisis magna.'
               },
               {
                  title: 'Prueba de Titulo 6',
                  date: 'Publicado el dia ' + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet tristique cursus. Aliquam eget orci urna. Cras convallis velit quam, vitae ornare ex egestas a. Duis odio sapien, dignissim a velit vitae, aliquam mattis mi. Donec lacinia nisl at accumsan elementum. Suspendisse at diam dui. Duis tristique purus libero, in fringilla magna interdum at. Integer non dolor dolor. Pellentesque accumsan semper condimentum. Ut euismod lacus vel lacus finibus, ac feugiat sem euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum nec facilisis magna.'
               },
         ];

         posts.forEach((item, index) => {
            var post = `
            <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>
                              ${item.content}
                        </p>
                        <a href="#" class="buttom-more">Leer mas</a>
                  </article>
                  `;

                  $("#posts").append(post);
         });
      }

     // Selector de tema
     var theme = $("#theme");

     $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
     });

     $("#to-red").click(function(){
      theme.attr("href", "css/red.css");
     });

     $("#to-blue").click(function(){
      theme.attr("href", "css/blue.css");
     });

     // Scroll arriba de la web
     $('subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
           scrollTop: 0
        },500);
        return false;
     });

     // Login falso

     $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);

     });

     var form_name = localStorage.getItem("form_name");

     if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
        about_parrafo.append("<a herf='#' id='logout'>Cerrar Sesion</a>");

        $("#login").hide();

        $("#logout").click(function(){
           localStorage.clear();
           location.reload();
        });
     }

     if (window.location.href.indexOf('about')> -1){
      $("#acordeon").accordion();
     }

  });
