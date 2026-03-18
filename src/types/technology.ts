export interface Technology {
     id: string,
    name: string,
    description: string,
    icon: string
}

export interface TechnologyCategory{
     id: string,
    name: string,
    description: string,
    icon: string,
    technologies: Technology[]
}