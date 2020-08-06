function sendMessage() {
  var request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://discordapp.com/api/webhooks/741021669233000589/Xm7Xxuxr7YVKCdNKJhp39PBcot_4p5USqk-l0TnSe_-HAt2eD-SE_z0Qc1-qUGMCWqcv"
  );
  request.setRequestHeader("Content-type", "application/json");
  var message_content = document.getElementById("Message").value;
  var username = document.getElementById("username").value;
  var params = {
    username: username,
    avatar_url: "",
    content: message_content
  };
  request.send(JSON.stringify(params));
  alert("Message Sent!")
}
