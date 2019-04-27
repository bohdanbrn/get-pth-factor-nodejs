# find-pth-factor-app

A simple Node.js application with Express.js.
The application creates endpoint "GET /pth-factor" to get "pth factor of n" for number.

## Getting Started

To get started, you need to install packeges:

```
npm install
```

**Running app**

```
npm start
```

**Running tests**

```
npm run test
```

## How it works

**Endpoints**

On the server we have the following endpoint:

Endpoint | Description
----------|------------
GET /pth-factor | Get 'pth factor' for number

To use endpoint "GET /pth-factor", we need to send 2 parameters(n and p). So the URL should be like this "/pth-factor?n=4&p2"