import React, { useEffect, useState } from "react";

import {
    apiTweetAction,
    apiTweetCreate,
    apiTweetList
} from "./lookup";


export function TweetsComponents(props) {
    const textAreaRef = React.createRef()
    const [newTweets, setNewTweets] = useState([])
    const handleBackendUpdate = (Response, status) => {
        //a backend api response
        let tempNewTweets = [...newTweets]
        if (status === 201) {
            tempNewTweets.unshift(Response)
            setNewTweets(tempNewTweets)
        } else {
            alert("An error has occured")
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const newVal = textAreaRef.current.value
        //backend api request
        apiTweetCreate(newVal, handleBackendUpdate)
        textAreaRef.current.value = ''

    }
    return <div className={props.className}>
        <div className='col-12 mb-3'>
            <form onSubmit={handleSubmit}>
                <textarea ref={textAreaRef} required={true} className='col-12 mb-3 form-controll'>
                </textarea>
                <button type='submit' className='btn btn-primary my-3'>Tweet</button>
            </form>
        </div>
        <TweetsList newTweets={newTweets} />
    </div>
}


export function TweetsList(props) {
    const [tweetsInit, setTweetsInit] = useState(props.newTweets ? props.newTweets : [])
    const [tweets, setTweets] = useState([])
    const [tweetsDidSet, setTweetsDidSet] = useState(false)
    // setTweetsInit([...props.newTweets].concat(tweetsInit))
    useEffect(() => {
        const final = [...props.newTweets].concat(tweetsInit) //this line has to come first or new tweets wont be on top
        if (final.length !== tweets.length) {
            setTweets(final)
        }

    }, [props.newTweets, tweets, tweetsInit])

    useEffect(() => {
        if (tweetsDidSet === false) {


            const handleTweetListLookup = (response, status) => {
                if (status === 200) {
                    // const finalTweetsInit = [...response].concat(tweetsInit)
                    setTweetsInit(response)
                    setTweetsDidSet(true)
                } else {
                    alert("there was an error")
                }
            }
            apiTweetList(handleTweetListLookup)
        }
    }, [tweetsInit, tweetsDidSet, setTweetsDidSet])


    const handleDidRetweet = (newTweet) => {
        const updatedTweetInit = [...tweetsInit]
        updatedTweetInit.unshift(newTweet)
        setTweetsInit(updatedTweetInit)
        const updatedFinalTweets = [...tweets]
        updatedFinalTweets.unshift(tweets)
        setTweets(updatedFinalTweets)
    }
    return tweets.map((item, index) => {
        return <Tweet tweet={item} 
        didRetweet={handleDidRetweet}
        className='my-5 py-5 border bg-white text-dark' 
        key={`${index}-{item.id}`} />
    })
}


export function ActionBtn(props) {
    const { tweet, action, didPerformAction } = props
    const likes = tweet.likes ? tweet.likes : 0
    const className = props.className ? props.className : 'btn btn-primary btn-group'
    const actionDisplay = action.display ? action.display : 'Action'


    const handleActionBackendEvent = (response, status) => {
        if ((status === 200 || status === 201) && didPerformAction) {
            // setLikes(response.likes)
            didPerformAction(response,status)
        }
    }
    const handleClick = (event) => {
        event.preventDefault()
        apiTweetAction(tweet.id, action.type, handleActionBackendEvent)

    }
    const display = action.type === 'like' ? `${likes} ${actionDisplay}` : actionDisplay
    return <button className={className} onClick={handleClick}> {display}</button>
}


export function ParentTweet(props) {
    const { tweet } = props
    return tweet.parent ? <div className='row'>
        <div className='col-11 mx-auto p-3 border rounded bg'>
            <p className='mb-0 text-muted small'>Retweet</p>
            <Tweet hideActions className={' '} tweet={tweet.parent} />
        </div>
    </div> : null
}


export function Tweet(props) {
    const { tweet,didRetweet,hideActions } = props
    const [actionTweet, setActionTweet] = useState(props.tweet ? props.tweet : null)
    const className = props.className ? props.className : 'col-10 mx-auto col-md-6'
    const handlePerformAction = (newActionTweet, status) => {
        if (status ===200){
            setActionTweet(newActionTweet)
        }else if (status === 201){
            if (didRetweet){
                didRetweet(newActionTweet)
            }
        }
        
    }

    return <div className={className}>
        <div>
            <p>{tweet.id}-{tweet.content}</p>
            <ParantTweet tweet={tweet} />
        </div>
        {(actionTweet && hideActions!==true)&&<div className='btn btn-group'>
            <ActionBtn tweet={actionTweet} didPerformAction={handlePerformAction} action={{ type: "like", display: "Likes" }} />
            <ActionBtn tweet={actionTweet} didPerformAction={handlePerformAction} action={{ type: "unlike", display: "Unlikes" }} />
            <ActionBtn tweet={actionTweet} didPerformAction={handlePerformAction} action={{ type: "retweet", display: "Retweet" }} />
        </div>}
    </div>
}

