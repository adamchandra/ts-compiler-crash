## Demonstrate typescript compiler crash

Triggered by tsconfig.json setting:

{ "compilerOptions": { "composite": true } }

To reproduce, run
> node_modules/.bin/tsc


> node --version
> v18.16.1

Error produced is:

```
/home/saunders/projects/openreview-workspace/ts-crash-proj/node_modules/typescript/lib/tsc.js:114743
      throw e;
      ^

Error: Debug Failure. False expression: Should never get an instantiated symbol here.
    at getSymbol (/home/saunders/projects/openreview-workspace/ts-crash-proj/node_modules/typescript/lib/tsc.js:44000:15)
    at resolveNameHelper (/home/saunders/projects/openreview-workspace/ts-crash-proj/node_modules/typescript/lib/tsc.js:44238:24)
    at resolveName (/home/saunders/projects/openreview-workspace/ts-crash-proj/node_modules/typescript/lib/tsc.js:44214:12)
    at typeParameterShadowsNameInScope (/home/saunders/projects/openreview-workspace/ts-crash-proj/node_modules/typescript/lib/tsc.js:48601:22)
    at typeParameterToName (/home/saunders/projects/openreview-workspace/ts-crash-proj/node_modules/typescript/lib/tsc.js:48641:93)
    at typeParameterToDeclarationWithConstraint (/home/saunders/projects/openreview-workspace/ts-crash-proj/node_modules/typescript/lib/tsc.js:48197:20)
    at createMappedTypeNodeFromType (/home/saunders/projects/openreview-workspace/ts-crash-proj/node_modules/typescript/lib/tsc.js:47456:35)
    at createTypeNodeFromObjectType (/home/saunders/projects/openreview-workspace/ts-crash-proj/node_modules/typescript/lib/tsc.js:47604:18)
    at visitAndTransformType (/home/saunders/projects/openreview-workspace/ts-crash-proj/node_modules/typescript/lib/tsc.js:47575:24)
    at createAnonymousTypeNode (/home/saunders/projects/openreview-workspace/ts-crash-proj/node_modules/typescript/lib/tsc.js:47510:20)

Node.js v18.16.1

```
