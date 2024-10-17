import { assertEquals } from "@std/assert";
import { isMonday } from "./mod.ts";

Deno.test(function addTest() {
  // assertEquals(add(2, 3), 5);
  isMonday(10);
});
