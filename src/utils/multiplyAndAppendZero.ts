export const multiplyAndAppendZeros = (value: string) => {
    const parsedValue = parseInt(value)
    const trimmedValue = Math.trunc(parsedValue)
    const result = parseInt(value) * 100000; // convert to kobo
    return result; // Ensure two decimal places
  };
  
