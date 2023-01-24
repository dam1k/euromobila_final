import {useEffect, useState} from 'react'
import { shippingInfoQuery } from '../utils/data'
import { client } from '../client'
import './Livrare.scss';
import Spinner from "../components/Spinner";
import {setDocumentTitle} from "../utils/setDocumentTitle"

const Livrare = () => {
     setDocumentTitle('Euromobila | Livrare')
     const [shippingInfo, setShippingInfo] = useState([]);
     useEffect(() => {
          const query = shippingInfoQuery;

          client.fetch(query)
          .then(result => {
               setShippingInfo(result);
          }).catch(error => console.log(error))
     }, [])

     if(shippingInfo.length < 1) {
          return <Spinner/>
     }
  return (
    <div className="livrare container">
     <h1 className="pageTitle">Livrare</h1>
     <div className="gold-detail"></div>
{shippingInfo.length > 0 && <table className="GeneratedTable">
<thead>
<tr>
     <th></th>
     <th>{shippingInfo[1].locatie}</th>
     <th>{shippingInfo[0].locatie}</th>
</tr>
</thead>
<tbody>
<tr>
     <td><strong>Livrare</strong></td>
     <td>{shippingInfo[1].livrare}</td>
     <td>{shippingInfo[0].livrare}</td>
</tr>
<tr>
     <td><strong>Ansamblare</strong></td>
     <td>{shippingInfo[1].ansamblare}</td>
     <td>{shippingInfo[0].ansamblare}</td>
</tr>
<tr>
     <td><strong>Ridicare canapele</strong></td>
     <td>{shippingInfo[1].ridicare_canapele}</td>
     <td>{shippingInfo[0].ridicare_canapele}</td>
</tr>
<tr>
     <td><strong>Ridicare coltare</strong></td>
     <td>{shippingInfo[1].ridicare_coltare}</td>
     <td>{shippingInfo[0].ridicare_coltare}</td>
</tr>
</tbody>
</table>}
<h3>
Va raspundem la orice intrebari la numarul de telefon, sau vizitand salonul.
</h3>
    </div>
  )
}

export default Livrare