export interface PartialProjectData {
  id: number;
  title: string;
  description: string;
  stars: number;
  is_active: boolean;
  url: string;
  start_date: string;
  technologies: TechnologyData[];
  authors: string[];
}

export interface CompleteProjectData {
  id: number;
  title: string;
  description: string;
  stars: number;
  is_active: boolean;
  url: string;
  start_date: string;
  technologies: TechnologyData[];
  users: UserData[];
  stats: StatisticsData;
}

export interface TechnologyData {
  id: number;
  title: string;
  is_hot: boolean;
  resource_url: string;
}

export interface UserData {
  id: number;
  username: string;
  email: string;
  github_url: string;
  name: string;
  is_active: boolean;
  linkedin_url: string;
}

export interface StatisticsData {
  id: number;
  number_of_interested: number;
  subscriptions: number;
  seen_frequency: number;
}