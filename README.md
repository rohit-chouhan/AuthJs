# AuthJs
Easy Social Media Login Authentication integrator

![authjs](https://i.ibb.co/FXCn5tR/authjs.jpg)

#### CDN
`authjs.min.js`
```sh
https://cdn.jsdelivr.net/npm/@rohit-chouhan/authjs/authjs.min.js
```

`authjs.js`
```sh
https://cdn.jsdelivr.net/npm/@rohit-chouhan/authjs/authjs.js
```

### Installation with NPM

```sh
$ npm install @rohit-chouhan/authjs
```

### Documentation

Method | Use
---|---
authjs.set('<fbappid>') | First step of AuthJs, to Initilize AuthJs for Facebook Login
authjsinit() | Function which will exicute automatically when login success
authjs.login() | Exicute the code for Login with Facebook
authjs.logout() | Logout Facebook from your Project
authjs.staus() | Debug & Check Status of AuthJs
authget.obj | Get data `id, name, profile, accessToken`

### Example Code

```html
<!DOCTYPE html>
<html>
    <head>
        <title>AuthJs Simple Page</title>
        <script src="https://cdn.jsdelivr.net/npm/@rohit-chouhan/authjs/authjs.min.js"></script>
    </head>
    <body>
        <script>
            //Set Facebook APP ID
            authjs.set("89017650134XXXX");

            //Manually Calling Function
            function authjsrun() {
                console.log(authget.id);
                console.log(authget.name);
                console.log(authget.profile);
                console.log(authget.accessToken);
            }

            //Auto Exicute When Login is Success
            function authjsinit() {
                alert("Welcome" + authget.name);
            }
        </script>
        <button onclick="authjsrun()">Get All Info</button>
        <button onclick="authjs.login()">Login</button>
        <button onclick="authjs.logout()">Logout</button>
        <button onclick="authjs.status()">Status</button>
    </body>
</html>

```

### Developers
![Rohit](http://graph.facebook.com/100004453384015/picture?type=square)\
Developed by [Rohit Chouhan](https://rohitchouhan.com),  MIT License
