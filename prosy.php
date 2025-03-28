<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $message = isset($_POST['msg']) ? urlencode($_POST['msg']) : '';
    $apiUrl = "http://api.qingyunke.com/api.php?key=free&appid=0&msg={$message}";
    
    $response = file_get_contents($apiUrl);
    
    if ($response === FALSE) {
        echo json_encode(['content' => '请求服务失败']);
    } else {
        $data = json_decode($response, true);
        // 清理返回内容
        $data['content'] = str_replace(['{br}', '菲菲'], ['', 'AI助手'], $data['content']);
        echo json_encode($data);
    }
} else {
    echo json_encode(['content' => '无效的请求方法']);
}
?>
