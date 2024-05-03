const data = {
    success: true,
    dataSize: 1,
    timestamp: '2024-03-29 01:33:02',
    data: {
        name: '피드백 도장 보내기 API'
    }
};

export default defineEventHandler(() => {
    return data;
});
