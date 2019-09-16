# jscodeshift-demo

Demonstrate the use of jscodeshift

## Introduction

This is a simple demonstration of the [jscodeshift][jscodeshift] toolkit. The
demo runs a transform over a source string that reverses all identifiers in the
source.

The demo was created to respond to [facebook/jscodeshift#343][issue-343].

## Use

```sh
git clone https://github.com/igetgames/jscodeshift-demo.git
cd jscodeshift-demo
npm install
node .
```

## Output

Running the program should produce the following output:

```raw
Original source =

function foo() {}

module.exports = foo;


Transformed source =

function oof() {}

eludom.stropxe = oof;
```

## Author

[Marcus R. Brown](https://github.com/igetgames)

[<img height="32" width="32" src="https://simpleicons.org/icons/twitter.svg">][twitter]

[jscodeshift]: https://github.com/facebook/jscodeshift
[issue-343]: https://github.com/facebook/jscodeshift/issues/343
[twitter]: https://twitter.com/igetgames
