#!/usr/bin/env node

const jscodeshift = require('jscodeshift');

const source = `
function foo() {}

module.exports = foo;
`;

const transform = (j, source) =>
  j(source)
    .find(j.Identifier)
    .replaceWith(p =>
      j.identifier(
        p.node.name
          .split('')
          .reverse()
          .join('')
      )
    )
    .toSource();

console.log(`Original source =\n${source}\n`);

const transformedSource = transform(jscodeshift, source);

console.log(`Transformed source =\n${transformedSource}\n`);
