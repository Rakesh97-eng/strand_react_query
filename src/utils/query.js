import { useMutation, useQuery } from "@tanstack/react-query"
import { api, authApi } from "./api"



//Auth query

export const useLoginQuery = (url,data)=>{
    return useMutation({
        mutationFn:(data)=>authApi.post(url,data),
        onMutate:data=>{
            console.log('dataaa',data);
           return data
        },
        onSuccess:success=>{
            sessionStorage.setItem('token',success?.data?.access)
            return success
        }
    })
}

export const useGenerateQuery = (url,data)=>{
    return useMutation({
        mutationFn:(data)=>api.post(url,data),
        onMutate:data=>{
            console.log('dataaa',data);
           return data
        },
        onSuccess:success=>{
            console.log("sucecesss",success);
            return success
        }
    })
}

export const useSaveQuery = (url,data)=>{
    return useMutation({
        mutationFn:(data)=>api.post(url,data),
        onMutate:data=>{
            console.log('dataaa',data);
           return data
        },
        onSuccess:success=>{
            console.log("sucecesss",success);
            return success
        }
    })
}
export const useModifyQuery = (url,data)=>{
    return useMutation({
        mutationFn:(data)=>api.post(url,data),
        onMutate:data=>{
            console.log('dataaa',data);
           return data
        },
        onSuccess:success=>{
            console.log("sucecesss",success);
            return success
        }
    })
}
export const useEditCategoryQuery = (url,data)=>{
    return useMutation({
        mutationFn:(data)=>api.post(url,data),
        onMutate:data=>{
            console.log('dataaa',data);
           return data
        },
        onSuccess:success=>{
            console.log("sucecesss",success);
            return success
        }
    })
}



export const useGenerateResponseQuery = (url,data)=>{
    return useMutation({
        mutationFn:(data)=>api.post(url,data),
        onMutate:data=>{
            console.log('dataaa',data);
           return data
        },
        onSuccess:success=>{
            console.log("sucecesss",success);
            return success
        }
    })
}

export const useGetResponseQuery = (url,id)=>{
    return useQuery({
        queryKey: [id],
        queryFn:()=>api.get(url),
        // enabled: id
    })
}
export const useGetCategoryQuery = (url,id)=>{
    return useQuery({
        queryKey: [id],
        queryFn:()=>api.get(url),
        // enabled: id
    })
}


export const useGetAllConversationQuery = (url)=>{
    return useQuery({
        queryFn:()=>api.get(url)
    })
}



// export useGetGeneratedQuery =()