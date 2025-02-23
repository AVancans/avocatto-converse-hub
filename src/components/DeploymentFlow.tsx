import { useCallback, useState } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  BackgroundVariant,
  Position,
} from '@xyflow/react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import '@xyflow/react/dist/style.css';

const AIServiceNode = ({ data }: { data: { selected: string; onChange: (value: string) => void } }) => {
  return (
    <div className="p-4">
      <RadioGroup value={data.selected} onValueChange={data.onChange} className="gap-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="elevenlabs" id="elevenlabs" />
          <Label htmlFor="elevenlabs">ElevenLabs</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="openai" id="openai" />
          <Label htmlFor="openai">OpenAI</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default function DeploymentFlow() {
  const [selectedAIService, setSelectedAIService] = useState('elevenlabs');

  const initialNodes: Node[] = [
    {
      id: 'ai-service',
      data: { 
        selected: selectedAIService, 
        onChange: setSelectedAIService 
      },
      position: { x: 0, y: 150 },
      className: 'blur-card !bg-background/50 border border-[#9b87f5]/20',
      type: 'aiService',
      style: {
        background: 'linear-gradient(135deg, rgba(155, 135, 245, 0.1) 0%, rgba(155, 135, 245, 0.02) 100%)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        minWidth: '200px',
        color: '#fff',
        fontSize: '14px',
        fontWeight: 500,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: 'fal',
      data: { label: 'Fal' },
      position: { x: 0, y: 0 },
      className: 'blur-card !bg-background/50 border border-[#9b87f5]/20',
      style: {
        background: 'linear-gradient(135deg, rgba(155, 135, 245, 0.1) 0%, rgba(155, 135, 245, 0.02) 100%)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        padding: '16px',
        color: '#fff',
        fontSize: '14px',
        fontWeight: 500,
      },
      sourcePosition: Position.Right,
    },
    {
      id: 'pica',
      data: { label: 'Pica' },
      position: { x: 0, y: 300 },
      className: 'blur-card !bg-background/50 border border-[#9b87f5]/20',
      style: {
        background: 'linear-gradient(135deg, rgba(155, 135, 245, 0.1) 0%, rgba(155, 135, 245, 0.02) 100%)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        padding: '16px',
        color: '#fff',
        fontSize: '14px',
        fontWeight: 500,
      },
      sourcePosition: Position.Right,
    },
    {
      id: 'version-control',
      data: { label: 'Version Control' },
      position: { x: 300, y: 150 },
      className: 'blur-card !bg-background/50 border border-[#9b87f5]/20',
      style: {
        background: 'linear-gradient(135deg, rgba(155, 135, 245, 0.1) 0%, rgba(155, 135, 245, 0.02) 100%)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        padding: '16px',
        color: '#fff',
        fontSize: '14px',
        fontWeight: 500,
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    // EU nodes
    ...Array.from({ length: 6 }, (_, i) => ({
      id: `eu-${i + 1}`,
      data: { label: `EU ${i + 1}` },
      position: { x: 500, y: i * 80 },
      className: 'blur-card !bg-background/50 border border-[#9b87f5]/20',
      style: {
        background: 'linear-gradient(135deg, rgba(155, 135, 245, 0.1) 0%, rgba(155, 135, 245, 0.02) 100%)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        padding: '16px',
        color: '#fff',
        fontSize: '14px',
        fontWeight: 500,
      },
      targetPosition: Position.Left,
    })),
    // US nodes
    ...Array.from({ length: 3 }, (_, i) => ({
      id: `us-${i + 1}`,
      data: { label: `US ${i + 1}` },
      position: { x: 700, y: i * 80 + 160 },
      className: 'blur-card !bg-background/50 border border-[#9b87f5]/20',
      style: {
        background: 'linear-gradient(135deg, rgba(155, 135, 245, 0.1) 0%, rgba(155, 135, 245, 0.02) 100%)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        padding: '16px',
        color: '#fff',
        fontSize: '14px',
        fontWeight: 500,
      },
      targetPosition: Position.Left,
    })),
  ];

  const initialEdges: Edge[] = [
    // Connect Fal and Pica to Version Control
    { 
      id: 'e-fal-vc', 
      source: 'fal', 
      target: 'version-control',
      animated: true,
      style: { 
        strokeWidth: 1.5,
        stroke: '#9b87f5',
        strokeDasharray: '5,5',
        opacity: 0.5,
      }
    },
    { 
      id: 'e-pica-vc', 
      source: 'pica', 
      target: 'version-control',
      animated: true,
      style: { 
        strokeWidth: 1.5,
        stroke: '#9b87f5',
        strokeDasharray: '5,5',
        opacity: 0.5,
      }
    },
    // Connect AI Service to Version Control
    { 
      id: 'e-ai-vc', 
      source: 'ai-service', 
      target: 'version-control',
      animated: true,
      style: { 
        strokeWidth: 1.5,
        stroke: '#9b87f5',
        strokeDasharray: '5,5',
        opacity: 0.5,
      }
    },
    // Connect Version Control to all EU nodes
    ...Array.from({ length: 6 }, (_, i) => ({
      id: `e-vc-eu-${i + 1}`,
      source: 'version-control',
      target: `eu-${i + 1}`,
      animated: true,
      style: { 
        strokeWidth: 1.5,
        stroke: '#9b87f5',
        strokeDasharray: '5,5',
        opacity: 0.5,
      }
    })),
    // Connect Version Control to all US nodes with different color
    ...Array.from({ length: 3 }, (_, i) => ({
      id: `e-vc-us-${i + 1}`,
      source: 'version-control',
      target: `us-${i + 1}`,
      animated: true,
      style: { 
        strokeWidth: 1.5,
        stroke: '#f5879b',
        strokeDasharray: '5,5',
        opacity: 0.5,
      }
    })),
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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
