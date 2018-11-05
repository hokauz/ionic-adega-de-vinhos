export interface Wine {
  id          : number, 
  name        : string, 
  harvest     : number, 
  type        : string, 
  description : string, 
  grape       : string, 
  stock       : number,
  country_iso : string,
  country_name: string, 
  image      ?: string
}

export function newWine(id: number): Wine {
  return {
    id          : id,
    name        : '',
    harvest     : undefined,
    type        : '',
    description : '',
    grape       : '',
    stock       : 0,
    country_iso : '',
    country_name: '',
    image       : ''
  }
 
}