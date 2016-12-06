```javascript
import get from "oro-get"

var a = { foo:"bar" }
get("foo")(a) // "bar"

var b = { foo:{ bar:9 } }
get("foo|bar")(b)     // 9
get(["foo", "bar])(b) // 9

var c = [{ foo:1 }, { foo:2 }, { foo:3 }, { foo:4 }]
get("2|foo")(c)    // 3
get([2, "foo"])(c) // 3

var d = [{ foo:[{ bar:[{ baz:"lol" }] }] }]
var e = get`0|foo|0|bar|0|baz`
e(d) // "lol"
e(c) // undefined
```
