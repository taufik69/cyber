// navitem interface
export interface Navitem{
    id:number;
    name:string;
    path:string
}
// category
export interface Category{
    id:number;
    name:string;
    path:string;
    icon?:JSX.Element;
}