<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $telefono = filter_input(INPUT_POST, 'telefono', FILTER_SANITIZE_STRING);

    if ($telefono) {
        $archivo = 'numeros_telefonicos.txt'; // Archivo donde se guardan los números
        $linea = $telefono . PHP_EOL;
        file_put_contents($archivo, $linea, FILE_APPEND);

        // Mensaje de éxito
        echo "<script>alert('¡Gracias! El cajero te contactará pronto.');</script>";
        echo "<script>window.location.href = 'https://wa.link/uwddc5';</script>"; // Redirige a WhatsApp
        exit;
    } else {
        echo "<script>alert('Hubo un error. Intenta de nuevo.');</script>";
        echo "<script>window.location.href = '/';</script>"; // Regresa al formulario
        exit;
    }
}
?>
