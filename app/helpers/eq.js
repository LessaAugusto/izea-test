import { helper } from "@ember/component/helper";

/**
 * This helper checks whether two values are equal, using javascript
 * operator '===',
 */
export default helper(function eq([val1, val2]) {
    return val1 === val2;
});
