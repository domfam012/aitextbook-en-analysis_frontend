const data = {
    success: true,
    dataSize: 1,
    timestamp: '2024-03-29 01:33:02',
    data: {
        name: 'sync API'
    }
};

export default defineEventHandler(() => {
    return data;
});
