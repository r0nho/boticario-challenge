import axios from 'axios';
import getBaseUrl from './baseurls';

export const API = axios.create({
    baseURL: getBaseUrl(),
});
