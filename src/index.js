import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import './index.css'
import PropTypes from 'prop-types'

function Comment({author, message, likes}) {
  return (
    <div>
      <div className="author">{author}</div>
      <div className='message'>{message}</div>
      <div className='likes'>{likes > 0? likes:'No'} likes</div>
    </div>
  )
}
Comment.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  likes: PropTypes.number,
}
const Time = ({time}) => {
  const timeString = moment(time).fromNow()
  return <span className="time">{timeString}</span>
}
const ReplyButton = () => <i className='fa fa-reply reply-button'/>
const RetweetButton = ({count}) => {
  return <span className='retweet-button'>
    <i className='fa fa-retweet'/>
    {getRetweetCount(count)}
  </span>
}
const LikeButton = ({count}) => (
  <span className='like-button'>
    <i className='fa fa-heart'/>
    {count > 0 && <span className="like-count">{count}</span>}
  </span>
)
LikeButton.propTypes = {
  count: PropTypes.number,
} 
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
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
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
  retweets: 5,
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
Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
  }).isRequired,
}
function getRetweetCount(count) {
  if(count > 0) {
    return <span className='retweet-count'>{count}</span>
  } else {
    return null
  }
}