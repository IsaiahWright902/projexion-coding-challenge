import { client } from "../../App";
import { CONTENT_QUERIES } from "../queries/ContentQueries";

export async function GetContentNodes() {
  return await client
    .query({
      query: CONTENT_QUERIES,
    })
    .then(async (res) => {
      await res.data;

      const mapped = res.data.Admin.Tree.GetContentNodes.edges.map((node) => ({
        attachments: node?.attachments,
        description: node?.description,
      }));

      return mapped;
    });
}
