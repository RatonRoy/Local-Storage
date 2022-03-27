// this is the empty object you can add the value by calling the function give with the argument value as string. 
const db = {};
const addItem = item => {
	// this is the way if any item remaining in the db object. if the item remaining then add one if the item not remaining there then add one.
	if (item in db) {
		db[item] = db[item] + 1; 
	}
	else {
		db[item] = 1;
	}
	console.log(db);
}
// Local Storage 
/* 

1. If you want to store something to the local storage you must use the localStorage.setItem('give here the key name', remain here the value );
2. If you want to get some value from the local storage then use the localStorage.getItem('key name').
3. In the local storage primitive data easily store but it is difficult to store non-primitive data like array, object etc. 
4. If you want to store non-primitive data you must convert the data into json formate then store. 
const fruits = {name1 : 'mango', name2 : 'coconut', name3 : 'apple', name4 : 'jackfruits'};
localStorage.setItem('item', json.stringify(fruits));

If you want to get the items from fruits then use this formate 
json.parse(localStorage.getItem(fruits));

****(Most important thing that getItem give the data as string. So if you want do any arithmetic operation must convert the data from string )
*/