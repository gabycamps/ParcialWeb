"use client";
import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {

    const [storedValue, setStoredValue] = useState<T>(initialValue);

    const [hydrated, setHydrated] = useState(false);


    useEffect(() => {
        
        try {
            const item = localStorage.getItem(key);
            if (item) {
                setStoredValue(JSON.parse(item) as T);
            }
        } catch (error) {
            console.warn(`Error leyendo localStorage key "${key}":`, error);
        }
        setHydrated(true);
    }, [key]);

    useEffect(() => {
        if (!hydrated) return;

        if (typeof window === "undefined") return;
        try {
            localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.warn(`Error guardando en localStorage key "${key}":`, error);
        }
    }, [key, storedValue, hydrated]);

    return [storedValue, setStoredValue] as const;
}

export default useLocalStorage;