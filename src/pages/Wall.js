import cx from 'classnames';
import React from 'react';
import NewPost from '../assets/components/wall/newPost';
import PostCard from '../assets/components/wall/postCards/postCard';
import WallHeader from '../assets/components/wall/wallHeader';
import styles from '../assets/scss/design.module.scss';

function Wall() {

    const postItems = [
        {id: 12, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", attachment: null, images: null},
        {id: 122, content: "Lorem Ipsum is simply dummy text of to", attachment: null, images: ["https://picsum.photos/400"]},
        {id: 122, content: "Lorem Ipsum is simply dummy text of to", attachment: null, images: ["https://picsum.photos/500","https://picsum.photos/450"]},
        {id: 122, content: "Lorem Ipsum is simply dummy text of to", attachment: null, images: ["https://picsum.photos/500","https://picsum.photos/450","https://picsum.photos/470"]},
        {id: 122, content: "Lorem Ipsum is simply dummy text of to", attachment: null, images: ["https://picsum.photos/500","https://picsum.photos/450","https://picsum.photos/470","https://picsum.photos/570"]},
        {id: 122, content: "Lorem Ipsum is simply dummy text of to", attachment: null, images: ["https://picsum.photos/500","https://picsum.photos/450","https://picsum.photos/470","https://picsum.photos/570","https://picsum.photos/670"]},
        {id: 122, content: "Lorem Ipsum is simply dummy text of to", attachment: null, images: ["https://picsum.photos/500","https://picsum.photos/450","https://picsum.photos/470","https://picsum.photos/570","https://picsum.photos/650","https://picsum.photos/660"]},
        {id: 122, content: "Lorem Ipsum is simply dummy text of to", attachment: {link: "ssdfsdf", type: "pdf"}, images: null},
        {id: 122, content: "Lorem Ipsum is simply dummy text of to", attachment: {link: "ssdfsdf", type: "zip"}, images: null},
    ];
            
    return (
        <div className={styles.kanban_container}>
            <WallHeader/>
            <div className={cx(styles.right_content_container, styles.wall_container)}>
                <div className={styles.wall_left_container}>
                    <NewPost/>
                    {postItems.map((post, index) => {
                        return (
                            <PostCard post={post} index={index}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Wall;