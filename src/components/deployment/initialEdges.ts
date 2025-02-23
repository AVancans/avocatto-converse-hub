
import { Edge } from '@xyflow/react';

const baseEdgeStyle = {
  strokeWidth: 1.5,
  strokeDasharray: '5,5',
  opacity: 0.5,
};

export const createInitialEdges = (): Edge[] => [
  { 
    id: 'e-fal-vc', 
    source: 'fal', 
    target: 'version-control',
    animated: true,
    style: { 
      ...baseEdgeStyle,
      stroke: '#9b87f5',
    }
  },
  { 
    id: 'e-pica-vc', 
    source: 'pica', 
    target: 'version-control',
    animated: true,
    style: { 
      ...baseEdgeStyle,
      stroke: '#9b87f5',
    }
  },
  { 
    id: 'e-ai-vc', 
    source: 'ai-service', 
    target: 'version-control',
    animated: true,
    style: { 
      ...baseEdgeStyle,
      stroke: '#9b87f5',
    }
  },
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `e-vc-eu-${i + 1}`,
    source: 'version-control',
    target: `eu-${i + 1}`,
    animated: true,
    style: { 
      ...baseEdgeStyle,
      stroke: '#9b87f5',
    }
  })),
  ...Array.from({ length: 3 }, (_, i) => ({
    id: `e-vc-us-${i + 1}`,
    source: 'version-control',
    target: `us-${i + 1}`,
    animated: true,
    style: { 
      ...baseEdgeStyle,
      stroke: '#f5879b',
    }
  })),
];
