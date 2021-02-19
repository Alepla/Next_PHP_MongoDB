# Next_PHP_MongoDB

# To start

```
In the frontend
cd frontend
yarn install
yarn dev

In the backend
mongoimport --jsonArray --db prueba --collection vod --file vod.json
mongoimport --jsonArray --db prueba --collection users --file users.json
cd backend
composer install
cp .env.example .env
php artisan jwt:secret
php artisan serve
```
