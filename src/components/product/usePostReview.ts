import ProductApi from "@src/common/api/product";
import { IPostReviewPayload } from "@src/common/types/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IUsePostReview {
  id?: string | string[];
  onSuccess?: () => void;
}

export const usePostReview = ({ id, onSuccess }: IUsePostReview) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, data } = useMutation(
    (payload: IPostReviewPayload) => {
      return ProductApi.postProductReview(payload);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["product-review", id]);
        onSuccess && onSuccess();
      },
      onError: () => alert("댓글 등록 실패"),
    }
  );

  return {
    postReview: mutate,
    isPostReviewLoading: isLoading,
    postReviewData: data,
  };
};
