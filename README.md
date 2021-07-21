[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/antonlipilin/DifferenceGenerator/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4903c11fe6ef37e60264/test_coverage)](https://codeclimate.com/github/antonlipilin/DifferenceGenerator/test_coverage)
[![Actions Status](https://github.com/antonlipilin/DifferenceGenerator/workflows/Tests%20and%20Linter/badge.svg)](https://github.com/antonlipilin/DifferenceGenerator/actions)

# Консольная утилита для сравнения файлов

## Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. 

Возможности утилиты:
* Поддержка разных входных форматов: yaml, json
* Генерация отчета в виде plain text, stylish и json

### Установка и запуск в терминале:
```
git clone git@github.com:antonlipilin/DifferenceGenerator.git
make install
make publish
npm link
```
### Справка: 
```
gendiff -h
```

### Пример использования:
```
# формат plain
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed

# формат stylish
gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```
[![asciicast](https://asciinema.org/a/yC7iOKltVfNqXhazw8OLKXH0w.svg)](https://asciinema.org/a/yC7iOKltVfNqXhazw8OLKXH0w)
