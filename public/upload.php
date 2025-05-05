
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
    http_response_code(400);
    echo json_encode(['error' => 'No file uploaded or upload error']);
    exit();
}

// Set temporary upload directory
$uploadDir = sys_get_temp_dir() . '/pdf_uploads/';
if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0755, true);
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
        'message' => 'File uploaded successfully'
    ]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to save the file']);
}
?>
