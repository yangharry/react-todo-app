function Form({ handleSubmit, value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
      <input
        type="text"
        name="value"
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        style={{ flex: '10', padding: '5px' }}
        placeholder="해야 할 일을 입력하세요"
        value={value}
        onChange={handleChange}
      />
      <input
        type="submit"
        className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
        value="입력"
        style={{ flex: '1' }}
      />
    </form>
  );
}

export default Form;
