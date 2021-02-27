# Betterforum

## About:
Betterforums is a simple and easy to understand alternative to conventional social media by focussing on the anonymous aspect of online communication.

It is build arount the idea of text based communication and only supports inline link highlighting, rendering of images or links is not intended. 

Posts can be created easly and contain a title, (main)-content and optional the author. Comments follow the same structure. 
Providing the created Post with an Username will result in the username being hashed to allow other users to distinguish between unique users and to allow a way of authentication, not providing a name will result in the author being made of `Anonymous#` + a random range of characters (4chars len).
 
## Get started Localy:
```
git clone https://github.com/xNaCly/betterforum.git
```

### Frontend:
```
cd betterforum
cd betterforum-frontend
npm i
npm start
```
### Backend:
```
cd betterforum-server
npm i
cd dist
node index.js
```

## Todo:
<img src="https://better-issues.herokuapp.com/render_issue?issue=https://github.com/xNaCly/betterforum/issues/1/>
