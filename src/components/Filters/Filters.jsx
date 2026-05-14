import "./Filters.css"
function Filters({ filters, setFilters }) {
    function handleChange(e) {
      setFilters({
        ...filters,
        [e.target.name]: e.target.value,
      })
    }
  
    return (
      <div className='filters'>
        <select
          name='gender'
          onChange={handleChange}
        >
          <option value=''>
            Todos
          </option>
  
          <option value='male'>
            Hombres
          </option>
  
          <option value='female'>
            Mujeres
          </option>
        </select>
  
        <select
          name='nationality'
          onChange={handleChange}
        >
          <option value=''>
            Todas las nacionalidades
          </option>
  
          <option value='MX'>
            México
          </option>
  
          <option value='US'>
            Estados Unidos
          </option>
  
          <option value='ES'>
            España
          </option>
        </select>
  
        <input
          type='number'
          name='minAge'
          placeholder='Edad mínima'
          onChange={handleChange}
        />
  
        <input
          type='number'
          name='maxAge'
          placeholder='Edad máxima'
          onChange={handleChange}
        />
      </div>
    )
  }
  
  export default Filters