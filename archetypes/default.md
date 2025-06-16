+++
date = '{{ .Date }}'
draft = false
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
author = '{{ .Site.Params.author.name }}'
+++



