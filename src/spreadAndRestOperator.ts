{
	//===== Spread Operator =========

	// For Arrays
	const friends1: string[] = ['John', 'Doe', 'Smith'];
	const friends2: string[] = ['Jane', 'Mira', 'Shamina'];

	friends1.push(...friends2);

	// For Objects
	const mentors = {
		typeScript: 'John',
		redux: 'Jane',
		dms: 'Smith',
	};

	const mentors2 = {
		cloud: 'Mira',
		aws: 'Shamina',
		next: 'John',
	};

	const allMentors = { ...mentors, ...mentors2 };

	//======= Rest Operator =========
	// For Arrays
	function printNumbers(a: number, ...nums: number[]): void {
		console.log(a);
		console.log(nums);
	}

	printNumbers(1, 2, 3, 4, 5); // 1, [2, 3, 4, 5]

	// For Objects

	function displayInfo(name: string, age: number = 20): void {
		console.log(name, age);
	}

	displayInfo('John', 25); // John 25

	const greetFriends = (...friends: string[]): void => {
		friends.forEach((friend) => {
			console.log(`Hello ${friend}`);
		});
	};

	greetFriends('John', 'Jane', 'Smith', 'Mira', 'Shamina');
}
