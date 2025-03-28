<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $message = $_POST['message'];
    
    // 构建API请求
    $apiUrl = 'http://api.qingyunke.com/api.php';
    $params = [
        'key' => 'free',
        'appid' => 0,
        'msg' => $message
    ];
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $apiUrl . '?' . http_build_query($params));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    
    $response = curl_exec($ch);
    $error = curl_error($ch);
    curl_close($ch);

    if ($error) {
        echo json_encode(['status' => 'error', 'message' => 'API请求失败']);
    } else {
        $data = json_decode($response, true);
        if ($data && $data['result'] === 0) {
            echo json_encode(['status' => 'success', 'message' => $data['content']]);
        } else {
            echo json_encode(['status' => 'error', 'message' => '未获取到有效回复']);
        }
    }
} else {
    echo json_encode(['status' => 'error', 'message' => '非法请求']);
}
?>
