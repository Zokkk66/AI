<!-- proxy.php -->
<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $msg = isset($_POST['msg']) ? urlencode($_POST['msg']) : '';
    
    $api_url = "http://api.qingyunke.com/api.php?key=free&appid=0&msg={$msg}";
    
    $response = file_get_contents($api_url);
    
    if ($response === FALSE) {
        echo json_encode(['result' => 500, 'content' => '服务暂时不可用']);
        exit;
    }
    
    $data = json_decode($response, true);
    // 替换换行符并返回
    $data['content'] = str_replace('{br}', "\n", $data['content']);
    
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(['result' => 405, 'content' => '不支持的请求方法']);
}
?>
