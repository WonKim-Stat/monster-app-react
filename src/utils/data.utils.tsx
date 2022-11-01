export const getData = async <T,>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json();
};

// useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users") // promise that we will have value ,then value
//       .then((response) => response.json())
//       .then((users) => setMonsters(users));
//   }, []);
