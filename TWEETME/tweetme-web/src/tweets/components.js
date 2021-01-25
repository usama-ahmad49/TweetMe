import React, {useEffect,useState} from "react"
import {TweetsList} from './list'
import {Tweet} from './detail'
import {apiTweetdetail} from './lookup'
import {TweetCreate} from './create'



export function TweetsComponents(props) {
    const canTweet =props.canTweet ==="false" ? false : true
    const [newTweets, setNewTweets] = useState([])
    const handleNewTweet = (newTweet) => {
        //a backend api response
        let tempNewTweets = [...newTweets]
        tempNewTweets.unshift(newTweet)
        setNewTweets(tempNewTweets)
    }
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     const newVal = textAreaRef.current.value
    //     //backend api request
    //     apiTweetCreate(newVal, handleBackendUpdate)
    //     textAreaRef.current.value = ''

    // }
    return <div className={props.className}>
        {canTweet ===true && <TweetCreate didTweet={handleNewTweet} className='col-12 mb-3' />}
        <TweetsList newTweets={newTweets} {...props}/>
    </div>
    
}

export function TweetDetailComponent(props){
    const {tweetid} =props
    const [didLookup, setDidLookup] = useState(false)
    const [tweet, setTweet] = useState(null)
    const handleBackendLookup = (Response,status) => {
        if (status===200){
            setTweet(Response)
        }else{
            alert("There was an error finding your tweet")
        }
    }
    useEffect(()=>{
        if (didLookup===false){
            apiTweetdetail(tweetid,handleBackendLookup)
            setDidLookup(true)
        }
    }, [tweetid, didLookup, setDidLookup])
    return tweet===null ? null : <Tweet tweet ={tweet} className={props.className}/>
}