<?php
$action = $_POST['action'];
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$comment = htmlspecialchars($_POST['comment']);
$to = 'o2r_arashi@yahoo.co.jp';
$subject = 'form-mail-sample-1';
$message = '[お名前]'."\n".$name."\n";
$message .= '[email]'."\n".$email."\n";
$message .= '[コメント]'."\n".$comment."\n\n\n";
$header = 'From: '.$email."\r\n";
$header .= 'Reply-To: '.$email."\r\n";
if($action == "post"){
$status = mb_send_mail($to, $subject, $message, $header);
if ($status) {
echo '<p class="msg">メッセージは正常に送信されました</p>';
echo '<button type="button" onclick="history.go(-1)">入力フォームに戻る</button>';
} else {
echo '<p class="msg">メッセージの送信に失敗しました</p>';
echo '<button type="button" onclick="history.go(-1)">入力フォームに戻る</button>';
}
}
?>
