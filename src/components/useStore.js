import create from 'zustand';

const useMathEditorStore = create((set) => ({
    value: '',
    selectedValues: [],
    inputValue: '',
    finalValue: '',
    editorRef: null,
    data: null,
    status: 'idle',
    setValue: (newValue) => set(state => ({ ...state, value: newValue })),
    setSelectedValues: (newValues) => set(state => ({ ...state, selectedValues: newValues })),
    setInputValue: (newInputValue) => set(state => ({ ...state, inputValue: newInputValue })),
    setFinalValue: (newFinalValue) => set(state => ({ ...state, finalValue: newFinalValue })),
    setEditorRef: (ref) => set(state => ({ ...state, editorRef: ref })),
    setData: (newData) => set(state => ({ ...state, data: newData })),
    setStatus: (newStatus) => set(state => ({ ...state, status: newStatus })),
}));

export default useMathEditorStore;
