class ServerApi {
  static sendFeedback = (feedBackData) => {
    fetch("http://localhost:5216/email/send-to-server", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedBackData)
    })
      .then(resp => resp.text())
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default ServerApi;