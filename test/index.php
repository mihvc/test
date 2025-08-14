<?php

$data = [
    'Тема 1' => [
        'Подтема 1.1' => 'Некий текст, привязанный к Подтеме 1.1',
        'Подтема 1.2' => 'Некий текст, привязанный к Подтеме 1.2',
        'Подтема 1.3' => 'Некий текст, привязанный к Подтеме 1.3',
    ],
    'Тема 2' => [
        'Подтема 2.1' => 'Некий текст, привязанный к Подтеме 2.1',
        'Подтема 2.2' => 'Некий текст, привязанный к Подтеме 2.2',
        'Подтема 2.3' => 'Некий текст, привязанный к Подтеме 2.3',
    ],
    'Тема 3' => [
        'Подтема 3.1' => 'Некий текст, привязанный к Подтеме 2.1',
        'Подтема 3.2' => 'Некий текст, привязанный к Подтеме 2.2',
        'Подтема 3.3' => 'Некий текст, привязанный к Подтеме 2.3',
    ],
];
?>
<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <title>Тестовое задание</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
  <h1>База знаний</h1>
  <p class="muted">Кликайте по теме и подтеме.</p>

  <div class="container">
    <div class="panel" id="panel-themes">
      <h3>Тема</h3>
      <ul class="list" id="themes-list"></ul>
    </div>

    <div class="panel" id="panel-subtopics">
      <h3>Подтема</h3>
      <ul class="list" id="subtopics-list"></ul>
    </div>

    <div class="panel" id="panel-content">
      <h3>Содержание</h3>
      <div class="content" id="content-area"></div>
    </div>
  </div>

  <script>
    const DATA = <?php echo json_encode($data, JSON_UNESCAPED_UNICODE); ?>;
  </script>
  <script src="assets/js/app.js"></script>
</body>
</html>
