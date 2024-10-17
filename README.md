# isit

A simple function to check if it is a certain day of the week (and probably other things later down the track).

```ts
// deno add jsr:@phocks/isit
import { isit } from "@phocks/isit";

isit("Friday") ? "Hooray!" : "Boo!";
```