export interface ProjectDeclaration {
  id: number;
  title: string;
  description: string;
  stars: number;
  is_active: boolean;
  url: string;
  start_date: string;
  technologies: TechnologyDeclaration[];
}

export interface TechnologyDeclaration {
  id: number;
  title: string;
  is_hot: boolean;
  resource_url: string;
}
