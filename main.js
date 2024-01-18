// getIsDeepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // true
// getIsDeepEqual({ a: 1, b: 2 }, { a: 1, b: 3 }); // false
// getIsDeepEqual( { a: 1, b: 2, obj: { test: "12" } }, { a: 1, b: 2, obj: { test: "12" } } );  // true
// getIsDeepEqual( { at: 1, bt: 2, test: [1,2,3], obj: { test: "12" } } , { at: 1, bt: 2, test: [1,2,3], obj: { test: "12", }, }); // true getIsDeepEqual( { at: 1, bt: 2, test: [1,2], obj: { test: "12" } } , { at: 1, bt: 2, test: [1,2,3], obj: { test: "12" } });  // false
// getIsDeepEqual( { at: 1, bt: 2, test: [1, 2, 3, { hi: "hi"} ], obj: { test: "12" } } , { at: 1, bt: 2, test: [1, 2, 3, { hi: "hello"} ], obj: { test: "12" } } ); // false
// getIsDeepEqual( { at: 1, test: [1, 2, 3, { hi: "hello"}, null ], obj: { test: "12" } } , { at: 1, test: [1, 2, 3, { hi: "hello"}, null ], obj: { test: "12" } } ); // true
// getIsDeepEqual( {  test: [1, 2, 3, { hi: "hello"}, undefined ], obj: { test: "12" } } , { test: [1, 2, 3, { hi: "hello"}, null ], obj: { test: "12" } } ); // false



function getIsDeepEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let keys in obj1, obj2) {
    if (obj1[keys] !== obj2[keys]) {
      return false;
    } else if (
      typeof obj1[keys] === "object" &&
      typeof obj2[keys] === "object"
    ) {
        return(getIsDeepEqual(obj1[keys],obj2[keys]))
    }
  }

  return true;
}


console.log(  getIsDeepEqual(
    {  test: [1, 2, 3, { hi: "hi"}, undefined ], obj: { test: "12" } } , { test: [1, 2, 3, { hi: "hello"}, null ], obj: { test: "12" } }
  )
);//false

