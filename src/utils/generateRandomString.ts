function generateRandomString(length: number) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';

  // Generate random string of specified length
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset[randomIndex];
  }

  return randomString;
}

const generatedStringsSet: Set<string>  = new Set();

function generateUniqueRandomString(length: number) {
  let randomString: string;

  // Generate unique random string
  do {
    randomString = generateRandomString(length);
  } while (generatedStringsSet.has(randomString));

  // Add generated string to set
  generatedStringsSet.add(randomString);

  return randomString;
}


