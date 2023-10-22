export interface Project {
   data: {
    id: number;
    name: string;  
    tags: string[]; 
    description: string;
    createdAt: string;
    tecnologies: {
        name: string;
        icon: string;
      }[];
    liveOn: {
        name: string;
        icon: string;
      }[];
   }
}