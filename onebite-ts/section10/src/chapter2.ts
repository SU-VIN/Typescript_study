/**
 * Mapped타입 기반
 * Pick<T,K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 그런 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

//Pick 직접 구현
type Pick<T, K extends keyof T> = {
  //K extends 'title'|'tags'|'content'|'thumbnailURL'
  [key in K]: T[key];
};

//타이틀과 콘텐츠 프로퍼티만 뽑음
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/**
 * Omit<T,K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

//Omit 직접 구현
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
//T = Post , K = 'title'
//Pick<Post, Exclude<key of Post, 'title'>>
//Pick<Post, Exclude<'title'|'tags'|'content'|'thumbnailURL', 'title'>>
//Pick<Post , 'tags'|'content'|'thumbnailURL'>

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K,V>
 */

// type ThumbnailLegacy = {
//   large: { url: string };
//   medium: { url: string };
//   small: { url: string };
//   watch: { url: string };
// };

//record 직접구현

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

//중복을 막을 수 있음
type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;
