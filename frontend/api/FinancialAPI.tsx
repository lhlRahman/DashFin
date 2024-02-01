import { CompanySearch } from "@/company"
import axios from "axios"

interface SearchResponse {
    response: CompanySearch[]
}

export const FinancialAPI = async (query: string) => {
    try {
        const response = await axios.get<SearchResponse>(`https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.FINANCIAL_API}`)
        return response.data
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.log('Error:', error.message)
            return error.message
        }
        else {
            console.log('Unexpected Error:', error)
            return 'Unexpected Error';
        }

}
}