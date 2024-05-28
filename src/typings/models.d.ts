namespace Models {
  export interface CodeSnippet {
    code: string;
  }
  export interface Project {
    name: string;
    description: string;
    technologies: string[];
    image: string;
    url: string;
    detailedDescription: string;
    frontend: string[];
    backend: string[];
    infra: string[];
    languages: string[];
  }
}
