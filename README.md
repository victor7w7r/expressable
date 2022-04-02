# expressable

A very simple template for Express.js with essential packages and strict TypeScript

## Why Typescript?

Is the best programming language for web. Made with ❤️ by

![Alt text](src/assets/brandwhite.png?raw=true "Ttile")

## API Routes for Test (Port 4000 by default)

``` Plain Text
GET http://localhost:4000/actions
POST http://localhost:4000/actions
PUT http://localhost:4000/actions/:id 
DELETE http://localhost:4000/actions/:id
```

``` JSON
{
    "sample":"foo"  // body in POST PUT DELETE
}
```

### Change to blank template

``` bash
$ git clone https://github.com/victor7w7r/expressable
$ cd expressable
$ git checkout blank
```

## Extra Packages

- cors: Middleware that can be used to enable Cross-origin resource sharing
- dotenv: Environment variables for your project
- express-validator: Express validations and custom middlewares

### Run and Develop (Consider using yarn)

``` bash
$ cd expressable
$ yarn install
$ yarn dev #Run develop
$ yarn build #Make production build
$ yarn start  #Run production build
```
