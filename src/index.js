import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import './index.css'
const Time = ({time}) => {
  const timeString = moment(time).fromNow()
  return <span className="time">{timeString}</span>
}
const ReplyButton = () => <i className='fa fa-reply reply-button'/>
const RetweetButton = () => <i className='fa fa-retweet retweet-button'/>
const LikeButton = () => <i className='fa fa-heart like-button'/>
const MoreOptionsButton = () => (
  <i className='fa fa-ellipsis-h more-options-button'/>
)
function Tweet({tweet}) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className='content'>
        <Author author = {tweet.author}/>
        <Time />
        <Message message={tweet.message} />
        <div className='buttons'>
          <ReplyButton/>
          <RetweetButton/>
          <LikeButton/>
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  )
}
const testTweet = {
  message: 'Something about cats.',
  gravatar: 'xyz',
  author: {
    handle: 'catperson',
    name: 'IAMA Cat Person',
  },
  likes: 2,
  retweets: 0,
  timestamp: '2016-07-30 21:24:37',
}
ReactDOM.render(<Tweet tweet = {testTweet} />, document.querySelector('#root'))
function Avatar({hash}) {
  const url = `https://www.gravatar.com/avatar/${hash}`
  return (
    <img
    src={url}
    className="avatar"
    alt="avatar"
    >
    </img>
  )
}
function Message({message}) {
  return <div className='message'>{message}</div>
}
function Author({author}) {
  return (
    <span className='author'>
      <span className='name'>{author.name}</span>
      <span className='handle'>@{author.handle}</span>
    </span>
  )
}