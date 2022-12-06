
export type Info = {
    count: number,
    pages: number,
}

export type Results = {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    origin: { name: string },
    image: string,
}

export type CharactersResponseBody = { info: Info, results: Results[], errorText: string }

export type CharactersData = {
    pages:[] | unknown,
    pageParams: [] | unknown,
    info: Info,
    results: Results[],
    errorText: string
}

export type GetCharactersProps = { page: number, name: string, species: string }

export type UseGetInfiniteCharactersQueryProps = { name: string, species: string }

export type CharactersErrorResponse = {
    response: {
        data: {
            error: string
        }
    }
}
