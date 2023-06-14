import {Wrapper, Flex, Title} from './../../components/ui/index'
import PostCard from './../../components/PostCard/index'
import Post1 from './../../assets/post-1.png'
import Post2 from './../../assets/post-2.png'
import Post3 from './../../assets/post-3.png'
import Post4 from './../../assets/post-4.png'

const postData = [
    {
        id: 1,
        image: Post1,
        title: 'Diamond pattern',
        text: 'The diamond pattern is beautifully structured'
    },
    {
        id: 2,
        image: Post2,
        title: 'Zipper ',
        text: 'Zipper is lined with delicate blush-colored floater leather that matches the cord'
    },
    {
        id: 3,
        image: Post3,
        title: 'Base ',
        text: 'The leather base adds stability to the bag'
    },
    {
        id: 4,
        image: Post4,
        title: 'Handles',
        text: 'A knitted cord handle'
    },
]

function Posts() {
    return (
        <section>
            <Wrapper>
                <Title withBorder margin='70px 0 30px'>
                description
                </Title>
                <Flex align='baseline' gap='30px'>
                    {postData.map((item) => <PostCard key={item.id} {...item} />)}

                </Flex>
            </Wrapper>
        </section>
    )
}

export default Posts;