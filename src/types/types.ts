export type Edge = {
  node: Node;
};

export type Node = {
  id: string;
  structureDefinition: StructureDefinition;
  description: string;
  shortDescription: string;
  attachments: [];
};

export type StructureDefinition = {
  title: string;
};

export type ContentNodeDTO = {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  attachments: [];
  position: number;
};
