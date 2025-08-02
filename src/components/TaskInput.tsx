 export function TaskInput() {
  return (
    <div className="m-2 p-2">
      <form className="row">
        <div className="col-10">
          <h2 className="mt-1 mb-2">Natchaya Duangphang</h2>
          <input
            className="form-control"
            type="text"
            placeholder="Insert a task here.."
          ></input>
        </div>
        <div className="col-2 d-flex justify-content-center align-self-end">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
}