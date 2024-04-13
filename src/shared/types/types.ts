export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostItemsProps {
  post: IPost;
}
export interface ScrollPositionState {
  scrollPosition: number;
}
export interface ApiOptions {
  limit: number;
}
export interface CurrentPost {
  currentId: number;
}