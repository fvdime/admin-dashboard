import Image from 'next/image'
import React from 'react'
import SearchBar from './SearchBar'

const Table = ({
  thName,
  thInfo,
  thPrice,
  onClick,
  tableLabel,
  image
}) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <div className='flex flex-row justify-between items-center mb-8'>
          <h1 className='text-xl font-semibold'>{tableLabel}</h1>
          <SearchBar/>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>{thName}</th>
              {thInfo ? <th>{thInfo}</th>: '' }
              {thPrice ? <th>{thPrice}</th>: '' }
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  {image ? 
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        height={48}
                        width={48}
                        src="/51.jpg" alt="Avatar" />
                    </div>
                  </div>
                  : ''}
                  <div>
                    <div className="font-bold">afdgsdgsdh</div>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                  </div>
                </div>
              </td>
              {thInfo ? 
              <td>
              userone@gmail.com
              <br/>
              <span className="badge badge-ghost badge-sm">+123 456 789</span>
            </td>
              : '' }
              {thPrice ? 
              <td>
               $456
            </td>
              : '' }
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody> 
        </table>
      </div>
    </div>
  )
}

export default Table