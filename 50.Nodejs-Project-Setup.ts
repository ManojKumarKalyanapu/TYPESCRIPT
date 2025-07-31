/*
1. Create Project Directory
mkdir ts-node-project
cd ts-node-project


2. Initialize a Node.js Project
npm init -y

3. Install TypeScript and Required Tools
npm install typescript ts-node @types/node --save-dev

typescript: TypeScript compiler
ts-node: Runs TypeScript directly without compiling to JS
@types/node: Type definitions for Node.js (e.g., fs, path)

4. Initialize a TypeScript Config File
npx tsc --init

This generates tsconfig.json. Modify it like this:
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  }
}

*/
