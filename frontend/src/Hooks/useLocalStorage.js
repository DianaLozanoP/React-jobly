import { useState } from 'react';


const useLocalStorage = (key, initialValue) => {
    // Retrieve stored value from localStorage if available, otherwise use initialValue
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error('Error accessing localStorage:', error);
            return initialValue;
        }
    });
    // Update localStorage when value changes
    const setValue = value => {
        try {
            // Allow value to be a function to match useState API
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save to localStorage
            localStorage.setItem(key, JSON.stringify(valueToStore));
            // Update state
            setStoredValue(valueToStore);
        } catch (error) {
            console.error('Error updating localStorage:', error);
        }
    };
    return [storedValue, setValue];
}

export default useLocalStorage;