import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

const CodeMirrorEditor = ({ value, onChange, editorDidMount }) => {
    return (
        <CodeMirror
            value={value}
            options={{
                mode: 'javascript',
                theme: 'material',
                lineNumbers: true
            }}
            onBeforeChange={(editor, data, value) => onChange(value)}
            editorDidMount={editorDidMount}
        />
    );
};

export default CodeMirrorEditor;
