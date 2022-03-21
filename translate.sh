#!/bin/sh

# Automatically generates ru-index.html from index.html for saving time

# sed should be okay with newline characters between commands,
# no need for backslashing
sed_script='
s/lang="en"/lang="ru"/;
s/class="selected-lang" href="#"/href="index.html"/;
s/href="ru-index.html"/class="selected-lang" href="#"/;
s/Python\/Rust programmer/Программист на Python и Rust/;
s/GNU\/Linux enthusiast/Преданный пользователь GNU\/Linux/;
s/Amateur vector and pixel-art artist/Новичок в пиксель-арте и векторной графике/;
s/Click on image to copy\/open link/Нажмите чтобы скопировать\/перейти/;
s/Copied!/Скопировано!/;
s/Some of my pixel-art albums/Некоторые из моих пиксель-арт альбомов/;
s/D\&D collection/Альбом по D\&D/;
s/Game backgrounds/Фоновые изображения/;
s/My favourite books, Youtube\/Odysee channels, etc./Мои любимые книги, каналы на Youtube и Odysee, и т.п./;
s/A channel about Linux and Free Software/Канал про Linux и свободное ПО/;
s/Channel about Linux, phylosophy and not related thngs/Канал про Linux, философию и прочее/;
s/Yet another channel about Linux and tech/Еще один канал про Linux и IT/;
s/Introduction to rational thinking, written as a fancy story about magic/Книга о рациональном мышлении, написаная как история о магическом мире/
'

sed "$sed_script" index.html > ru-index.html
