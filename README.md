# My-finance-App

My-finance-App is a basic application that provides real-time information about the stock market. This application has a frontend and a backend. 
The frontend of the application was developed using Angular and Tailwind CSS, which helped to modularize each part of the UI and provide responsiveness. 
Reactive forms were used to get user input information and to validate inputs easily. 
The backend of the application was developed using NestJs and MySQL, which is a framework that helps to create scalable server-side applications. 
TypeORM was integrated with NestJs to simplify and maintain the data integrity.

### Frontend:
#### The My-finance-App frontend includes the following features:

##### - Popular stocks: This page contains the status of 20 popular stocks, including the open, close, high, and low prices, with real data. The stock data is sourced from the Polygon APIs.
##### - News: This page shows news about stocks with current and real data.
##### - Set portfolio: This page allows users to add/delete stocks and invest a specific amount of money. The application saves all user stock investments, but no real investment is made.

### Backend:
#### The My-finance-App backend includes the following features:

##### - Developed using NestJs: The NestJs framework helps to create scalable server-side applications.
##### - TypeORM: TypeORM helps to map the database structures, simplify data, and maintain data integrity.
##### - Swagger module: The backend endpoints are documented using the Swagger module.
##### - Error Handling: HttpExceptions are used to handle errors and return the appropriate status with the respective message.


### Installation
#### To use the My-finance-App application, follow these steps:

#### - Clone the repository: git clone https://github.com/BeatrizMejiaA/My-finance-App.git
#### - Install the necessary dependencies: npm install
#### - Start the frontend: ng serve
#### - Start the backend: npm run start:dev
#### - Open the application in a browser: http://localhost:4200
#### - Open Swagger Endpoints on: http://localhost:3000/api-stocks

### Technologies Used
#### My-finance-App was built using the following technologies:

##### Angular: Frontend framework used to build the UI.
##### Tailwind CSS: CSS framework used for styling the UI.
##### NestJs: Backend framework used to build the API.
##### TypeORM: Object-relational mapper used to map database structures.
##### MySQL: Database used to store the app's data.
##### Swagger module to get endpoints documented.
##### configService: to configure the .env file.
