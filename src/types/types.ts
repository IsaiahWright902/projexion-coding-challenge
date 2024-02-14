export type Edge = {
  node: Node;
};

export type Node = {
  id: string;
  structureDefinition: StructureDefinition;
  description: string;
  shortDescription: string;
  attachments: [];
  hasBeenPublishedOnce: boolean;
  instructors: Instructor[];
  image: Image;
};

export type Instructor = {
  name: string;
  id: string;
};

export type Image = {
  url: string;
  name: string;
  id: string;
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
  hasBeenPublishedOnce: boolean;
  instructors: Instructor[];
  image: Image;
};
