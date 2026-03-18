export interface Project{
    id: string,
    slug: string,
    title: string,
    client: string,
    year: number,
    category:string,
    description:string,
    image:string,
    tags: string[],
    featured: boolean
}