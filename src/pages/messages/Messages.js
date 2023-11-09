import React from 'react'
import './Messages.scss'
const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Eswar",
    isSeller: false
}
  return (
    <div className='messages'>
      <div className='container'>
        <div className='title'>
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img src='./images/book.png' alt='' className='img' />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src='./images/delete.png' alt='' className='delete' />
            </td>
          </tr>
          <tr>
            <td>
              <img src='./images/book.png' alt='' className='img' />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src='./images/delete.png' alt='' className='delete' />
            </td>
          </tr>
          <tr>
            <td>
              <img src='./images/book.png' alt='' className='img' />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src='./images/delete.png' alt='' className='delete' />
            </td>
          </tr>
          <tr>
            <td>
              <img src='./images/book.png' alt='' className='img' />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src='./images/delete.png' alt='' className='delete' />
            </td>
          </tr>
          <tr>
            <td>
              <img src='./images/book.png' alt='' className='img' />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src='./images/delete.png' alt='' className='delete' />
            </td>
          </tr>
          <tr>
            <td>
              <img src='./images/book.png' alt='' className='img' />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src='./images/delete.png' alt='' className='delete' />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages;