import React from 'react';

const PaidLeave = () => {
    return(

        <div className="card card-default paid-leave-application-card">
          <div className="card-header card-header-border-bottom">
            <h2>Paid Leave Application</h2>
            <a href="#" data-toggle="modal" data-target="#paidLeaveApplication">
              <i className="fa fa-plus-circle add-button" aria-hidden="true"></i>
            </a>            
          
          </div>
          <div className="card-body">

            <div className="table-responsive">
             <table className="table">
               <thead>
                 <tr>
                   <th>Date</th>
                   <th>Description</th>
                   <th> </th>
                </tr>
               </thead>
               <tbody>
                 <tr>
                   <td> 9/12 </td>
                   <td> Application Leave </td>
                   <td className="text-right"> 0.5</td>
                </tr>
                <tr>
                  <td> 9/18 </td>
                  <td> Application Leave </td>
                  <td className="text-right"> 1</td>
               </tr>
               <tr>
                  <td> 9/27 </td>
                  <td> Application Leave </td>
                  <td className="text-right"> 1</td>
                </tr>         
               </tbody>
               <tfoot>
                <td> Total </td>
                <td>  </td>
                <td className="text-right"> 2.5 </td>                 
               </tfoot>  
             </table>
            </div>
           </div>
        </div>
    
)
}
export default PaidLeave;