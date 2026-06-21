import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key); //получение данных из localStorage по ключу
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue)); //преобразование данных в JSON строку и сохранение в localStorage
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;