// Example object 'a'
const a = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
};

// Iterating over properties of 'a' using for...in loop
for (const key in a) {
    console.log(key); // Print each property key
    console.log(a[key]); // Print each property value
}
