import React, { useEffect, useState } from "react"
import {apiTweetList} from "./lookup";

import {Tweet} from './detail'

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
            apiTweetList(props.username,handleTweetListLookup)
        }
    }, [tweetsInit, tweetsDidSet, setTweetsDidSet, props.username])


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

