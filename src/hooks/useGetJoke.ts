import useSWR from "swr"


async function fetcher (key: string) {
    return fetch(key).then((res) => res.json());
}

export const useGetJoke = () => {
    const {data, error, isLoading} = useSWR(import.meta.env.VITE_TEST, fetcher);

    return {
        data : data,
        error : error,
        isLoading : isLoading
    }
}