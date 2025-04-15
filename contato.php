<?php
if(isset( $_POST['nome']))
$nome = $_POST['nome'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['telefone']))
$telefone = $_POST['telefone'];
if(isset( $_POST['telefone']))
$telefone = $_POST['telefone'];
if(isset( $_POST['empresa']))
$empresa = $_POST['empresa'];
if(isset( $_POST['message']))
$message = $_POST['message'];

$subject = "$nome entrou em contato pelo site";
$content="De: $nome \nE-mail: $email \nTelefone: $telefone \nEmpresa: $empresa \nMensagem: $message";
$recipient = "tom@occeano.com.br";
//$recipient = "analista1@occeano.com.br";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
echo "E-mail enviado!";