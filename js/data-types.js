const vString = 'text';
printVariableAndType({ vString });

const vNumber = 15;
printVariableAndType({ vNumber });

const vBigInt = 150n;
printVariableAndType({ vBigInt });

const vBoolean = false;
printVariableAndType({ vBoolean });

const vNull = null;
printVariableAndType({ vNull });

const vUndefined = undefined;
printVariableAndType({ vUndefined });

const vSymbol = Symbol('id');
printVariableAndType({ vSymbol });

const vObject = { key: 'value', num: 5 };
printVariableAndType({ vObject });

/**
 * Function print variable name, value and type
 * @param {*} variable Variable to print
 */
function printVariableAndType(variable) {
  if (typeof Object.values(variable)[0] == 'symbol')
    // processing special case for symbol type
    console.log(`${Object.keys(variable)[0]} = \'${Object.values(variable)[0].toString()}\'. Type: \'${typeof Object.values(variable)[0]}\'.`)
  else if ((typeof Object.values(variable)[0] == 'object') && Object.values(variable)[0])
    // processing special case for object type
    console.log(`${Object.keys(variable)[0]} = \'${JSON.stringify(Object.values(variable)[0])}\'. Type: \'${typeof Object.values(variable)[0]}\'.`)
  else
    console.log(`${Object.keys(variable)[0]} = \'${Object.values(variable)[0]}\'. Type: \'${typeof Object.values(variable)[0]}\'.`);
}