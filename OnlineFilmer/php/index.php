<?php
session_start();
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--==Title=====================-->
    <title>Log In</title>

    <!--Stylesheet(CSS)=============-->
    <link rel="stylesheet" href="/OnlineFilmer/css/style.css">

    <!-- Include jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    <!--==Fav-icon==================-->
    <link rel="shortcut icon" href="C:\Users\steli\OneDrive\Έγγραφα\Lightshot\Screenshot_117.png" />

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

        <!--logo----------------->
        <a href="home.php" class="logo">
            Online<span>Filmer</span>
        </a>
    </div>
    <!--end-of-navigation-------->

    <div class="container-login">
        <div class="box form-box">
            <?php
            include("config.php");
            if (isset($_POST['submit'])) {
                $email = mysqli_real_escape_string($con, $_POST['email']);
                $password = mysqli_real_escape_string($con, $_POST['password']);

                $result = mysqli_query($con, "SELECT * FROM users WHERE Email='$email' AND Password='$password' ") or die("Select Error");
                $row = mysqli_fetch_assoc($result);

                if (is_array($row) && !empty($row)) {
                    $_SESSION['valid'] = $row['Email'];
                    $_SESSION['username'] = $row['Username'];
                    $_SESSION['age'] = $row['Age'];
                    $_SESSION['id'] = $row['Id'];
                    header("Location: home.php");
                    exit(); // Make sure to exit after a header redirect
                } else {
                    echo "<div class='message'>
                        <p>Wrong Email or Password</p>
                        </div> <br>";
                    echo "<a href='index.php'><button class='btn'>Go Back</button>";
                }
            }
            ?>

            <header>Login</header>
            <form action="" method="post">
                <div class="field input">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" required>
                </div>

                <div class="field input">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" required>
                </div>

                <div class="field">
                    <input type="submit" class="btn" name="submit" value="Login" required>
                </div>

                <div class="links">
                    Don't have an account? <a href="register.php">Sign Up</a>
                </div>
            </form>
        </div>
    </div>

</body>

</html>
