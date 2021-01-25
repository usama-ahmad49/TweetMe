import React from "react"
import {apiTweetCreate} from "./lookup"


export function TweetCreate(props) {
    const textAreaRef = React.createRef()
    const {didTweet} = props
    const handleBackendUpdate = (Response, status) => {
        if (status === 201) {
            didTweet(Response)
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
            <form onSubmit={handleSubmit}>
                <textarea ref={textAreaRef} required={true} className='col-12 mb-3 form-controll'>
                </textarea>
                <button type='submit' className='btn btn-primary my-3'>Tweet</button>
            </form>
    </div>
    
}
