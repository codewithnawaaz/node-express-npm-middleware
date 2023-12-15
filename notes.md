Q-1 what is node js?
ans- basically jab ham apna koi bhi application run karte to usko broswer render karta hai matlba java script ko render karne ke liye hame browser ki help leni padti hai or browser ke pass ye takat aati hai jaise agr ham baat kare chrome ki to uske pass hai v8 engin jo ki likha gya hai c++ language se.

ek din ek ded shana aaya rayn dahl usne V8 ke code ko uthaya or use js se wrap up krke ek java script environment bana diya jisse ab js ko ham run kar skte hai browser se alag or ise hi node js kehte hai.

Q2- wht is npm ?
Ans- earlier npm stands for node package manager but ab iska koi specfic name nhi hai
kuch bhi keh skte hai jaise naan paneer makni etc...https://github.com/npm/npm-expansions/blob/master/expansions.txt kyunki isme ab sab package daalte hai other langage bhi js or c java alot of react
###IMPROTANT NOTES - node ko website se download karne per uske saath npm bhi install ho jata hai alag se npm download ki jaroorat nahi hai######

Agar aapne ek Node.js ko official website se download kiya hai, toh npm (Node Package Manager) uske saath pre-installed aata hai. Node.js installer, Node.js runtime ke saath npm ko bhi include karta hai. Iska matlab hai ki jab aap Node.js download karte hain, toh npm ko alag se download karne ki zarurat nahi hoti.
to check
node -v
npm -v

<!-- ####points##### -->

1.koi bhi package install karne ke liye ham ko npm ki website per jana hota hai or wha per wo package ke offcial name jo hota hai use apne terminal per dalna hota hai jaise
npm install package name
or npm i package name
ham iske liye npm i cat-me name ke package ka exmaple dekhte hai lets see in script.js file
node_modules {}package-lock.json, pakage.json ye sab npm i cat-me se aaye hao jki npm package hai basically npm ka matlab bana banaya code

2.koi bhi package jab installl kro to use require karna hota hai top pr

 <!-- jaise var catMe = require('cat-me') -->

\\**\*\***\*\*\*\***\*\***Express**\*\***\*\***\*\***\\

express ek framwork hai jo ki bascially use hota hai routing ke liye
jaise www.facbook.com/profile is case me /profile ko ham rout khenge
/contact/bflahbflyavf
/about us is called as routing and rout.

Express.js ek web application framework hai jo Node.js mein kaam karta hai. Node.js ek server-side runtime environment hai, aur Express.js ise use karke developers ko Node.js par aadharit web applications aur APIs banane mein madad karta hai. Iska matlab hai ki Express.js ek backend framework hai jo Node.js ke saath integrate hota hai.

Express.js ke kuch mukhya features hain:

Routing: Express.js routing system ke madhyam se URL endpoints ko handle karta hai, jisse aap specific requests par specific actions perform kar sakte hain.

Middleware: Express.js mein middleware ka concept hota hai jiski madad se aap request aur response ke beech mein kuch functions ko run kar sakte hain. Ye authentication, logging, error handling, etc. ke liye istemaal hota hai.

Templating Engines: Express.js aapko alag-alag templating engines ka support deta hai jaise ki EJS, Pug, Handlebars, etc., jisse aap dynamic content generate kar sakte hain.

Static Files: Express.js static files ko serve karne mein bhi help karta hai, jaise ki images, stylesheets, aur client-side JavaScript files.

RESTful APIs: Express.js ka use aap RESTful APIs (Representational State Transfer) banane mein bhi kar sakte hain.

Iske alawa, Express.js bahut hi lightweight hai aur aasani se extendable hai, isliye ye developers ke beech mein kaafi popular hai web development ke kshetra mein.

points --

1. node js ke http module ko istemal karke bhi server banayaa ja sakta hai, lekin wo tough hota hai na mumkin nahi hai waha hame sab kuch khud hu manage kerna padega jaise middle ware routing, error handling etc ..
   jabki express js ek frame work hai jo ki finlly http module per hi work karge lekin hame aasani ho jati hai ye ek light weight language hai finally isme bane banaye code ka aanand mil jataa hai..

2. Now npm i express
   var express = require("express)
   var app = express()
   now make rout
   app.get("/", function (req,res){
   res.send ("i ma homme page")
   })
   \\**\*\***\*\*\*\***\*\***Middleware **\*\***\*\***\*\***\\
   erver-side middleware ka kaam hota hai server applications ke liye requests aur responses ko handle karna. Yeh middleware server ke beech mein hota hai aur kuch specific tasks ko perform karta hai, jaise ki authentication, logging, errors ko handle karna, aur static files ko serve karna..

for example client click /profile rout then in between middle ware check req thah login hai ya nhi hai to aage bahdne dega or profile page dikha dega us bandde ko..
or ye hamesha get rout se pehele likha jayaega
app.use(function(req,res,next){
req.send("you are log in "
)
next()
})
