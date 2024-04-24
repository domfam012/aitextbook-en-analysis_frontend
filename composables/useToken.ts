/*
NOTE: Token
@파일(Method): useToken.ts
@작성자: 백소연
@작성일: 2024-04-08 14:54
@설명: 임시Token
*/

export interface TokenState {
    token: String;
}

export const useToken = () => {
    const token = useCookie('token');
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const getToken = params.get('token');
    token.value = getToken;

    const user = useCookie('user');
    user.value = window.location.href.split('/')[3];
};
