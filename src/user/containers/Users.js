import React from 'react';
import UserList from '../../user/components/UsersList';
const Users = () => {

    const USERS  = [{
        id: "1",
        image: 'https://www.google.com/search?q=image&rlz=1C5CHFA_enAU761AU761&sxsrf=ALeKk00T2RF7x6_t3cfujAnl9yBv4sQRSg:1610945988669&tbm=isch&source=iu&ictx=1&fir=-L6LHyb2Sp4eyM%252C8bmJe6HdtyxvMM%252C_&vet=1&usg=AI4_-kQJw3fEw7hd13yBK7gE-B_KPIjqqQ&sa=X&ved=2ahUKEwi5oqC72aTuAhXMhOYKHd0bDxEQ9QF6BAgLEAE&biw=1309&bih=746#imgrc=-L6LHyb2Sp4eyM',
        name: "Adam",
        places: "3"
    }];


    return <UserList items = {USERS}/>;
}

export default Users;