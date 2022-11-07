function checkWhetherTheObjectIsEmpty(object) {
    if (Object.keys(object).length === 0)
        console.log('The object is empty!');
    else
        console.log('The object is not empty!');
}

emptyObject = {}

checkWhetherTheObjectIsEmpty(emptyObject);

notEmptyObj = {
    val: 'value'
}

checkWhetherTheObjectIsEmpty(notEmptyObj);

function compareTwoObjects(obj1, obj2) {
    if (Object.entries(obj1).toString() === Object.entries(obj2).toString()) {
        console.log("Objects are equals!");
    } else console.log("Objects are NOT equals!");
}

equalObj1 = {
    name: 'name 1',
    age: 24
};

equalObj2 = {
    name: 'name 1',
    age: 24
};

compareTwoObjects(equalObj1, equalObj2);

unEqualObj1 = {
    name: 'some name',
    age: 50
};

unEqualObj2 = {
    name: 'person name',
    age: 106
};

compareTwoObjects(unEqualObj1, unEqualObj2);

function getAnObjectsIntersection(obj1, obj2) {
    let objToWriteIn = {};

    let key1, value1;

    let key2, value2;

    for (const [keyOfObj1, valueOfObj1] of Object.entries(obj1)) {
        key1 = keyOfObj1;
        value1 = valueOfObj1;
        for (const [keyOfObj2, valueOfObj2] of Object.entries(obj2)) {
            key2 = keyOfObj2;
            value2 = valueOfObj2;

            if (key1 === key2 && value1 === value2)
                objToWriteIn[key1] = value1;
        }
    }
    console.log("Intersection object: ", objToWriteIn);
}

intersectionObj1 = {
    name: 'some name',
    age: 34
}

intersectionObj2 = {
    name: 'some name',
    age: 48
}

getAnObjectsIntersection(intersectionObj1, intersectionObj2);

function getValueByKey(obj, key) {
    console.log(`Get value by object key [${key}]: `, obj[key]);
}

objKeyVal = {
    key: 'key',
    val: 'value'
}

getValueByKey(objKeyVal, 'key')