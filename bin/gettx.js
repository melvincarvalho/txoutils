#!/usr/bin/env node

const gettx = require('../').gettx

gettx(
  'c7770eb89b664bbf36a5890a15ce5a461d2dba12cad654808a6667a1380c483e',
  (err, data) => {
    if (err) {
      console.error(err)
    }

    console.log(data)
  }
)
