import test from "ava";

import isSSN from "./index";

test("matches ssn", t => {
  t.true(isSSN("123-45-6789"));
});

test("doesn't match non ssns", t => {
  t.false(isSSN("14*-asdf-ef12"));
  t.false(isSSN("123-223-5658"));
});
