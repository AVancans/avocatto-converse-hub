
import { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
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
    id: '1',
    type: 'input',
    data: { label: 'Development' },
    position: { x: 0, y: 50 },
    className: 'blur-card !bg-background/50',
  },
  {
    id: '2',
    data: { label: 'Version Control' },
    position: { x: 200, y: 0 },
    className: 'blur-card !bg-background/50',
  },
  {
    id: '3',
    data: { label: 'Staging' },
    position: { x: 200, y: 100 },
    className: 'blur-card !bg-background/50',
  },
  {
    id: '4',
    type: 'output',
    data: { label: 'Fleet Deployment' },
    position: { x: 400, y: 50 },
    className: 'blur-card !bg-background/50',
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true, className: 'opacity-50' },
  { id: 'e1-3', source: '1', target: '3', animated: true, className: 'opacity-50' },
  { id: 'e2-4', source: '2', target: '4', animated: true, className: 'opacity-50' },
  { id: 'e3-4', source: '3', target: '4', animated: true, className: 'opacity-50' },
];

export default function DeploymentFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => 
    setEdges((eds) => addEdge({ ...params, animated: true }, eds)), [setEdges]
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
        <Background color="#6366f1" variant="dots" />
        <Controls className="!bg-background/50" />
        <MiniMap className="!bg-background/50" />
      </ReactFlow>
    </div>
  );
}
