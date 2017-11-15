# zipcode-urban.js

Is a zip code considered urban? 

## Usage 

```
import { isUrban } from 'zipcode-urban.js';

console.log('Cambridge is urban:', isUrban(02139))
```

## Issues 

### Known Urban

| zipcode | urban | city |
| ----- | ----- | ------ |
| 02116 | true  | Boston |
| 02139 | true  | Cambridge (Boston, MA--NH--RI Urbanized Area) |
| 10001 | true  | New York |
| 94061 | true  | San Francisco |
| 98103 | true  | North Seattle (Wallingford) |
| 60007 | true  | Chicago |
| 73301 | false | Austin |
| 77001 | false | Houston |

## Boston Validation

| zipcode | urban | city |
| ----- | ----- | ------ |
| 02169 | false | Quincy |
| 02170 | true  | Quincy |
| 02456 | false | Newton |
| 02495 | false | Newton |
| 02474 | true  | Arlington |
| 02477 | false | Arlington |
| 01601 | false | Worcester |
