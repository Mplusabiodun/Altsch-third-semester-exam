# auth-test
                AltSchool FrontEnd Engineering Third Semester Examination Project

Create a new Vue js application using the cli then simulate a fake authentication experience using vuex an vue router. Make sure thatyou make provision for wildcardroutes a.k.a 404 pages. Also, your fake authentication experience should consist of the login route - '/login', the sign up route - '/signup' and the product route - '/poducts'. User sholdn't be able to access the products route until they're logged in and they shouldn't be able to access the login route if they're already logged in. In this exercise i hope to see the use of nested routes for the navigation menu that will show on each page and authguards. bonus - extract out acomposable to get the currently logged-in user and create a page that shows the product's details by using this api https://dummyjson.com/products/1 You can use this api - 'https://dummyjson.com/products'

Hosted By: Netlify
Hosted link: https://altschthirdexam.netlify.app/









## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
