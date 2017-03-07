import uuid from 'node-uuid';

export function getUUID() {
    return uuid.v4();
}