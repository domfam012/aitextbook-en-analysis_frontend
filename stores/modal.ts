// modal store
export const useModalStore = defineStore('modal', () => {
    interface ModalState {
        isOpen: boolean;
        type: string;
        buttonLabels: string[];
        message: string;
    }
    const defaultModalState: ModalState = {
        isOpen: false,
        type: '',
        buttonLabels: [],
        message: ''
    };

    const modalData = ref<ModalState>({ ...defaultModalState });

    const openModal = (options: ModalState) => {
        Object.assign(modalData.value, options, { isOpen: true });
    };

    const closeModal = () => {
        Object.assign(modalData.value, { ...defaultModalState });
    };

    return { modalData, openModal, closeModal };
});
