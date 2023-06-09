# Игра «Убей кротов»

Домашнее задание к занятию 1.1 «Возможности JavaScript в браузере».

## Описание 

Необходимо дописать игру, убивающую кротов при клике на них. 
В случайной лунке появляется крот. При нажатии на него, 
игроку засчитывается +1 за нажатие. 
Игрок побеждает, если своевременно убивает 10 кротов. 
При 5 поражениях игра заканчивается.

![Demo](./demo.gif)

### Исходные данные

Вам требуется __дописать__ уже существующий код, в котором реализовано
появление крота в случайной лунке.

Данный проект включает:

1. Основную HTML-разметку
2. Базовые CSS-классы
3. Часть написанного кода JS

HTML-разметка представляет 9 лунок (класс *hole*), каждая со своим *id*:

```html
<div class="hole-game">
    <div class="hole hole_has-mole" id="hole1"></div>
    <div class="hole" id="hole2"></div>
    <div class="hole" id="hole3"></div>
    <div class="hole" id="hole4"></div>
    <div class="hole" id="hole5"></div>
    <div class="hole" id="hole6"></div>
    <div class="hole" id="hole7"></div>
    <div class="hole" id="hole8"></div>
    <div class="hole" id="hole9"></div>
</div>
```

__Условия победы и поражения__

Случайным образом у одной из лунок добавляется класс *hole_has-mole*, что
значит, что в лунке есть крот.

Только если при клике на лунку с классом *hole_has-mole* вы должны засчитать +1
к победе. В ином случае - поражение.
