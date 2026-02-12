import useSWR from "swr";
import fetcher from "@/lib/fetcher";

function usePosts() {
  const { isLoading, data, error, mutate } = useSWR<MyNextApp.Post[]>(
    "/api/posts",
    fetcher,
  );
  return { isLoading, data, error, mutate };
}
export default usePosts;
