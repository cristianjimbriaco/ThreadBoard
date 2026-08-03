import { useMemo, useState, type ReactNode } from 'react';
import {
  Background,
  Controls,
  ReactFlow,
  useNodesState,
  type Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './BoardCanvas.css';

type BoardNodeKind = 'SCENE' | 'THEORY';

type BoardNodeData = Record<string, unknown> & {
  label: ReactNode;
  title: string;
  kind: BoardNodeKind;
};

type BoardNode = Node<BoardNodeData>;

const initialNodes: BoardNode[] = [
  {
    id: 'scene-demo',
    position: {
      x: 100,
      y: 100,
    },
    data: {
      title: 'Opening Scene',
      kind: 'SCENE',
      label: (
        <article className="board-node__content">
          <span className="board-node__type">Scene</span>
          <strong className="board-node__title">Opening Scene</strong>
          <p className="board-node__description">
            The protagonist discovers the first clue.
          </p>
        </article>
      ),
    },
    className: 'board-node board-node--scene',
    style: {
      width: 230,
    },
  },
  {
    id: 'theory-demo',
    position: {
      x: 470,
      y: 200,
    },
    data: {
      title: 'Hiddeb Connection',
      kind: 'THEORY',
      label: (
        <article className="board-node__content">
          <span className="board-node__type">Theory</span>
          <strong className="board-node__title">Hidden Connection</strong>
          <p className="board-node__description">
            The clue connect two different timelines.
          </p>
        </article>
      ),
    },
    className: 'board-node board-node--theory',
    style: {
      width: 230,
    },
  },
];

export function BoardCanvas() {
  const [nodes, , onNodesChange] = useNodesState<BoardNode>(initialNodes);

  const [selectnodeId, setSelectNodeId] = useState<string | null>(null);

  const selectedNode = useMemo(
    () => nodes.find((node) => node.id === selectnodeId) ?? null,
    [nodes, selectnodeId],
  );

  return (
    <div className="board-canvas">
      <ReactFlow
        nodes={nodes}
        edges={[]}
        onNodesChange={onNodesChange}
        onNodeClick={(_, node) => setSelectNodeId(node.id)}
        onPaneClick={() => setSelectNodeId(null)}
        nodesConnectable={false}
        fitView
        fitViewOptions={{
          padding: 0.25,
        }}
        minZoom={0.35}
        maxZoom={1.8}
        panOnDrag
        zoomOnScroll
      >
        <Background gap={28} size={1.4} />
        <Controls position="bottom-right" showInteractive={false} />
      </ReactFlow>
      <div className="board-canvas__status" aria-live="polite">
        {selectedNode ? (
          <>
            Selected:
            <strong>{selectedNode.data.title}</strong>
            <span>{selectedNode.data.kind}</span>
          </>
        ) : (
          <span>Drag a node or click it to select it</span>
        )}
      </div>
    </div>
  );
}
