import {
  useEditCategoryQuery,
  useGenerateQuery,
  useGenerateResponseQuery,
  useGetAllConversationQuery,
  useGetCategoryQuery,
  useGetResponseQuery,
  useModifyQuery,
  useSaveQuery,
} from "../utils/query";

// export const useGenrateQueryApi = ()=> useGenerateQuery("https://fakestoreapi.com/products")
export const useGenrateQueryApi = () =>
  useGenerateQuery("http://192.168.2.228:8009/query/");
export const useGenrateResponseApi = () =>
  useGenerateResponseQuery("http://192.168.2.228:8009/submit_query/");
export const useGetResponseApi = (id, isHistory) =>
  useGetResponseQuery(
    isHistory
      ? `http://192.168.2.228:8009/conversations/${id}/`
      : `http://192.168.2.228:8009/submit_query/${id}/`,
    id
  );
export const useGetAllConverstionApi = () =>
  useGetAllConversationQuery(`http://192.168.2.228:8009/conversations/`);
export const useSaveQueryApi = () =>
  useSaveQuery(`http://192.168.2.228:8009/queries/`);
export const useModifyQueryApi = (id) =>
  useModifyQuery(`http://192.168.2.228:8009/modify_response/${id}/`);

  export const useEditCategoryApi = ()=>useEditCategoryQuery(`http://192.168.2.228:8009/choices/`)
  export const useGetEditCategoryApi = ()=>useGetCategoryQuery(`http://192.168.2.228:8009/choices/`)
