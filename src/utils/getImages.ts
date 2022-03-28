import { api } from '../services/api';

// type ImageType = {
//   description: string;
//   id: string;
//   title: string;
//   ts: Date;
//   url: string;
// };

// interface ResponseProps {
//   data: ImageType[];
//   after: number | null;
// }

export const getImages = async ({ pageParam = null }): Promise<any> => {
  const { data } = await api.get(`/api/images`, {
    params: {
      after: pageParam,
    },
  });

  return data;
};
