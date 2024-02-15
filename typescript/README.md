# Typescript
1. npm install -g ts-nodenpm install -g typescript

2. Creating tsConfig.json →  tsc --init

3. tsc → convert all ts file to js file

3. create package.json using → npm init

4. to compile a single file → tsc src\index.ts --out out\index.js

5. to compile a project in tsc → tsc --project tsconfig.json (configure your tsConfig.json)

   *   Ts file compiling to es5 js → tsc -t es5  src\index.ts --out out\index.js

    *   Ts file compiling to es6 js → tsc -t es6  src\index.ts --out out\index.js
