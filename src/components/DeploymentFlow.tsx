
import { useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  {
    id: 'elevenlabs',
    data: { label: 'ElevenLabs' },
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
    }
  },
  {
    id: 'openai',
    data: { label: 'OpenAI' },
    position: { x: 0, y: 100 },
    className: 'blur-card !bg-background/50 border border-[#9b87f5]/20',
    style: {
      background: 'linear-gradient(135deg, rgba(155, 135, 245, 0.1) 0%, rgba(155, 135, 245, 0.02) 100%)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '16px',
      color: '#fff',
      fontSize: '14px',
      fontWeight: 500,
    }
  },
  {
    id: 'fal',
    data: { label: 'Fal' },
    position: { x: 0, y: 200 },
    className: 'blur-card !bg-background/50 border border-[#9b87f5]/20',
    style: {
      background: 'linear-gradient(135deg, rgba(155, 135, 245, 0.1) 0%, rgba(155, 135, 245, 0.02) 100%)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '16px',
      color: '#fff',
      fontSize: '14px',
      fontWeight: 500,
    }
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
    }
  },
  {
    id: 'version-control',
    data: { label: 'Version Control' },
    position: { x: 200, y: 150 },
    className: 'blur-card !bg-background/50 border border-[#9b87f5]/20',
    style: {
      background: 'linear-gradient(135deg, rgba(155, 135, 245, 0.1) 0%, rgba(155, 135, 245, 0.02) 100%)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '16px',
      color: '#fff',
      fontSize: '14px',
      fontWeight: 500,
    }
  },
  // EU nodes
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `eu-${i + 1}`,
    data: { label: `EU ${i + 1}` },
    position: { x: 400, y: i * 80 },
    className: 'blur-card !bg-background/50 border border-[#9b87f5]/20',
    style: {
      background: 'linear-gradient(135deg, rgba(155, 135, 245, 0.1) 0%, rgba(155, 135, 245, 0.02) 100%)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '16px',
      color: '#fff',
      fontSize: '14px',
      fontWeight: 500,
    }
  })),
  // US nodes
  ...Array.from({ length: 3 }, (_, i) => ({
    id: `us-${i + 1}`,
    data: { label: `US ${i + 1}` },
    position: { x: 600, y: i * 80 + 160 },
    className: 'blur-card !bg-background/50 border border-[#9b87f5]/20',
    style: {
      background: 'linear-gradient(135deg, rgba(155, 135, 245, 0.1) 0%, rgba(155, 135, 245, 0.02) 100%)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '16px',
      color: '#fff',
      fontSize: '14px',
      fontWeight: 500,
    }
  })),
];

const initialEdges: Edge[] = [
  // Connect ElevenLabs, Fal, and Pica to Version Control
  { 
    id: 'e-elevenlabs-vc', 
    source: 'elevenlabs', 
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
  // Connect Version Control to all US nodes
  ...Array.from({ length: 3 }, (_, i) => ({
    id: `e-vc-us-${i + 1}`,
    source: 'version-control',
    target: `us-${i + 1}`,
    animated: true,
    style: { 
      strokeWidth: 1.5,
      stroke: '#9b87f5',
      strokeDasharray: '5,5',
      opacity: 0.5,
    }
  })),
];

export default function DeploymentFlow() {
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

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden blur-card">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        className="bg-background/50"
      >
        <Background pattern="dots" color="#6366f1" />
        <Controls className="!bg-background/50" />
      </ReactFlow>
    </div>
  );
}
