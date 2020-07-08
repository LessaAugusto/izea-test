import { helper } from "@ember/component/helper";

export default helper(function eq([val1, val2]) {
    return val1 === val2;
});
