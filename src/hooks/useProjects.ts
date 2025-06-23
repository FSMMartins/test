import { useState, useEffect } from 'react';

interface Project {
  id: string;
  name: string;
  year: string;
  tags: string[];
  description: string;
  thumbnail: string;
  images: string[];
}

interface ProjectInfo {
  name: string;
  year: string;
  tags: string[];
  description: string;
  thumbnail?: string;
  images?: string[];
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        // Get all project folders by trying to fetch known projects
        // In a real implementation, you'd need a backend API to list directories
        const projectFolders = [
          'porsche-911', 'ferrari-250gt', 'jaguar-e-type', 'mustang-fastback',
          'corvette-stingray', 'bmw-2002', 'alfa-romeo-giulia', 'mercedes-280sl',
          'aston-martin-db5', 'triumph-tr6', 'lotus-elan', 'datsun-240z'
        ];
        
        const loadedProjects: Project[] = [];
        
        for (const folder of projectFolders) {
          try {
            const basePath = import.meta.env.PROD ? '/desire-classic-car' : '';
            const response = await fetch(`${basePath}/projects/${folder}/info.json`);
            if (response.ok) {
              const info: ProjectInfo = await response.json();
              loadedProjects.push({
                id: folder,
                name: info.name,
                year: info.year,
                tags: info.tags,
                description: info.description,
                thumbnail: info.thumbnail ? `${basePath}${info.thumbnail}` : `${basePath}/placeholder.svg`,
                images: info.images ? info.images.map(img => `${basePath}${img}`) : [`${basePath}/placeholder.svg`]
              });
            }
          } catch (error) {
            console.log(`Project ${folder} not found, skipping`);
          }
        }
        
        setProjects(loadedProjects);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return {
    projects,
    loading
  };
};