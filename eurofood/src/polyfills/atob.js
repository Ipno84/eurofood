import { decode } from 'base-64';

if (!global.atob) {
    global.atob = decode;
}