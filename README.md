# isit

A simple function to check if it is a certain day of the week.

## Usage

```ts
// deno add jsr:@phocks/isit
import { isit } from "@phocks/isit";

isit("Friday") ? "Hooray!" : "Boo!";
```

## Options

You can offset the timezone and also pass in a Date.

```ts
isit("Friday", { offset: 10, date: new Date("2021-01-01") });
```

## Notes

Might add other things like `isit("morning")` or `isit("weekend")` in the future.