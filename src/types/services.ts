// Types for services data structure

export interface Service {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  modalImageUrl?: string;
  category: string;
  features: string[];
}

export interface ServiceState {
  selectedService: Service | null;
  isModalOpen: boolean;
  isLoading: boolean;
  error: string | null;
} 