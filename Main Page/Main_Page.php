<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <link rel="stylesheet" href="MainPage.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />

</head>
<body>

  <section>
    <header>
      <a href="#" class="Logo">3D Book Reader</a>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="http://localhost/3dbookshelf/Login%20&%20Registration/login.php">Account</a></li>
        
      </ul>
    </header>
  </section>
  <section>
    <div class="Banner">
     <img src="banner.jpg" alt="">
    </div> 
  </section>
    <script>
        
        let img = document.querySelector("img");
        window.addEventListener("scroll", function()
        {
          let i = 1- window.scrollY /500;
          img.style.opacity=i;           
        }) 
        window.addEventListener("scroll", function(){
          let header = document.querySelector("header");
          header.classList.toggle("sticky", window.scrollY>0);
        })
    </script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

    <div class="container">
   <br />
   <h2 align="center">Search Book</h2><br />
   <div class="form-group">
    <div class="input-group">
     <span class="input-group-addon">Search</span>
     <div class="Search">
     <input align="center" type="text" name="search_text" id="search_text" placeholder="What book do you want to search for?" class="form-control" />
          <ion-icon name="search-outline"></ion-icon>
        </div>
    </div>
   </div>
   <br />
   <div id="result"></div>
  </div>
</body>
</html>
<script>
$(document).ready(function(){

 load_data();

 function load_data(query)
 {
  $.ajax({
   url:"search.php",
   method:"POST",
   data:{query:query},
   success:function(data)
   {
    $('#result').html(data);
   }
  });
 }
 $('#search_text').keyup(function(){
  var search = $(this).val();
  if(search != '')
  {
   load_data(search);
  }
  else
  {
   load_data();
  }
 });
});
</script>