import {
  getDocs,
  collection,
  DocumentData,
  CollectionReference,
  addDoc,
} from 'firebase/firestore';
import { db } from '@/firebase';
import { Posts } from './type';
import { Reviews } from './type';
import { getErrorMessage } from '@/utils';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

const postsCol = createCollection<Posts>('posts');

export const getPostDocs = async () => {
  const postDocs = await getDocs(postsCol);
  const postData = postDocs.docs.map((x) => x.data());
  return postData;
};

const reviewsCol = createCollection<Reviews>('reviews');
export const getReviewDocs = async () => {
  const reviewDocs = await getDocs(reviewsCol);
  const reviewData = reviewDocs.docs.map((x) => x.data());
  return reviewData;
};

export const postReviewDocs = async ({
  userId,
  postId,
  date,
  score,
  images,
  text,
}: Reviews) => {
  const docRef = await addDoc(collection(db, 'reviews'), {
    userId,
    postId,
    date,
    score,
    images,
    text,
  });
  console.log('Document written with ID: ', docRef.id);
};

// storage (이미지)
const storage = getStorage();

export const postImage = async (file: any) => {
  try {
    const storageRef = ref(storage, file.name);

    await uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });

    return file.name;
  } catch (e) {
    console.log(getErrorMessage('파일이 정상적으로 업로드되지 않았습니다.'));
  }
};