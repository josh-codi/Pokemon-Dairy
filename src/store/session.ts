const set = (name: string, value:any) => {
    try {
        const type = typeof value;

        switch (type) {
        case 'string':
            sessionStorage.setItem(name, value);
            break;
        case 'object':
            sessionStorage.setItem(name, JSON.stringify(value));
            break;
        default:
            console.log(name, value)
            throw new Error('Unsupported data type');
        }
    } catch (error:any) {
        console.error(`Error saving to session storage: ${error.message}`);
    }
};

const get = (name:string) => {
    try {
        const storedValue = sessionStorage.getItem(name);

        if (storedValue === null) {
            return null;
        }

        // Parse the stored value to handle objects or other types
        let parsedValue;

        try {
        parsedValue = JSON.parse(storedValue);
        } catch (error) {
        parsedValue = storedValue;
        }

        return parsedValue;
    } catch (error:any) {
        console.error(`Error retrieving from session storage: ${error.message}`);
        return null;
    }
};


const session = {
    get, set
}

export default session