// Reference Type

const user: {
	companyName: 'ABC'; // literal type
	firstName: string;
	middleName?: string; // optional type
	lastName: string;
	isVarified: boolean;
	readonly role: string;
} = {
	companyName: 'ABC',
	firstName: 'MD',

	lastName: 'Sharif',
	isVarified: true,
	role: 'Admin',
};

// user.companyName = 'XYZ'; // Error: Cannot assign to 'companyName' because it is a read-only property   // literal type
// user.role = 'User'; // Error: Cannot assign to 'role' because it is a read-only property   // readonly type
