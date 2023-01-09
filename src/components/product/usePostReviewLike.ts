import ProductApi from "@src/common/api/product";
import { IPostReviewLikePayload } from "@src/common/types/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IUsePostReviewLike {
  id: number;
  onSuccess?: () => void;
}

export const usePostReviewLike = ({ id, onSuccess }: IUsePostReviewLike) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (payload: IPostReviewLikePayload) => {
      return ProductApi.postProductReviewLike(payload);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["product-review", id]);
        onSuccess && onSuccess();
      },
      onError: () => alert("좋아요 등록 실패"),
    }
  );

  return {
    postReviewLike: mutate,
  };
};
