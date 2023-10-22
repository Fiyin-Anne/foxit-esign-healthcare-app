const InputText = ({ id, name, label, type, placeholder, onInputChange }) => {

    return (
        <div className='form-control w-full max-w-xs'>
          <label htmlFor='name' className='label'>
            <span className="label-text">{label}</span>
          </label>

          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            required
            className='input input-bordered w-full max-w-xs'
            onChange={(e) => onInputChange(name, e.target.value)}
          />
      </div>
    );
};

export default InputText;