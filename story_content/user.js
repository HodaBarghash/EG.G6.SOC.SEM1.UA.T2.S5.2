function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5VjaPxGPUL9":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzh2jh-eoDvuFz5S9doHqN5d9nBEWat9WarTCDEGUOi7FeqwMLIpU6awfghY1I5gvcrDQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v1q1attempts:player.GetVar("v1q1attempts"),v1q1answeredcorrect:player.GetVar("v1q1answeredcorrect")})
	}
	)
}

