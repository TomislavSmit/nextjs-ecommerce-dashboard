export interface User {
    address: {
        geolocation: {
            lat: string
            long: string
        }
        city: string
        street: string
        number: number
        zipcode: string
    }
    email: string
    id: number
    name: {
        firstname: string
        lastname: string
    }
    password: string
    phone: string
    username: string
}
