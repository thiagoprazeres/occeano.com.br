<?php
if(isset( $_POST['nome']))
	$nome = $_POST['nome'];
if(isset( $_POST['email']))
	$email = $_POST['email'];
if(isset( $_POST['telefone']))
	$telefone = $_POST['telefone'];
if(isset( $_POST['assunto']))
	$assunto = $_POST['assunto'];

$subject = "$nome tem interesse em $assunto";
$content="De: $nome \nE-mail: $email \nTelefone: $telefone \nInteresse: $assunto";
$recipient = "tom@occeano.com.br";
//$recipient = "thiagoprazeres@gmail.com";
//$recipient = "analista1@occeano.com.br";
$mailheader = "From: $email \r\n";
//echo "$recipient, $assunto, $content, $mailheader";
//echo "\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
echo "E-mail enviado!";