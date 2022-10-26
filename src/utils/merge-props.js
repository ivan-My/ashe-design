import assign from 'lodash-es/assign';
import assignWith from 'lodash-es/assignWith';
import isUndefined from 'lodash-es/isUndefined';
export function mergeProps(...items) {
    function customizer(objValue, srcValue) {
        return isUndefined(srcValue) ? objValue : srcValue;
    }
    let ret = assign({}, items[0]);
    for (let i = 1; i < items.length; i++) {
        ret = assignWith(ret, items[i], customizer);
    }
    return ret;
}
