
<?php
// Set headers for CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Check if file was uploaded
if (!isset($_FILES['pdfFile']) || $_FILES['pdfFile']['error'] !== UPLOAD_ERR_OK) {
    $error = isset($_FILES['pdfFile']) ? $_FILES['pdfFile']['error'] : 'No file uploaded';
    
    $errorMessages = [
        UPLOAD_ERR_INI_SIZE => 'The uploaded file exceeds the upload_max_filesize directive in php.ini',
        UPLOAD_ERR_FORM_SIZE => 'The uploaded file exceeds the MAX_FILE_SIZE directive in the HTML form',
        UPLOAD_ERR_PARTIAL => 'The uploaded file was only partially uploaded',
        UPLOAD_ERR_NO_FILE => 'No file was uploaded',
        UPLOAD_ERR_NO_TMP_DIR => 'Missing a temporary folder',
        UPLOAD_ERR_CANT_WRITE => 'Failed to write file to disk',
        UPLOAD_ERR_EXTENSION => 'A PHP extension stopped the file upload'
    ];
    
    $errorMessage = is_int($error) && isset($errorMessages[$error]) ? $errorMessages[$error] : 'Unknown upload error';
    
    http_response_code(400);
    echo json_encode(['error' => $errorMessage]);
    exit();
}

// Set upload directory - use a directory that's writable on InfinityFree
$uploadDir = '../uploads/';

// Create directory if it doesn't exist
if (!file_exists($uploadDir)) {
    if (!mkdir($uploadDir, 0755, true)) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to create upload directory']);
        exit();
    }
}

// Generate a unique filename
$filename = uniqid() . '_' . basename($_FILES['pdfFile']['name']);
$filePath = $uploadDir . $filename;

// Save the uploaded file
if (move_uploaded_file($_FILES['pdfFile']['tmp_name'], $filePath)) {
    // File processed successfully
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'filename' => $filename,
        'filepath' => $filePath,
        'filesize' => filesize($filePath),
        'filetype' => $_FILES['pdfFile']['type'],
        'message' => 'File uploaded successfully'
    ]);
} else {
    $uploadError = error_get_last();
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to save the file',
        'details' => $uploadError ? $uploadError['message'] : 'Unknown error'
    ]);
}
?>
