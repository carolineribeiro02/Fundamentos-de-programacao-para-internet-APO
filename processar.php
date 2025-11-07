<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nome = $_POST['nome'];
    $dataNascimento = $_POST['dataNascimento'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $cargo = $_POST['cargo']; 
    $empresa = $_POST['empresa']; 
    
    $dataNascimento = new DateTime($dataNascimento);
    $hoje = new DateTime();
    $idade = $hoje->diff($dataNascimento)->y;

    echo "<h1>Currículo de $nome</h1>";
    echo "<p><strong>Idade:</strong> $idade anos</p>";
    echo "<p><strong>Telefone:</strong> $telefone</p>";
    echo "<p><strong>Email:</strong> $email</p>";

    echo "<h2>Experiência Profissional</h2>";
    foreach ($cargo as $index => $c) {
        echo "<p><strong>Cargo:</strong> $c <br><strong>Empresa:</strong> " . $empresa[$index] . "</p>";
    }
}
?>

