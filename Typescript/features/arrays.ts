const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];
const carsByMake = [["f150"], ["corolla"], ["camero"]];

// Help with inference when extracting values
const car_ = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(23);

// Help with iterate method like map/forEach/reduce

carMakers.map((car: string): string => {
	return car.toUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [new Date(), "2030-10-10"];
importantDates.push("2020-10-10");
importantDates.push(new Date());
