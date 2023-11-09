import React from 'react'
import { Link } from 'react-router-dom'
import './MyGigs.scss'
const MyGigs = () => {
  return (
    <div className='mygigs'>
      <div className='container'>
        <div className='title'>
          <h1>Gigs</h1>
          <Link to="/add">
            <button type='button' className=''>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Actions</th>
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

export default MyGigs