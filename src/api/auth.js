import { useLoginQuery } from "../utils/query";

export const useLoginApi = ()=>useLoginQuery('http://192.168.2.228:8009/api/token/')