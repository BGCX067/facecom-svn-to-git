<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title><?= $this->title ?></title>
        <link type="image/x-icon" href="/favicon.ico" rel="shortcut icon" />
</head>
<body>
	<?= $content ?>
        <script>
            $(function(){  
                var icon_update = $('[rel="shortcut icon"]').clone();
                $('[rel="shortcut icon"]').remove();
                $('head').append(icon_update);
                icon_update.attr('href','/favicon.ico?'+Math.random())
            })
        </script>
</body>
</html>
