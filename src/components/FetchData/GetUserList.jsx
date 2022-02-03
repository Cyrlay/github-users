import {useState, useEffect} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import UserListCard from '../UserListCard/UserListCard'
import {teamBadge} from '../../scripts/TeamChoose/TeamChoose'
import {Container} from "react-bootstrap";
import PageLoader from "../PageLoader/PageLoader";
import axios from "axios";

function GetUserList() {

    const PER_PAGE = 9
    const [items, setItems] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const [since, setSince] = useState(0)
    const [loader, setLoader] = useState(null)

    useEffect(() => {
        const initView = async () => {

            const res = await axios.get(`https://api.github.com/users?since=0&per_page=${PER_PAGE}`)
            const data = res.data
            setItems(data)
            setSince(data.at(-1).id)
            setLoader(true)
        }

        initView().catch(error => {
            console.log('Something went wrong')
            return error
        })
    }, [])

    const fetchData = async () => {
        const res = await axios.get(`https://api.github.com/users?since=${since}&per_page=${PER_PAGE}`)
        const data = await res.data

        setItems([...items, ...data])
        if (data.length === 0) {
            setHasMore(false)
        }
        setSince(data.at(-1).id)
    }

    return (loader ?

        <InfiniteScroll dataLength={items.length}
                        next={fetchData}
                        hasMore={hasMore}
                        loader={<h4>&nbsp;</h4>}
                        height={546}
                        endMessage={<p style={{textAlign: "center"}}>
                            <b>Yay! You have seen it all</b>
                        </p>}
        >

            <Container className={'user-list'}>
                {items.map((item) => {
                    return <UserListCard
                        key={item.id}
                        user_id={item.id}
                        user_avatar={item.avatar_url}
                        user_login={item.login}
                        user_page={item.html_url}
                        user_team={teamBadge(item.id)}
                    />
                })}
            </Container>

        </InfiniteScroll> : <PageLoader/>)
}

export default GetUserList