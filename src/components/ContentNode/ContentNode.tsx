import { Paper, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ContentNodeDTO } from "../../types/types";

export default function ContentNode({ node }: { node: ContentNodeDTO }) {
  return (
    <Paper elevation={4} key={node.id} style={{ padding: "15px" }}>
      <Stack spacing={1}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography color={`primary.dark`} variant="h5">
              {node.title}
            </Typography>
            {node.instructors.map((instructor) => (
              <Typography key={instructor.id}>- {instructor.name}</Typography>
            ))}
          </Stack>

          {node.hasBeenPublishedOnce && (
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography>Published</Typography>
              <CheckCircleIcon color="primary" fontSize="small" />
            </Stack>
          )}
        </Stack>

        {node.shortDescription && (
          <Typography>{node.shortDescription}</Typography>
        )}

        {node.image && (
          <img
            style={{ width: "300px" }}
            src={node.image.url}
            alt={node.image.name}
          />
        )}

        <div dangerouslySetInnerHTML={{ __html: node.description }}></div>
      </Stack>
    </Paper>
  );
}
