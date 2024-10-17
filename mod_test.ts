import { assertEquals } from "@std/assert";
import { isit } from "./mod.ts";

Deno.test(function monday() {
  assertEquals(
    isit("Monday", { when: new Date("2024-10-14T00:00:00Z"), offsetHours: 0 }),
    true,
  );
});

Deno.test(function tuesday() {
  assertEquals(
    isit("Tuesday", { when: new Date("2024-10-15T00:00:00Z"), offsetHours: 0 }),
    true,
  );
});

Deno.test(function wednesday() {
  assertEquals(
    isit("Wednesday", {
      when: new Date("2024-10-16T00:00:00Z"),
      offsetHours: 0,
    }),
    true,
  );
});

Deno.test(function thursday() {
  assertEquals(
    isit("Thursday", {
      when: new Date("2024-10-17T00:00:00Z"),
      offsetHours: 0,
    }),
    true,
  );
});

Deno.test(function friday() {
  assertEquals(
    isit("Friday", { when: new Date("2024-10-18T00:00:00Z"), offsetHours: 0 }),
    true,
  );
});

Deno.test(function saturday() {
  assertEquals(
    isit("Saturday", {
      when: new Date("2024-10-19T00:00:00Z"),
      offsetHours: 0,
    }),
    true,
  );
});

Deno.test(function sunday() {
  assertEquals(
    isit("Sunday", { when: new Date("2024-10-20T00:00:00Z"), offsetHours: 0 }),
    true,
  );
});
