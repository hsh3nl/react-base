export interface ConfirmProps {
    title: string;
    content: string;
    cancelBtnText?: string;
    confirmBtnText?: string;
    onCancel: () => void;
    onConfirm: () => void;
}
