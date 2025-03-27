// Types for portfolio data structure

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  location?: string;
  category: string;
  tags?: string[];
}

export interface PortfolioAlbum {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  category: string;
  projects: Project[];
  featured?: boolean;
}

export interface PortfolioState {
  selectedAlbum: PortfolioAlbum | null;
  isModalOpen: boolean;
  isLoading: boolean;
  error: string | null;
} 