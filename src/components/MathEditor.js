import React, { useEffect, useState, useRef } from 'react';
import 'codemirror/mode/javascript/javascript';
import { useQuery } from 'react-query';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import AutocompleteSelect from "./AutocompleteSelect";
import CalculatorButton from "./CalculatorButton";
import CodeMirrorEditor from "./CodeMirrorEditor";
import fetchAutocompleteData from "../api/fetch";
import useMathEditorStore from "../store/store";


const MathEditor = () => {
    const {
        value,
        setValue,
        selectedValues,
        setSelectedValues,
        inputValue,
        setInputValue,
        finalValue,
        setFinalValue,
        editorRef,
        setEditorRef,
        data,
        status,
        setStatus,
        setData,
    } = useMathEditorStore();

    const { data: autocompleteData, status: autocompleteStatus } = useQuery('autocompleteData', fetchAutocompleteData);

    useEffect(() => {
        if (autocompleteStatus === 'success' && autocompleteData) {
            setSelectedValues([]);
            setInputValue('');
            setData(autocompleteData);
            setStatus('success');
        }
    }, [autocompleteStatus, autocompleteData, setSelectedValues, setInputValue, setData, setStatus]);

    const handleInputChangeAutocomplete = (event, newInputValue) => {
        setInputValue(newInputValue);
    };

    const handleAutocompleteChange = (event, newValue) => {
        setSelectedValues(newValue);
    };

    const handleAutocompleteClose = (event, reason) => {
        if (reason === 'select-option') {
            setValue(prevValue => prevValue + inputValue + ' ');
            setInputValue('');
            editorRef.current.editor.setValue(prevValue => prevValue + inputValue + ' ');
        }
    };

    const handleCalculate = () => {
        try {
            const result = eval(finalValue);
            setFinalValue(result.toString());
        } catch (error) {
            console.error('Error calculating expression:', error);
        }
    };

    useEffect(() => {
        const updatedValues = selectedValues.map(item => {
            if (item.startsWith('name')) {
                let nameNumber = parseInt(item.split(' ')[1]);
                let foundValue = data.find(obj => obj.name === `name ${nameNumber}`);
                return foundValue ? foundValue.value : item;
            }
            return item;
        });
        setFinalValue(updatedValues.join(' '));
    }, [selectedValues, data, setFinalValue]);

    return (
        <div>
            <AutocompleteSelect
                multiple
                value={selectedValues}
                onChange={handleAutocompleteChange}
                inputValue={inputValue}
                onInputChange={handleInputChangeAutocomplete}
                onClose={handleAutocompleteClose}
                options={data ? data.map(item => item.name) : []}
                loading={status === 'loading'}
            />
            <CalculatorButton onClick={handleCalculate} />
            <CodeMirrorEditor
                value={finalValue}
                onChange={setFinalValue}
                editorDidMount={editor => setEditorRef(editor)}
            />
        </div>
    );
};

export default MathEditor;
