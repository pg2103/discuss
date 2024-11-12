
const paths={
    home(){
        return '/';
    },
    topicShow(topicSlug:string){
        return `/topic/${topicSlug}`;
    },
    postCreate(topicSlug:string){
        return  `/topic/${topicSlug}/post/new`;
    },
    postShow(topicSlug:string,postId:string){
        return `/topic/${topicSlug}/post/${postId}`;
    }
}
export default paths;