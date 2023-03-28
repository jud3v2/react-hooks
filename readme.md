# React Hooks

A Library Of Useful Hook

## Description

Hello :) i open this repo to share my custom that i use every day and in production, this package will be lightweight as possible with a minimum of dependencies.

## Getting Started

1. Install the package

```
npm install react-hooks@latest
```

2. Next you can use the package who you want in your project

```
import { useFetch } from '@react-hook/api/useFetch' // <-- this is highly recommended 
import hooks from '@react-hooks' // <-- this is not recommended

const { response, error, isPending } = useFetch('http://localhost:7001/', {})

// your code here
```

### Dependencies

This package use these dependencies:

- React.JS (react)

### Installing

with npm 
```
npm install react-hooks@latest
```

with yarn 
```
yarn add react-hooks@latest
```


## Authors

Contributors names and contact info

Judikaël Bellance  
[@Jud3v2](https://github.com/jud3v2/)

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Why this project

I'm passionate by lightweight and performance, so i have create this repo because all developpers don't need some huge size in production just that you need, and you will be sure that you require will be executed fast as possible