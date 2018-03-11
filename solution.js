'use strict';

function isSorted (linkedList) {
    let current = linkedList.root;

    if (current === null || current.next === null) {
        return true;
    }

    while (current !== null) {
        if (current.value >= current.next) {
            return false;
        }
        current = current.next;
    }
    return true;
}