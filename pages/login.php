<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title>Book It! - Login</title>
</head>
<body>
    <a id="arrow__back" href="../index.html">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
    </a>
    <div class="login">
		<div class="login-screen">
			<div class="app-title">
				<h1>Login</h1>
			</div>
			<form class="login-form">
				<div>
					<div class="control-group">
						<input name="user_name" type="text" class="login-field" value="" placeholder="username" id="login-name" required>
						<label class="login-field-icon fui-user" for="login-name"></label>
					</div>		
					<div class="control-group">
						<input name="user_password" type="password" class="login-field" value="" placeholder="password" id="login-pass" required>
						<label class="login-field-icon fui-lock" for="login-pass"></label>
					</div>
				</div>
				<input name="login" class="btn btn-primary btn-large btn-block login-btn" type="submit" value="Login">
				<a class="login-link" href="#">Register</a>
			</form>
			<?php
				include("../php/login.php");
			?>
		</div>
	</div>

	<!-- js -->
	<script src="../scripts/login.js"></script>
</body>
</html>