# my-react-typescript-package

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

You can clone it and step by step create your own NPM package and publish it.

It is simple Text Loading Effect.

<!-- [**Live Demo**](https://gapon2401.github.io/my-react-typescript-package/) -->

## Installation:

```bash
npm install nn-loading-effect
```

or

```bash
yarn add nn-loading-effect
```

## Usage :

Add `Loader` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Loader } from 'nn-loading-effect'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div>
            <h2>Default loader</h2>
            <Loader colors={{color1: 'blue', color2: 'aqua', color3: 'lightblue'}}/>
        </div>
        <hr />
        <div>
            <h2>Loader with predefined text</h2>
            <Loader colors={{color1: 'blue', color2: 'aqua', color3: 'lightblue'}} text="MYAPPNAME"/>
        </div>
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/my-react-typescript-package
[npm-image]: https://img.shields.io/npm/v/my-react-typescript-package
[github-license]: https://img.shields.io/github/license/gapon2401/my-react-typescript-package
[github-license-url]: https://github.com/gapon2401/my-react-typescript-package/blob/master/LICENSE
[github-build]: https://github.com/gapon2401/my-react-typescript-package/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/gapon2401/my-react-typescript-package/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/my-react-typescript-package