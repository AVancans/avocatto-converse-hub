
import { useCallback, useState } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import AIServiceNode from './AIServiceNode';
import { createInitialNodes } from './initialNodes';
import { createInitialEdges } from './initialEdges';

export default function DeploymentFlow() {
  const [selectedAIService, setSelectedAIService] = useState('elevenlabs');

  const [nodes, setNodes, onNodesChange] = useNodesState(createInitialNodes(selectedAIService, setSelectedAIService));
  const [edges, setEdges, onEdgesChange] = useEdgesState(createInitialEdges());

  const onConnect = useCallback((params) => 
    setEdges((eds) => addEdge({ 
      ...params, 
      animated: true,
      style: { 
        strokeWidth: 1.5,
        stroke: '#9b87f5',
        strokeDasharray: '5,5',
        opacity: 0.5,
      }
    }, eds)), 
    [setEdges]
  );

  const nodeTypes = {
    aiService: AIServiceNode,
  };

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden blur-card">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        className="bg-background/50"
      >
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} color="#6366f1" />
        <Controls className="!bg-background/50" />
      </ReactFlow>
    </div>
  );
}
