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
  }
}
