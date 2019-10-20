
import React from 'react';
import  useFetch  from './../hooks/useFetch';

export default function Body(){

const [data, loading] = useFetch('https://jsonplaceholder.typicode.com/comments');

return (<div>
    {loading ? ("Cargando....") :
(<ul className="list-unstyled">
{data.slice(0,5).map(({id, body, email}) =>
<li key={id} className="media my-3">
<img className=" mr-3" src="https://mdbootstrap.com/img/Photos/Others/avatar-min3.jpg" alt="Generic placeholder image" />
<div className="media-body">
  <h5 className="mt-0 mb-2 font-weight-bold">{email}</h5>
  <i className="fas fa-star blue-text"></i>
  <i className="fas fa-star blue-text"></i>
  <i className="fas fa-star blue-text"></i>
  <i className="fas fa-star blue-text"></i>
  <i className="fas fa-star blue-text"></i>
  <p>{body}</p></div>
</li> )}
</ul>)
}
</div>)

}
