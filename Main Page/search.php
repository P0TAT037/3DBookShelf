<?php
include('connection.php');
$output = '';
if(isset($_POST["query"]))
{
 $search = mysqli_real_escape_string($cn, $_POST["query"]);
 $query = "
  SELECT * FROM books 
  WHERE title LIKE '%".$search."%'
  OR author LIKE '%".$search."%' 
  OR category LIKE '%".$search."%' 
 ";
}
else
{
 $query = "
 SELECT * FROM books ORDER BY id
 ";
}
$result = mysqli_query($cn, $query);
if(mysqli_num_rows($result) > 0)
{
 $output .= '
  <div class="table-responsive">
   <table class="table table bordered">
    <tr>
     <th>title</th>
     <th>author</th>
     <th>category</th>
    </tr>
 ';
 while($row = mysqli_fetch_array($result))
 {
  $output .= '
   <tr>
    <td>'.$row["title"].'</td>
    <td>'.$row["author"].'</td>
    <td>'.$row["category"].'</td>
   </tr>
  ';
 }
 echo $output;
}
else
{
 echo 'Data Not Found';
}
?>
