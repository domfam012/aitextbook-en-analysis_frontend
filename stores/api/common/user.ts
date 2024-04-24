export const useApiUserStore = defineStore(
    'apiUser',
    () => {
        type Item = {
            teacherId: string;
            studentId: string;
            originalId: string;
            name: string;
            role: string;
            grade: number;
            classNum: number;
            schoolId: string;
            schoolName: string;
            eduOfficeCode: string;
            classId: number;
            soundVolume?: number;
        };

        const user = ref<Item>();
        const getUser = async (value: string) => {
            const { data } = await useCustomFetch(`/${value}`, {
                method: 'get'
            });

            if (data.value) {
                user.value = data.value.data as Item;
            }
        };

        const setUser = async (value: string) => {
            const { status } = await useCustomFetch(`/${value}`, {
                method: 'post',
                body: JSON.stringify(value)
            });

            return { status };
        };
        return {
            user,
            getUser
        };
    },
    {
        persist: true
    }
);
