<?php
header('Content-Type: application/json');

$to      = 'info@3dkvisual.com';
$allowed = ['3dkvisual.com'];

function clean($v) {
    return htmlspecialchars(strip_tags(trim($v)), ENT_QUOTES, 'UTF-8');
}

$name    = clean($_POST['name']    ?? '');
$company = clean($_POST['company'] ?? '');
$email   = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$service = clean($_POST['service'] ?? '');
$message = clean($_POST['message'] ?? '');

if (!$name || !$email || !$message) {
    echo json_encode(['ok' => false, 'message' => 'Completá los campos requeridos.']);
    exit;
}

$subject = "Nuevo contacto web" . ($service ? " — $service" : '') . " de $name";

$body  = "Nombre:   $name\n";
$body .= "Empresa:  " . ($company ?: '—') . "\n";
$body .= "Email:    $email\n";
$body .= "Servicio: " . ($service ?: '—') . "\n\n";
$body .= "Mensaje:\n$message\n";

$headers  = "From: web@3dkvisual.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$ok = mail($to, $subject, $body, $headers);

if ($ok) {
    echo json_encode(['ok' => true, 'message' => '¡Mensaje enviado! Te respondemos a la brevedad.']);
} else {
    echo json_encode(['ok' => false, 'message' => 'No se pudo enviar. Escribinos a info@3dkvisual.com']);
}
