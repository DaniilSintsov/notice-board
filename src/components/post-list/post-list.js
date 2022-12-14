import React from 'react'
import PostListItem from '../post-list-item/post-list-item'
import { ListGroup } from 'reactstrap'
import './post-list.css'

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  const elements = posts.map(item => {
    const { id, ...itemProps } = item
    return (
      <li
        key={id}
        className="list-group-item-label">
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
        />
      </li>
    )
  })

  return (
    <ListGroup className="app-list">
      {elements.length ? (
        elements
      ) : (
        <div style={{ textAlign: 'center', fontSize: 24 }}>
          Записи не найдены
        </div>
      )}
    </ListGroup>
  )
}

export default PostList
