import { useQuery } from "@apollo/client";
import TopDivider from "../../components/TopDivider/TopDivider";
import { CONTENT_NODE_QUERY } from "../../GraphQl/queries/ContentQueries";
import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { Edge, ContentNodeDTO } from "../../types/types";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ContentNode from "../../components/ContentNode/ContentNode";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function HomePage() {
  const { contentNodes, isLoading, setContentNodes } = useContentNodes();

  const reorder = (
    list: ContentNodeDTO[],
    startIndex: number,
    endIndex: number
  ) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      contentNodes,
      result.source.index,
      result.destination.index
    );

    setContentNodes(items);
  };

  return (
    <>
      <TopDivider />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Box sx={{ height: "80vh", overflowY: "auto", padding: "10px" }}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <Stack spacing={4} pt={4} pb={4}>
                    {contentNodes.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <ContentNode node={item} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Stack>
                </div>
              )}
            </Droppable>
          </Box>
        </DragDropContext>
      )}
    </>
  );
}

function useContentNodes() {
  const { loading, error, data } = useQuery(CONTENT_NODE_QUERY);

  const [contentNodes, setContentNodes] = useState<ContentNodeDTO[]>([]);

  useEffect(() => {
    if (data) {
      const mapped = data.Admin.Tree.GetContentNodes.edges.map(
        (edge: Edge, idx: number) => ({
          id: edge.node?.id,
          description: edge.node?.description,
          shortDescription: edge.node?.shortDescription,
          attachments: edge.node?.attachments,
          title: edge.node.structureDefinition.title,
          number: idx + 1,
          hasBeenPublishedOnce: edge.node.hasBeenPublishedOnce,
          instructors: edge.node.instructors,
          image: edge.node.image,
        })
      );

      setContentNodes(mapped);
    }
  }, [data]);

  return {
    contentNodes: contentNodes,
    isLoading: loading,
    error: error,
    setContentNodes: setContentNodes,
  };
}
