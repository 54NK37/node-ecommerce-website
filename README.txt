1) Make dev.env file in config folder.

2)  Add following variables as per your needs in dev.env
        PORT=3000
        MONGODB_URL=mongodb://127.0.0.1:27017/ecommerce
        JWT_SECRET=EcommerceWebsite
    

3) Enter "npm init" command in the terminal inside ecommerce folder path.

4) Also ensure that nodemon is installed globally.If not enter command "npm i nodemon -g".

5) Install development dependicies jest for testing and env-cmd for environment variables
   using commands "npm i jest --save-dev" and "npm i env-cmd@8.0.2 --save-dev" respectively.

6) POSTMAN :

        a. Create new collection

        b.Right click on collection and select Edit.Under "Authorization" select TYPE:"Bearer Token" and TOKEN:"{{authToken}}"

        c. Add following requests with respective methods and url :

                signup => POST =>localhost:3000/api/users/signup
                login => POST => localhost:3000/api/users/login
                logout => POST => localhost:3000/api/users/logout
                logoutAll => POST => localhost:3000/api/users/logoutAll
                placeorder => POST => localhost:3000/api/users/me/placeorder
                insertProducts => POST => localhost:3000/api/admin/addproducts

                getUser => GET =>localhost:3000/api/users/me
                getUsers => GET =>localhost:3000/api/admin/getusers
                getOrders => GET =>localhost:3000/api/users/me/orders
                getCart => GET =>localhost:3000/api/users/me/cart
                getProducts => GET =>localhost:3000/api/products
                getCategoryProducts => GET => localhost:3000/api/products/Vegetables

        d.By default each request has "Authorization" TYPE:"Inherit auth from parent".But as we do not want Authorization on signup and login,
          under "Authorization" below url we select TYPE:"No Auth" and "Tests" as 
                       
                        if (pm.response.code === 201) {
                          pm.environment.set('authToken', pm.response.json().token)
                        }

          for both signup and login requests.
        
        e.Under "Body" select "raw" and "JSON" 

        f.Insert body in this format for following requests only :

         ######   signup :{
                                "name": {
                                "firstName": "Sanket",
                                "middleName": "Vasant",
                                "lastName": "Farande"
                                },

                                "userName": "sanketvf",
                                "password": "sanket123",
                                "email": "sanket@gmail.com",
                                "cart": [{
                                        "product": "Bread",
                                        "quantity": 2,
                                        "price": 30
                                },
                                {
                                        "product": "Apples",
                                        "quantity": 3,
                                        "price": 80
                                }
                                ],
                                "address": {
                                "houseNo": "A-290",
                                "city": "Pimpri",
                                "pin": 411018
                                },
                                "orders": [{
                                        "cart": [{
                                                "product": "Onion",
                                                "quantity": 2,
                                                "price": 30
                                        },
                                        {
                                                "product": "Masala",
                                                "quantity": 1,
                                                "price": 60
                                        }
                                        ],
                                        "totalPrice": 120,
                                        "orderDate": "20-03-2018",
                                        "status": "Delivered",
                                        "deliveryDate": "23=03-2018"
                                },
                                {
                                        "cart": [{
                                                "product": "Apple",
                                                "quantity": 2,
                                                "price": 80
                                        },
                                        {
                                                "product": "Cucumber",
                                                "quantity": 3,
                                                "price": 20
                                        }
                                        ],
                                        "totalPrice": 220,
                                        "orderDate": "15-07-2019",
                                        "status": "Dispatched"

                                }
                                ]

              ######    }


              ###### login : {
                                        "userName" : "sanketvf",
                                        "password" : "sanket123"
              ######         }	


              ###### insertProducts : {

                                                "name": "Banana",
                                                "currentPrice": 40,
                                                "category": "Fruits",
                                                "availableStatus": false,
                                                "purchasedDate": "07-04-2019",
                                                "daysToExpire": 3,
                                                "availableQuantities": 0
                                      }    

                                      OR

                                       {

                                                "name": "Bread",
                                                "currentPrice": 30,
                                                "category": "Breakfast",
                                                "availableStatus": true,
                                                "purchasedDate": "05-02-2019",
                                                "expiryDate": "05-08-2019",
                                                "availableQuantities": 120
                 ######                }     

        g. For remaining requests "Body" is not required.         

7)Now in one terminal start mongodb server.

8)In another terminal inside "ecommerce folder" run "npm run dev" command and make requests as needed from postman app.


        







