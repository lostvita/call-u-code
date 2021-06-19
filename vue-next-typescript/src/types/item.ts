export interface ObjectOf<T> {
  [_: string]: T
}

export interface FilmItem {
  title: string,
  picture: string,
  description: string,
  category: string,
  region: string,
  id: string | number
}