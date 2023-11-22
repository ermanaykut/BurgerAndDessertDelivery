import {MMKV} from 'react-native-mmkv';

export const mmkv = new MMKV();

export const setItem = (storageName: string, data: any) => {
    mmkv.set(storageName, JSON.stringify(data));
};
export const getItem = (storageName: string) => {
    const data = mmkv.getString(storageName)
    if(typeof data === 'string') return JSON.parse(data);
    return undefined;
};
export const setLogin = (storageName: string, data: any) => {
    mmkv.set(storageName, JSON.stringify(data));
};
export const getLogin = (storageName: string) => {
    const data = mmkv.getString(storageName)
    if(typeof data === 'string') return JSON.parse(data);
    return undefined;
};