## Demonstrate typescript compiler crash

Triggered by tsconfig.json setting:

{ "compilerOptions": { "composite": true } }

To reproduce, run
> node_modules/.bin/tsc


> node --version
v18.16.1
