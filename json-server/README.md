Steps to use deloitte-shopping-server
-------------------------------------

1. On CMD run - 

npm install --location=global json-server

2. Create the folder deloitte-shopping-server in a suitable location. 

3. save the file db.json in that folder. 

4. Open that folder on CMD. 

5. On CMD run -

json-server --watch db.json --port 12345

6. Access the sample APIs on your angular project as follows: 

GET    http://localhost:12345/products

GET    http://localhost:12345/products/1

POST   http://localhost:12345/products

PUT    http://localhost:12345/products/1

DELETE http://localhost:12345/products/1

GET    http://localhost:12345/users

GET    http://localhost:12345/users/1

POST   http://localhost:12345/users

PUT    http://localhost:12345/users/1

7. View this documentation for more info: 

https://www.npmjs.com/package/json-server





