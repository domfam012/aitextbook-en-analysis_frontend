const data = {
    resultCode: 200,
    resultMsg: 'success',
    data: {
        loginCnt: 93,
        updateDt: '2024년 04월 18일 오전 10시 56분',
        loginDt: '2024년 04월 19일 오후 04시 20분'
    }
};

export default defineEventHandler(() => {
    return data;
});
