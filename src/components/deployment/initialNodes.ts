
import { Node, Position } from '@xyflow/react';

const nodeStyle = {
  background: 'linear-gradient(135deg, rgba(155, 135, 245, 0.1) 0%, rgba(155, 135, 245, 0.02) 100%)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
  color: '#fff',
  fontSize: '14px',
  fontWeight: 500,
};

export const createInitialNodes = (selectedAIService: string, setSelectedAIService: (value: string) => void): Node[] => [
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
      ...nodeStyle,
      minWidth: '200px',
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
      ...nodeStyle,
      padding: '16px',
    },
    sourcePosition: Position.Right,
  },
  {
    id: 'pica',
    data: { label: 'Pica' },
    position: { x: 0, y: 300 },
    className: 'blur-card !bg-background/50 border border-[#9b87f5]/20',
    style: {
      ...nodeStyle,
      padding: '16px',
    },
    sourcePosition: Position.Right,
  },
  {
    id: 'version-control',
    data: { label: 'Version Control' },
    position: { x: 300, y: 150 },
    className: 'blur-card !bg-background/50 border border-[#9b87f5]/20',
    style: {
      ...nodeStyle,
      padding: '16px',
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `eu-${i + 1}`,
    data: { label: `EU ${i + 1}` },
    position: { x: 500, y: i * 80 },
    className: 'blur-card !bg-background/50 border border-[#9b87f5]/20',
    style: {
      ...nodeStyle,
      padding: '16px',
    },
    targetPosition: Position.Left,
  })),
  ...Array.from({ length: 3 }, (_, i) => ({
    id: `us-${i + 1}`,
    data: { label: `US ${i + 1}` },
    position: { x: 700, y: i * 80 + 160 },
    className: 'blur-card !bg-background/50 border border-[#9b87f5]/20',
    style: {
      ...nodeStyle,
      padding: '16px',
    },
    targetPosition: Position.Left,
  })),
];
