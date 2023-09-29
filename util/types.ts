// Interface to defining our object of response functions
export interface ResponseFuncs {
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
    MERGE?: Function
}

export interface Game {
    _id?: number
    host: string
    playersCount: number
    players: string[]
    isCompleted: boolean
    isStarted: boolean
    winner: string
    date: Date
    location: string
}