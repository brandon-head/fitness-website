<?php

function fetchData() {
    return [
        ['name' => 'User 1'],
        ['name' => 'User 2'],
        ['name' => 'User 3'],
    ];
}

if (isset($_GET['action'])) {
    switch ($_GET['action']) {
        case 'getUsers':
            $userData = fetchData();
            header('Content-Type: application/json');
            echo json_encode($userData);
            break;
        default:
            http_response_code(400);
            echo json_encode(['error' => 'Invalid action']);
            break;
    }
} else {
    http_response_code(400);
    echo json_encode(['error' => 'Action parameter missing']);
}
