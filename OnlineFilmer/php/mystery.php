<?php 
  session_start();

  include("config.php");
  if(!isset($_SESSION['valid'])){
   header("Location: index.php");
  }
?>
<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">


<!--==Title=====================-->
<title>Online Filmer</title>

<!--Stylesheet(CSS)=============-->
<link rel="stylesheet" href="/OnlineFilmer/css/style.css">

<!-- Include jQuery -->
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

<!-- Link the external JavaScript file -->
<script src="/OnlineFilmer/js/mystery.js"></script>
<script src="/OnlineFilmer/js/mystery.js"></script>

<!--==Fav-icon==================-->
<link rel="shortcut icon" href="/OnlineFilmer/img/banner.jpg"/>

<!--==Import-poppins-font=======-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

<!--==Import-lobster-font=======-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lobster&family=Monoton&display=swap" rel="stylesheet">


<!--==Font-For-Search===========-->
<script src="https://kit.fontawesome.com/c8e4d183c2.js" crossorigin="anonymous"></script>
</head>

<body>

    <!--==Navigation===============================-->
    <div nav class="navigation">

        <!--menu-button---------->
        <input type="checkbox" class="menu-btn" id="menu-btn">
        <label for="menu-btn" class="menu-icon">
          <span class="nav-icon"></span>
        </label>

        <!--logo----------------->
        <a href="home.php" class="logo">
          Online<span>Filmer</span>
        </a>

        <!--menu----------------->
        <ul class="menu">
          <li><a href="action.php">Action</a></li>
          <li><a href="adventure.php">Adventure</a></li>
          <li><a href="animation.php">Animation</a></li>
          <li><a href="comedy.php">Comedy</a></li>
          <li><a href="crime.php">Crime</a></li>
          <li><a href="drama.php">Drama</a></li>
          <li><a href="family.php">Family</a></li>
          <li><a href="mystery.php">Mystery</a></li> 
          <li><a href="romance.php">Romance</a></li>
          <li><a href="science_fiction.php">Sci-Fi</a></li>
          <li><a href="thriller.php">Thriller</a></li>
          <li><a href="western.php">Western</a></li>
        
        </ul>

        <!--search---------------->
        <form action="#" class="search-box" id="search-form">
          <input type="text" name="search" placeholder="Search Movie" class="search-input" required/>
          <!--button-->
          <button type="submit">
              <i class="fas fa-search"></i>
          </button>
          <!-- Search results dropdown -->
          <ul class="search-results-dropdown"></ul>
        </form>

    <!-- "Account" button -->
      
    <?php
     $id = $_SESSION['id'];
     $query = mysqli_query($con,"SELECT*FROM users WHERE Id=$id");
         
    if ($query && mysqli_num_rows($query) > 0) {
      $result = mysqli_fetch_assoc($query);
      $res_Uname = isset($result['Username']) ? $result['Username'] : '';
      $res_Email = isset($result['Email']) ? $result['Email'] : '';
      $res_Age = isset($result['Age']) ? $result['Age'] : '';
      $res_id = isset($result['Id']) ? $result['Id'] : '';
      } else {
      echo "Error retrieving user data.";
      }
     
    ?>
             
    <a href="log_out.php" class="username-link"> <?php echo $res_Uname ?> </a>

  </div>
    <!--end-of-navigation-------->

<!-- Unified Container for Movies and TV Series -->
<div class="container">
  <div class="content-container">

    <!-- Container for Mystery Movies -->
    <div class="mystery-list-container">
      <h1 class="mystery-list-title">Mystery</h1>
      <div class="mystery-list-wrapper">
        <!-- Movie list container -->
        <div class="mystery-list"></div>
      </div>
    </div>

  </div>

  
</div>

</body>

</html>