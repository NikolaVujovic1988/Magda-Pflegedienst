<?php

########### CONFIG ###############

$recipient = 'info@ambulante-pflegedienst-magda.de';
$redirect = 'index.html';

########### CONFIG END ###########

###############################
#
#        DON'T CHANGE ANYTHING FROM HERE!
#
#        Ab hier nichts mehr ändern!
#
###############################

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $name = $_POST['name'];
        $message = $_POST['message'];
        $email = $_POST['email']; // Direktno koristimo email iz POST-a
        $subject = "Contact From $name";
        $headers = "From: $email"; // Koristi email u From zaglavlju

        mail($recipient, $subject, $message, $email, $headers);
        header("Location: " . $redirect);

        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
?>
