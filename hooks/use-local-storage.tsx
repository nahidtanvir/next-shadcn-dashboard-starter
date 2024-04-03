// "use client";

import { useEffect, useState } from 'react'

interface LocalStorageProps<T> {
  key: string
  defaultValue: T
}

export default function useLocalStorage<T>({
  key,
  defaultValue,
}: LocalStorageProps<T>) {
  // const [value, setValue] = useState<T>(() => {
  //   const storedValue = localStorage.getItem(key)
  //   return storedValue !== null ? (JSON.parse(storedValue) as T) : defaultValue
  // })
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    // Check if window is defined (i.e., we are on the client side)
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        setValue(JSON.parse(storedValue) as T);
      }
    }
  }, [key]);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue] as const
}
