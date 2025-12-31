// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div>
            <h2 style={{ color: '#ffffff', marginBottom: '10px' }}>Pipeline Builder</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='delay' label='Delay' />
                <DraggableNode type='split' label='Split' />
                <DraggableNode type='merge' label='Merge' />
            </div>
        </div>
    );
};
