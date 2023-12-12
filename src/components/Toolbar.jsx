// {button: [], state,}

const Toolbar = (props) => {
  const filters = props.filters;
  const selectFilte = props.onSelectFilter
  return (
    <div className="tabs my-5 space-x-4">
      {filters.map((filter, index) => {
        return <button key={index} 
        className={`tab bg-gray hover:bg-gray-400 text-gray-800 hover:text-white font-semibold py-1 px-4 border border-gray-400 rounded shadow ${props.selected === filter ? 'tab-active bg-gray-400 text-white' : ''}`} 
        onClick={() => selectFilte(filter)}
        type={"button"}
        >{filter}</button>
      })}
    </div>
  )
}
export default Toolbar;