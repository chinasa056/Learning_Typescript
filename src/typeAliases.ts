const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
};

const greets = (user: { name: string, uid: string | number }) => {
    console.log(`${user.name} says hello`);
};
const greetU = (user: { name: string, uid: string | number }) => {
    console.log(`${user.name} says hello`);
};

// instead of having to type out the type specificatins all the time, we could create a type aliases of the datatype and then call it whenever we that same datatype. we define them once in the file and use them as many times as we like  e.g

type stringOrNum = string | number;
type objectWithNameAndUid = { name: string, uid: stringOrNum };

// so we then write the function like this
const loggedDetails = (uid: stringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
};

const greeting = (user: objectWithNameAndUid) => {
    console.log(`${user.name} says hello`);
};


