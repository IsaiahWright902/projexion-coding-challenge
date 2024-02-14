import { Paper, Stack, Typography } from "@mui/material";
import { ContentNodeDTO } from "../../types/types";

export default function ContentNode({ node }: { node: ContentNodeDTO }) {
  return (
    <Paper elevation={4} key={node.id} style={{ padding: "15px" }}>
      <Stack spacing={1}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography color={`primary.dark`} variant="h5">
            {node.title}
          </Typography>
          {node.shortDescription && (
            <Typography>- {node.shortDescription}</Typography>
          )}
        </Stack>

        <div dangerouslySetInnerHTML={{ __html: node.description }}></div>
      </Stack>
    </Paper>
  );
}
