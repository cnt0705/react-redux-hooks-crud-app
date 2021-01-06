export const App = () => (
  <div className="container-fluid p-5">
    <section className="mb-5">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input type="text" className="form-control" id="formEventTitle" />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea className="form-control" id="formEventBody" />
        </div>
        <button type="submit" className="btn btn-primary mr-3">
          イベントを作成する
        </button>
        <button type="submit" className="btn btn-danger mr-3">
          すべてのイベントを削除する
        </button>
      </form>
    </section>

    <section className="mb-5">
      <h4>イベント作成フォーム</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">タイトル</th>
            <th scope="col">ボディ</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </section>
  </div>
)
