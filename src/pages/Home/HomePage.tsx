import { useQuery } from "@apollo/client";
import TopDivider from "../Login/components/TopDivider";
import { CONTENT_QUERIES } from "../../GraphQl/queries/ContentQueries";
import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { Edge, ContentNodeDTO } from "../../types/types";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ContentNode from "../../components/ContentNode/ContentNode";

export default function HomePage() {
  const { contentNodes, isLoading } = useContentNodes();

  console.log(contentNodes);

  return (
    <>
      <TopDivider />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Box sx={{ height: "80vh", overflowY: "auto", padding: "10px" }}>
          <Stack spacing={4} pt={4} pb={4}>
            {contentNodes.map((node) => (
              <ContentNode key={node.id} node={node} />
            ))}
          </Stack>
        </Box>
      )}
    </>
  );
}

function useContentNodes() {
  const { loading, error, data } = useQuery(CONTENT_QUERIES);

  const [contentNodes, setContentNodes] = useState<ContentNodeDTO[]>([]);

  useEffect(() => {
    if (data) {
      console.log(data);

      const mapped = data.Admin.Tree.GetContentNodes.edges.map(
        (edge: Edge, idx: number) => ({
          id: edge.node?.id,
          description: edge.node?.description,
          shortDescription: edge.node?.shortDescription,
          attachments: edge.node?.attachments,
          title: edge.node.structureDefinition.title,
          number: idx + 1,
        })
      );

      setContentNodes(mapped.filter((x: ContentNodeDTO) => !!x.description));
    }
  }, [data, loading]);

  return {
    contentNodes: contentNodes,
    isLoading: loading,
    error: error,
  };
}
