console.log("ata ami vhul theke akbare shikkha nilam");
const str1 = "hello"
let str2 = "02121"
let str3 = 21210
var ataAkhonUseHoyna = 220
cityOfBank="bowBazar"
console.table([str1,str2,ataAkhonUseHoyna,cityOfBank])
console.log(typeof str3 ==="number");
/**
 * Data Type Primitive Data Type and Non Primitive Data Type are availabel 
 * primitive ==>1.string, number , boolean, bigInt,Symbol,null,Undefined,
 * non-primitive===>object,array,(this are refrence catcher in memory)
 * special case if u check null is which type you see that is object type
 * non-primitive data type are refrence catcher in memory and primitive data type are value catcher in memory
 */
const Lokjon=[{name:"abdul korim",Boyos:20}]  //ata Array & Object 2tar mixture
const AladaVhabeSudhoArray=[1,2,3,4,5]
const aladaVhabeSudhoObject={name:"abdul korim",Boyos:20}
//test kore dekhi ki hoy primitive ar value change hoy na onnno kono variable ar through change hoy na, 
// but non-primitive ar value change hoy onnno kono variable ar through
//Let's do experiment
console.log(AladaVhabeSudhoArray[2]); // there is new concept of refrence catcher in memory, so if we change the value of array through another variable then it will change the original array value also
const newArray=AladaVhabeSudhoArray
newArray[2]=1000
console.log(AladaVhabeSudhoArray[2]); // it will print 1000 because newArray is a reference to AladaVhabeSudhoArray
let primitiveValue=10
// let newPrimitiveValue=primitiveValue
// newPrimitiveValue=20
// console.log(primitiveValue); // it will print 10 because primitiveValue is a value type and newPrimitiveValue is a copy of it
let newPrimitiveValue=primitiveValue
newPrimitiveValue=100
console.log(primitiveValue);


