// {button: [], state,}

const Toolbar = (props) => {
  console.log(props)
  const filters = props.filters
  return (
    <div className="tabs my-5 space-x-4">
      {filters.map((filter, index) => {
        return <a key={index} 
        className={`tab bg-white hover:bg-gray-400 text-gray-800 hover:text-white font-semibold py-1 px-4 border border-gray-400 rounded shadow ${props.selected === filter ? 'tab-active bg-gray-400 text-white' : ''}`} 
        onClick={props.onSelectFilter}
        >{filter}</a>
      })}
    </div>
  )
}
export default Toolbar