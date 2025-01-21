import { Api } from '@/config';
import apiKey from '@/config/apiKey';
import baseUrl from '@/config/baseUrl';

const request = new Api({
    baseUrl: baseUrl.BASE_URL ?? '',
    // baseUrl: baseUrl.API_PUBLIC ?? '',
    xApiKey: apiKey.API_KEY ?? '',
});

export const publicLoginUser = async (data: any) => {
    const response = await request.post('/auth/login/credential', data);
    return response;
};

export const publicLoginGoogle = async (data: any, token: string) => {
    const response = await request.post('/auth/login/social/google', data, {
        token,
    });
    return response;
};
