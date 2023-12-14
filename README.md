# Encoded String Parse

## Instructions

Create a function `parseCode` which takes in an encoded string and returns an object with three properties: `firstName`, `lastName`, and `id`.

The input string will always be in the same format: the first name, last name, and id will be separated by zeros.

## Examples

```
parseCode("John000Doe000123");
// returns { firstName: "John", lastName: "Doe", id: "123" }

parseCode("michael0smith004331");
// returns { firstName: "michael", lastName: "smith", id: "4331" }

parseCode("Thomas00LEE0000043");
// returns { firstName: "Thomas", lastName: "LEE", id: "43" }
```

## Constraints

- The input string will always be in the same format.
- The id number will not contain any zeros.

## Acceptance Criteria

- `parseCode` should return an `object` with properties `firstName`, `lastName`, and `id`.
- The values of firstName, lastName, and id should be extracted from the input string.
- The function should work for all valid input strings.
