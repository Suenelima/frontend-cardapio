import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import type { UseQueryResult } from '@tanstack/react-query'
import type { FoodData } from "../interface/FoodData";


const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080'

export function useFoodData(): UseQueryResult<FoodData[], Error> {
    return useQuery<FoodData[]>({
        queryKey: ['food-data'],
        queryFn: async () => {
            const response = await axios.get(`${API_URL}/food`)
            return response.data
        }
    })
}
