
import { Novu } from '@novu/node';

const novu = new Novu('<API_KEY>');

export const sendingDigest = async () => {
    await novu.trigger('digest-showcase', {
        to: {
            subscriberId: '<REPLACE_WITH_DATA>'
        },
        payload: {
            name: '<REPLACE_WITH_DATA>'
        }
    });
}


