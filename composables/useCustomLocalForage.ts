export const useCustomLocalForage = (name: string) => {
    const localForage = useLocalForage();
    const indexedDb = localForage.createInstance({
        driver: localForage.INDEXEDDB,
        name: name,
        version: 1.0,
        size: 4980736,
        storeName: 'keyvaluepairs',
        description: 'description'
    });

    return indexedDb;
};
