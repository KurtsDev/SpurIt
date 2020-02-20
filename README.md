Запуск:

1 Склонировать проект

2 composer install

3 npm install

4 Создать БД mySql, в файле .env прописать DB_DATABASE,DB_USERNAME, DB_PASSWORD

5 В корне проекта запустить php artisan migrate

6 Запустить php artisan serve, перейти на http://127.0.0.1:8000


Тестовое задание:

Задача:
Создать примитивный интерфейс для организации списка личных задач с возможностью их создания, редактирования и добавления комментариев для каждой из них. Реализовать возможность получения списка задач посредством API.
Требования:
Админка:
Страница со списком должна иметь 3 колонки: TODO, DOING, DONE. В каждой из них выводятся задачи, имеющие соответствующий статус и отсортированные по дате создания.
На странице со списком должна быть кнопка "Создать задачу", при клике на которую отображается форма для добавления новой задачи. Необходимые поля: имя, описание, статус (TODO/DOING/DONE). После создания задача должна попасть в соответствующую её статусу колонку.
Каждая задача должна иметь ссылку на редактирование, где можно изменить её статус.
Механизм перетаскивания задачи в другую колонку реализовывать НЕ нужно.
При редактировании задачи необходимо иметь возможность добавлять комментарии и увидеть список ранее созданных.
Для каждой задачи на странице списка должно выводиться количество комментариев.


API:
реализовать возможность получения списка задач в формате JSON посредством HTTP GET запроса
Требования к инструментам и стеку технологий:
язык, используемый на серверной части - PHP
сервер баз данных - MySQL
стек, используемый на клиентской части - HTML/CSS/Javascript
всё остальное - на ваше усмотрение
Примечания:
К внешнему виду никаких требований не предъявляется. Форма организации интерфейса - свободная. Единственное пожелание - минимизировать переходы по страницам используя вместо этого Ajax.
Нас интересует то как вы проектируете, разрабатываете и организуете свой код, какие инструменты при этом используете. Основное наше внимание будет направлено на качество исходного кода.
Если у вас, по каким либо причинам, нет времени на реализацию функционала, описанного выше (учёба, работа и т.д.), но вы знаете как его реализовать, вы можете подробно описать архитектуру вашего решения. Мы же, в свою очередь, зададим все необходимые вопросы в ходе собеседования, чтобы убедиться, что это действительно так.
Если у вас хватает знаний и опыта на реализацию функционала лишь частично или сильно упрощённо, всё равно высылайте ваше решение и мы рассмотрим вашу кандидатуру.
