const data = {
    success: true,
    dataSize: 1,
    timestamp: '2024-03-29 01:33:02',
    data: {
        dt: null,
        semId: null,
        clssUuid: null,
        tchrUuid: null,
        studUuid: null,
        dsgnId: null,
        dsgnPrgrsRt: null,
        dsgnUseInfo: null,
        dsgnUseColorCnt: null,
        stampId: null,
        startDt: '2024-04-05',
        endDt: '2024-04-11',
        areaBaseArr: [0, 45, 90, 135],
        areaPercentArr: [16.7, 66.7, 0, 0, 16.7]
    }
};

export default defineEventHandler(() => {
    return data;
});
