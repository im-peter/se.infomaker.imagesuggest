# Imagesuggest
An AI baced image assistant

## Getting started

Clone this repository

```bash
git clone git@github.com:Infomaker/se.infomaker.imagesuggest.git
cd se.infomaker.imagesuggest
```

Install JavaScript dependencies

```JavaScript
npm install
```

Start a webpack development server running at localhost:3000

```JavaScript
npm start
```

_Specify port on dev server_

```JavaScript
PORT=1337 npm start
```

## Other dependencies

requires `writer => 4.6.0`

### Plugin configuration

```json
{
    "id": "se.infomaker.imagesuggest",
    "name": "imagesuggest",
    "url": "http://localhost:3000/index.js",
    "style": "http://localhost:3000/style.css",
    "mandatory": false,
    "enabled": true,
    "data": {}
}
```
