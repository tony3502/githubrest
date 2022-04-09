import { BsBook } from 'react-icons/bs';

const Item =({project})=>{
    return(
        <div className="Item">       
        <a target="_blank" rel="noreferrer" href={project.svn_url}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <BsBook className="BsBook" />
          {" "+project.name}
        </a>
      </div>
    )
}

export default Item;