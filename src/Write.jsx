export default function Write() {
  return (
    <div className="write">
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="writeInput">Title</label>
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeText"></textarea>
        </div>
        <div className="writeFormGroup">
          <label htmlFor="writeInput">SubTitle</label>
          <input
            type="text"
            placeholder="SubTitle"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeText"></textarea>
        </div>
        <div className="writeFormGroup">
          <label htmlFor="writeInput">Image</label>
          <input
            type="url"
            placeholder="Image"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Image Caption"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
