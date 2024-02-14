import React from 'react'

function ServiceTable() {
  return (
    <div className='p-5'>

<table className="table table-bordered border-primary">
                <thead className={{bg:'gray'}}>
                  <h1 className='text-center'>Details</h1>
                  <tr >
                    <th >User ID</th>
                    <th >Username</th>
                    <th >Email</th>
                    <th >Status</th>
                
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td> 
                        <button className='btn'><i class="fa-solid fa-pen"></i></button>
                        <button className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
                 
                        </tr> 
                </tbody>
              </table>
        </div>
  )
}

export default ServiceTable