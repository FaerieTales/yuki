<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Castle Oblivion</title>
  <meta name="viewport" content="width=device-width, initial-scale=1"> 
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="assets/css/styles.css">
  <link rel="icon" type="image/jpeg" href="img/kairiicon.jpg" />
  <meta http-equiv="refresh" content="3;url=../">
  </head>

  <body>

		<section id="pagina_c">

				<?php
					if(isset($_POST['email'])) {

						$email_subject = "Contacto desde el sitio web";

							$email_message = "Detalles del formulario de contacto:\n\n";
							$email_message .= "Nombre: " . $_POST['nombre'] . "\n";
							$email_message .= "E-mail: " . $_POST['email'] . "\n";
							$email_message .= "Telefono: " . $_POST['telefono'] . "\n";
							$email_message .= "Mensaje: " . $_POST['mensaje'] . "\n";

							$email_from = $_POST['email'];

							$headers = 'From: '.$email_from."\r\n".
							'Reply-To: '.$email_from."\r\n" .
							'X-Mailer: PHP/' . phpversion();
							@mail('blythemme@gmail.com', $email_subject, $email_message, $headers);

							echo "¡El Mensaje se ha enviado con éxito!";
					}
				?>
			</section>
  	}
	</body>
</html>