export interface ProfileType<T> {
  name: string
  age: number|string
  like: 'Sauna'|'Sushi'|'Travel'
  Other?: T
}
