"use client";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface UsePostQueryProps {
  query: string;
  onSuccessMessage?: string;
  onSuccessDescription?: string;
  auth?: boolean;
  onErrorMessage?: string;
  onErrorDescription?: string;
}

const UsePatchQuery = ({
  query,
  onErrorMessage,
  onSuccessDescription,
  auth = true,
  onSuccessMessage,
  onErrorDescription,
}: UsePostQueryProps) => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (payload: object) => {
      const { data } = await axios.patch(query, payload);
      router.refresh();
      return data;
    },
    onSuccess: async () => {
      return toast({
        title: onSuccessMessage,
        description: onSuccessDescription,
        variant: "default",
      });
    },
    onError: (error) => {
      if (auth) {
        if (error instanceof AxiosError) {
          if (error.response?.status === 409)
            return toast({
              title: onErrorMessage,
              description: onErrorDescription,
              variant: "destructive",
            });
        }
      }
      return toast({
        title: "ops... some thing want wrong",
        description: "please try later",
        variant: "destructive",
      });
    },
  });
};
export default UsePatchQuery;
